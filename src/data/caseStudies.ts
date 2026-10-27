import type { ProjectCaseStudy } from "../types/projects.ts";

export const caseStudiesData: ProjectCaseStudy[] = [
  {
    id: "flash-sale-engine",
    slug: "flash-sale-engine",
    title: "High-Concurrency Flash Sale Engine",
    tagline: "Distributed inventory reservation under surge traffic",
    category: "Backend & Systems",
    badgeVariant: "emerald",
    statusLabel: "System Architecture & Spec",
    summary:
      "A high-throughput backend architecture designed to handle sudden traffic spikes and guarantee zero overselling during limited-quantity flash sales without locking relational database rows.",
    problemStatement:
      "During peak promotional events, thousands of concurrent requests hit the checkout endpoint within milliseconds. Standard relational transactions (`SELECT ... FOR UPDATE`) lead to database connection exhaustion, query deadlocks, and severe latency degradation under lock contention.",
    systemArchitecture: {
      overview:
        "The system decouples inventory reservation from persistent order generation. In-memory atomic counters in Redis guard the inventory boundary, while successful reservations are held in a TTL-backed queue and synced asynchronously to PostgreSQL via idempotent workers.",
      flowStages: [
        {
          order: 1,
          title: "Ingestion & Rate Limiting",
          component: "API Gateway (Fastify)",
          description:
            "Incoming requests pass through a Token Bucket rate limiter per IP/User to absorb rogue bots and burst spikes.",
        },
        {
          order: 2,
          title: "Atomic Inventory Decrement",
          component: "Redis Cluster (Lua Script)",
          description:
            "A deterministic Redis Lua script executes on a single thread: validates stock balance, decrements atomically, and records a temporary user hold key.",
        },
        {
          order: 3,
          title: "Reservation TTL Hold",
          component: "Redis Sorted Set / Key Expiry",
          description:
            "The user receives a 10-minute reservation token. If checkout is completed, the reservation converts to an order; otherwise, expired holds trigger an automated inventory refund.",
        },
        {
          order: 4,
          title: "Asynchronous Persistence",
          component: "Message Broker & PostgreSQL",
          description:
            "Order creation events are queued asynchronously and written to PostgreSQL using optimistic concurrency control, shielding the primary database from peak load.",
        },
      ],
      diagramAscii: `
[Client Requests] (10k req/sec)
       │
       ▼
┌─────────────────────────┐
│   API Gateway Layer     │ ── (Token Bucket Rate Limiting)
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Redis In-Memory Guard   │ ── [Atomic Lua Script]
│                         │    ├─ Validate Stock > 0
│                         │    ├─ Decrement Stock
│                         │    └─ Issue 10-min Reservation Hold
└───────────┬─────────────┘
            │
            ▼ (Async Event Queue)
┌─────────────────────────┐
│ Background Sync Worker  │ ── [Idempotent Batch Writes]
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ PostgreSQL Relational DB│ ── (Final Audited Orders & Receipts)
└─────────────────────────┘
`,
    },
    tradeoffs: [
      {
        decision: "In-memory atomic counter vs. Database row-level locks",
        chosenApproach: "Redis Lua script atomic operations",
        alternativeConsidered: "PostgreSQL `SELECT ... FOR UPDATE`",
        rationale:
          "Relational row locks create sequential queuing where latency scales linearly with request volume, risking pool starvation. In-memory single-threaded execution in Redis provides sub-millisecond deterministic isolation at the cost of requiring an asynchronous persistence sync mechanism.",
      },
      {
        decision: "Synchronous order generation vs. Two-phase reservation hold",
        chosenApproach: "Two-phase reservation with TTL",
        alternativeConsidered: "Immediate synchronous database insert on checkout click",
        rationale:
          "Splitting the checkout into a fast inventory claim phase followed by an asynchronous payment window prevents long-lived open database transactions during external payment gateway calls.",
      },
    ],
    failureModes: [
      {
        scenario: "Redis instance crash before queue sync",
        mitigation:
          "Redis AOF (Append-Only File) persistence configured with `appendfsync everysec` alongside master-replica failover. A reconciliation job audits completed payment receipts against inventory counts.",
      },
      {
        scenario: "User abandons checkout after reserving inventory",
        mitigation:
          "Redis TTL key expiration triggers a keyspace notification worker that atomically increments stock back to the active pool, freeing inventory for waiting customers.",
      },
    ],
    codeSnippet: {
      filename: "reserve_inventory.lua",
      language: "lua",
      explanation:
        "Deterministic Redis Lua script ensuring stock check and decrement happen atomically in a single CPU cycle without race conditions.",
      code: `-- Keys: KEYS[1] = inventory_key, KEYS[2] = user_reservation_set
-- Args: ARGV[1] = quantity, ARGV[2] = user_id, ARGV[3] = ttl_seconds

local stock = tonumber(redis.call('GET', KEYS[1]) or '0')
local quantity = tonumber(ARGV[1])
local userId = ARGV[2]
local ttl = tonumber(ARGV[3])

-- Check if user already holds a pending reservation
if redis.call('HEXISTS', KEYS[2], userId) == 1 then
    return {0, "ALREADY_RESERVED"}
end

-- Validate inventory availability
if stock < quantity then
    return {-1, "OUT_OF_STOCK"}
end

-- Atomically decrement stock and register reservation
redis.call('DECRBY', KEYS[1], quantity)
redis.call('HSET', KEYS[2], userId, quantity)
redis.call('EXPIRE', KEYS[2], ttl)

return {1, "RESERVATION_CONFIRMED"}`,
    },
    technologies: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "Lua"],
    links: {
      github: "https://github.com",
      specDoc: "#",
    },
  },
  {
    id: "doc-assistant",
    slug: "doc-assistant",
    title: "AI-Powered Document Assistant",
    tagline: "Grounded semantic retrieval across complex documentation",
    category: "AI & Machine Learning",
    badgeVariant: "cyan",
    statusLabel: "Pipeline & Prototype",
    summary:
      "A context-aware retrieval and query assistant designed to parse technical manuals, codebases, and documentation with strict factual grounding and zero generative hallucination.",
    problemStatement:
      "Traditional keyword search fails to capture semantic synonyms and contextual intent in technical manuals. Conversely, vanilla LLM generation frequently fabricates plausible-sounding but incorrect code syntax and non-existent configuration flags.",
    systemArchitecture: {
      overview:
        "The system implements a Retrieval-Augmented Generation (RAG) architecture. Technical documents are preprocessed through structural, AST-aware chunking, indexed via dense vector embeddings, and retrieved using cosine similarity with strict prompt grounding.",
      flowStages: [
        {
          order: 1,
          title: "Document Ingestion & Chunking",
          component: "Preprocessing Pipeline",
          description:
            "Documents are segmented into semantic chunks preserving heading hierarchy, code block boundaries, and metadata context tags.",
        },
        {
          order: 2,
          title: "Vector Embedding & Indexing",
          component: "Embedding Model & Vector Store",
          description:
            "Chunks are transformed into 768-dimensional dense vectors and stored in an indexed vector collection optimized for approximate nearest neighbor search.",
        },
        {
          order: 3,
          title: "Semantic Similarity Retrieval",
          component: "Retrieval Engine",
          description:
            "Incoming user queries are embedded and compared against chunk indices using cosine similarity, filtering out low-confidence matches below threshold.",
        },
        {
          order: 4,
          title: "Grounded Prompt Synthesis",
          component: "Inference Layer",
          description:
            "The top-ranked context passages are formatted into a constrained system prompt with mandatory source attribution instructions.",
        },
      ],
      diagramAscii: `
[Technical Markdown & Docs]
       │
       ▼
┌─────────────────────────┐
│ Structure-Aware Chunking│ ── (Preserves Headings & Code Blocks)
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Vector Embedding Model  │ ── [Dense 768-dim Vectors]
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Vector Index / Store    │ ◄── [User Query Vector]
└───────────┬─────────────┘
            │ (Top-k Cosine Similarity)
            ▼
┌─────────────────────────┐
│ Grounded Context Synthes│ ── [Strict Attribution Prompt]
└───────────┬─────────────┘
            │
            ▼
[Grounded Answer with Verified Source Citations]
`,
    },
    tradeoffs: [
      {
        decision: "Fixed character chunking vs. Structure-aware semantic chunking",
        chosenApproach: "Structure-aware chunking (Markdown & AST)",
        alternativeConsidered: "Naive 500-token sliding window",
        rationale:
          "Sliding windows frequently slice code blocks or function declarations in half, destroying the semantic coherence required for accurate embeddings. Structure-aware chunking respects section boundaries and code fences.",
      },
      {
        decision: "Open-ended generation vs. Constrained factual extraction",
        chosenApproach: "Constrained prompt grounding with fallback refusal",
        alternativeConsidered: "Permissive speculative completion",
        rationale:
          "In engineering documentation, an incomplete answer with verifiable citations is vastly superior to a confidently fabricated API method. If similarity score is below 0.72, the system explicitly returns 'Information not found in context'.",
      },
    ],
    failureModes: [
      {
        scenario: "Irrelevant or low-similarity retrieval results",
        mitigation:
          "Strict similarity cutoff threshold. If no chunks exceed confidence threshold, system refuses to answer and prompts the user for specific keywords or file references.",
      },
      {
        scenario: "Context window saturation with large document corpora",
        mitigation:
          "Max token budget enforcement with contextual re-ranking (cross-encoder) to select only top-3 high-relevance chunks before prompt synthesis.",
      },
    ],
    codeSnippet: {
      filename: "grounded_retrieval.py",
      language: "python",
      explanation:
        "Context synthesis module enforcing strict document grounding and generating formatted citation metadata.",
      code: `from typing import List, Dict, Any
import numpy as np

def synthesize_grounded_context(
    query_vector: np.ndarray,
    chunk_index: List[Dict[str, Any]],
    similarity_threshold: float = 0.72,
    top_k: int = 3
) -> Dict[str, Any]:
    """
    Ranks document chunks by cosine similarity and builds grounded prompt context.
    """
    scored_chunks = []
    for chunk in chunk_index:
        # Compute normalized cosine similarity
        norm_q = np.linalg.norm(query_vector)
        norm_c = np.linalg.norm(chunk["vector"])
        if norm_q == 0 or norm_c == 0:
            continue
        sim = float(np.dot(query_vector, chunk["vector"]) / (norm_q * norm_c))
        
        if sim >= similarity_threshold:
            scored_chunks.append((sim, chunk))

    scored_chunks.sort(key=lambda x: x[0], reverse=True)
    selected = scored_chunks[:top_k]

    if not selected:
        return {
            "is_grounded": False,
            "context_prompt": "",
            "citations": []
        }

    context_blocks = []
    citations = []
    for sim, chunk in selected:
        context_blocks.append(f"[{chunk['file_ref']}#L{chunk['start_line']}]: {chunk['content']}")
        citations.append({
            "file": chunk["file_ref"],
            "line_range": f"{chunk['start_line']}-{chunk['end_line']}",
            "confidence": round(sim, 3)
        })

    return {
        "is_grounded": True,
        "context_prompt": "\\n\\n---\\n\\n".join(context_blocks),
        "citations": citations
    }`,
    },
    technologies: ["Python", "PyTorch", "FastAPI", "Vector Embeddings", "Scikit-Learn", "NumPy"],
    links: {
      github: "https://github.com",
      specDoc: "#",
    },
  },
  {
    id: "pcb-defect-detection",
    slug: "pcb-defect-detection",
    title: "PCB Defect Detection System",
    tagline: "Automated surface flaw detection on printed circuit boards",
    category: "Computer Vision & Systems",
    badgeVariant: "indigo",
    statusLabel: "Model Evaluation & Benchmarks",
    summary:
      "A computer vision inspection system applying convolutional neural networks to identify and localize micro-flaws (solder bridges, missing components, broken traces) on printed circuit boards.",
    problemStatement:
      "Manual visual inspection of printed circuit boards on manufacturing assembly lines suffers from eye fatigue, slow throughput, and inconsistent defect classification rates, especially on high-density surface-mount devices (SMD).",
    systemArchitecture: {
      overview:
        "The pipeline ingests high-resolution top-down PCB images, applies illumination-normalization augmentations, feeds patches into a convolutional object detection backbone, and outputs localized bounding boxes tagged with flaw categories and confidence scores.",
      flowStages: [
        {
          order: 1,
          title: "Image Acquisition & Preprocessing",
          component: "Image Pipeline (OpenCV)",
          description:
            "High-resolution board imagery is normalized for glare, resized with aspect preservation, and split into overlapping evaluation tiles.",
        },
        {
          order: 2,
          title: "Feature Extraction & Bounding Boxes",
          component: "Convolutional Backbone (PyTorch)",
          description:
            "Multi-scale feature maps detect spatial anomalies corresponding to solder bridges, hole misalignments, and missing surface-mount pins.",
        },
        {
          order: 3,
          title: "Non-Maximum Suppression (NMS)",
          component: "Post-Processing Filter",
          description:
            "Overlapping candidate bounding boxes are consolidated using IoU thresholding to prevent duplicate defect detections.",
        },
        {
          order: 4,
          title: "Metric Evaluation & Quality Audit",
          component: "Audit Engine",
          description:
            "Defect counts and coordinates are cross-referenced with production tolerance thresholds and logged to quality dashboards.",
        },
      ],
      diagramAscii: `
[High-Res PCB Imagery]
       │
       ▼
┌─────────────────────────┐
│ Image Tiling & Glare    │ ── (Contrast & Illumination Norm)
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ CNN Detection Backbone  │ ── [Multi-Scale Feature Pyramid]
└───────────┬─────────────┘
            │ (Raw Candidate Boxes)
            ▼
┌─────────────────────────┐
│ Non-Maximum Suppression │ ── [IoU Threshold Consolidation]
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Defect Class & Location │ ── [Solder Bridge / Missing SMD]
└───────────┬─────────────┘
            │
            ▼
[Inspection Report with Coordinates & Confidence Scores]
`,
    },
    tradeoffs: [
      {
        decision: "Single-stage detector vs. Two-stage R-CNN architecture",
        chosenApproach: "Anchor-based single-stage detector",
        alternativeConsidered: "Faster R-CNN with Region Proposal Network",
        rationale:
          "Two-stage architectures provide marginal improvements on tiny artifacts but run at prohibitive latency (>200ms/frame), making them unsuitable for live conveyor belt speeds. Single-stage networks deliver acceptable mAP while operating within the sub-50ms inference budget.",
      },
      {
        decision: "Full-board single inference vs. Overlapping patch tiling",
        chosenApproach: "Overlapping patch tiling (512x512 with 20% stride)",
        alternativeConsidered: "Downsampling full 4000x3000 image to 640x640",
        rationale:
          "Downsampling high-resolution PCB images destroys microscopic trace bridges (<0.1mm width). Tiling preserves pixel-level fidelity of thin copper traces at the cost of requiring an NMS pass over tile boundaries.",
      },
    ],
    failureModes: [
      {
        scenario: "False positives from metallic solder reflections",
        mitigation:
          "Polarized lighting simulation during data augmentation (random contrast and saturation jittering) to train network invariance to surface reflections.",
      },
      {
        scenario: "Defects spanning tile boundaries split into duplicate flags",
        mitigation:
          "Global coordinate space translation with cross-tile Non-Maximum Suppression (NMS) merging bounding boxes that overlap by IoU > 0.45.",
      },
    ],
    codeSnippet: {
      filename: "iou_nms_evaluation.py",
      language: "python",
      explanation:
        "Intersection-over-Union (IoU) calculation and Non-Maximum Suppression algorithm consolidating overlapping candidate defect detections.",
      code: `import numpy as np
from typing import List, Tuple

def compute_iou(box_a: List[float], box_b: List[float]) -> float:
    """Computes IoU between two bounding boxes [x1, y1, x2, y2]."""
    x1 = max(box_a[0], box_b[0])
    y1 = max(box_a[1], box_b[1])
    x2 = min(box_a[2], box_b[2])
    y2 = min(box_a[3], box_b[3])

    intersection = max(0.0, x2 - x1) * max(0.0, y2 - y1)
    area_a = (box_a[2] - box_a[0]) * (box_a[3] - box_a[1])
    area_b = (box_b[2] - box_b[0]) * (box_b[3] - box_b[1])
    union = area_a + area_b - intersection

    return intersection / union if union > 0 else 0.0

def non_max_suppression(
    detections: List[Tuple[List[float], float, str]],
    iou_threshold: float = 0.45
) -> List[Tuple[List[float], float, str]]:
    """
    Consolidates candidate bounding boxes.
    detections: list of ([x1, y1, x2, y2], confidence, class_label)
    """
    if not detections:
        return []

    # Sort descending by confidence
    detections.sort(key=lambda d: d[1], reverse=True)
    kept_detections = []

    while detections:
        best = detections.pop(0)
        kept_detections.append(best)
        best_box = best[0]

        # Discard remaining boxes with high overlap of same class
        detections = [
            d for d in detections
            if d[2] != best[2] or compute_iou(best_box, d[0]) < iou_threshold
        ]

    return kept_detections`,
    },
    technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "Scikit-Learn"],
    links: {
      github: "https://github.com",
      specDoc: "#",
    },
  },
];

