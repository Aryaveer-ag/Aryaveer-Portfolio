import type { SystemArchitectureSpec } from "../types/architecture.ts";

export const flashSaleArchitectureData: SystemArchitectureSpec = {
  id: "flash-sale-architecture",
  title: "High-Concurrency Flash Sale Engine — System Architecture",
  subtitle:
    "Component topology, inter-service protocols, concurrency boundaries, and failure mitigations.",
  defaultSelectedId: "redis-guard",
  defaultSelectionType: "node",
  nodes: [
    {
      id: "client",
      name: "Checkout Client",
      technology: "Browser / Mobile App",
      role: "Client Ingestion",
      category: "client",
      accent: "indigo",
      responsibility:
        "Initiates purchase requests on behalf of users, captures client intent, and renders deterministic checkout outcomes (Order Confirmed vs. Sold Out).",
      whyUsed:
        "Acts as the entry boundary for external incoming traffic, providing an interface for users to participate in limited-quantity sales.",
      interactions: [
        "Sends HTTPS POST /api/v1/checkout to the FastAPI application with idempotency keys.",
        "Awaits fast HTTP response (200 OK with reservation token, or 429 Sold Out).",
        "Renders checkout confirmation with a 10-minute payment countdown window.",
      ],
      failureScenarios: [
        {
          scenario: "Network timeout before receiving confirmation",
          mitigation:
            "Client sends retry request with identical idempotency token; backend recognizes token and returns cached reservation without re-decrementing stock.",
        },
        {
          scenario: "Client disconnects after reserving stock",
          mitigation:
            "Reservation TTL expires in Redis after 10 minutes, automatically releasing stock back to the public pool.",
        },
      ],
      designTradeoffs: [
        {
          decision: "Short polling vs. Persistent WebSockets",
          rationale:
            "HTTP REST with fast synchronous responses keeps connection lifetimes sub-50ms, avoiding open socket memory overhead across thousands of concurrent clients.",
        },
      ],
    },
    {
      id: "fastapi-app",
      name: "FastAPI Application",
      technology: "Python 3.12 / Uvicorn (ASGI)",
      role: "Request Ingestion & Validation",
      category: "gateway",
      accent: "cyan",
      responsibility:
        "Validates incoming request schemas, performs authentication checks, coordinates atomic inventory claims in Redis, and delegates persistence to background workers.",
      whyUsed:
        "FastAPI's asynchronous ASGI architecture handles thousands of concurrent I/O connections efficiently on a single process without blocking threads.",
      interactions: [
        "Receives HTTP requests from the Checkout Client.",
        "Executes atomic Redis Lua script via connection pool (`redis-py`).",
        "Dispatches successful order events to PostgreSQL write queue asynchronously.",
        "Returns immediate HTTP 200 or 429 status back to the client.",
      ],
      failureScenarios: [
        {
          scenario: "Process crash under sudden memory pressure",
          mitigation:
            "Stateless container deployment behind a reverse proxy; unhealthy instances are automatically recycled with zero state loss.",
        },
        {
          scenario: "Redis connection pool timeout during surge",
          mitigation:
            "Circuit breaker trips after 50ms; fast-fails with 503 Service Unavailable to protect internal services from cascading queue exhaustion.",
        },
      ],
      designTradeoffs: [
        {
          decision: "Stateless microservice vs. in-memory application state",
          rationale:
            "Maintaining inventory counters inside Python process memory would prevent horizontal multi-container scaling. Redis acts as the centralized in-memory state authority.",
        },
      ],
    },
    {
      id: "redis-guard",
      name: "Redis In-Memory Engine",
      technology: "Redis 7.x (Cluster / Sentinel)",
      role: "Atomic Concurrency Boundary",
      category: "cache",
      accent: "emerald",
      responsibility:
        "Enforces the inventory boundary in sub-millisecond memory. Executes a deterministic Lua script that checks available stock and decrements atomically in a single CPU cycle.",
      whyUsed:
        "Redis operates single-threaded per shard, guaranteeing that concurrent decrements are evaluated sequentially without relational lock contention, race conditions, or deadlocks.",
      interactions: [
        "Evaluates Lua script invoked by FastAPI application.",
        "Maintains atomic stock integer keys (`stock:item_id`).",
        "Records temporary user hold hashes with 10-minute TTL expiry.",
      ],
      failureScenarios: [
        {
          scenario: "Redis primary node crash during flash sale",
          mitigation:
            "Redis Sentinel promotes standby replica in <2 seconds. Append-Only File (AOF) persistence with `appendfsync everysec` limits potential data loss to <1 second.",
        },
        {
          scenario: "Key eviction under high memory load",
          mitigation:
            "`noeviction` maxmemory policy configured so Redis rejects writes rather than silently evicting active inventory or reservation keys.",
        },
      ],
      designTradeoffs: [
        {
          decision: "Redis Lua script vs. PostgreSQL row-level locks",
          rationale:
            "PostgreSQL row locks (`SELECT ... FOR UPDATE`) scale sequentially, creating database connection starvation during surges. Redis Lua achieves sub-millisecond throughput at the cost of eventual database consistency.",
        },
      ],
    },
    {
      id: "postgresql-store",
      name: "PostgreSQL Database",
      technology: "PostgreSQL 16 (ACID Relational)",
      role: "Audited Persistence & Source of Truth",
      category: "database",
      accent: "amber",
      responsibility:
        "Stores finalized orders, customer payment receipts, inventory reconciliation records, and immutable financial audit logs.",
      whyUsed:
        "Strict ACID compliance, relational integrity constraints, foreign key validation, and guaranteed persistence required for business auditing and fulfillment.",
      interactions: [
        "Receives asynchronous order insert jobs from FastAPI background queue workers.",
        "Validates uniqueness constraints (prevents duplicate orders for same user).",
        "Serves post-sale fulfillment queries and accounting reports.",
      ],
      failureScenarios: [
        {
          scenario: "Write queue backpressure slows persistence",
          mitigation:
            "Customer already holds confirmed reservation in Redis; PostgreSQL write lag does not block user checkout response or lose reservations.",
        },
        {
          scenario: "Disk I/O saturation on primary",
          mitigation:
            "Background workers batch inserts into multi-row statements (`INSERT INTO orders VALUES (...), (...)`) reducing WAL write amplification.",
        },
      ],
      designTradeoffs: [
        {
          decision: "Asynchronous decoupled writes vs. synchronous transactional commit",
          rationale:
            "Writing to PostgreSQL synchronously on every checkout attempt creates catastrophic lock contention during spikes. Moving persistence to background workers protects database stability.",
        },
      ],
    },
  ],
  connections: [
    {
      id: "client-to-fastapi",
      sourceId: "client",
      targetId: "fastapi-app",
      name: "Client Checkout Request",
      protocol: "HTTPS / REST JSON",
      trafficType: "Synchronous",
      dataPayload: "{\n  \"item_id\": \"sku_982\",\n  \"user_id\": \"usr_441\",\n  \"idempotency_key\": \"uuid-v4\"\n}",
      description:
        "Client initiates order attempt over HTTPS. FastAPI processes authentication and evaluates idempotency before touching downstream services.",
      failureHandling:
        "Client retries with identical idempotency token if network drops; gateway returns existing reservation without double allocation.",
    },
    {
      id: "fastapi-to-redis",
      sourceId: "fastapi-app",
      targetId: "redis-guard",
      name: "Atomic Inventory Evaluation",
      protocol: "Redis RESP / TCP Pool",
      trafficType: "Synchronous",
      dataPayload: "EVAL reserve_inventory.lua 2 stock:sku_982 resv:usr_441 1 600",
      description:
        "FastAPI executes atomic Lua script in Redis memory. If stock > 0, decrements and issues 10-minute reservation hold. Response is returned in <1ms.",
      failureHandling:
        "50ms connection timeout. If Redis is unreachable, fast-fails to client with 503 instead of hanging the connection pool.",
    },
    {
      id: "fastapi-to-postgres",
      sourceId: "fastapi-app",
      targetId: "postgresql-store",
      name: "Asynchronous Order Persistence",
      protocol: "PostgreSQL Native / Async Workers",
      trafficType: "Asynchronous / Background",
      dataPayload: "INSERT INTO orders (id, user_id, item_id, status, created_at)\nVALUES ('ord_102', 'usr_441', 'sku_982', 'RESERVED', NOW());",
      description:
        "Once Redis confirms inventory allocation, order creation jobs are enqueued and persisted to PostgreSQL asynchronously, shielding relational tables from burst traffic.",
      failureHandling:
        "Workers retry with exponential backoff on transient DB lock errors. Dead-letter queue captures unrecoverable write exceptions for manual audit.",
    },
  ],
};
