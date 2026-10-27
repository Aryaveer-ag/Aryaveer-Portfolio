import type { SkillCategory, SkillItem, AssociatedProjectSummary } from "../types/skillsExplorer.ts";
import { featuredProjects } from "./projects.ts";

export const skillCategories: SkillCategory[] = [
  "Programming",
  "Backend and APIs",
  "Databases and systems",
  "AI and machine learning",
  "Development tools",
];

export const skillsCatalog: SkillItem[] = [
  // 1. Programming
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    accent: "indigo",
    description:
      "Strictly typed application development, full-stack interface contracts, and static compile-time safety for complex system logic.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Defines domain entity models, reservation request DTOs, and asynchronous message payload types.",
    },
    courseworkContext:
      "Primary language for robust web application architectures, front-end state management, and type-safe API tooling.",
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    accent: "emerald",
    description:
      "Scientific computing, asynchronous API runtimes, machine learning pipelines, and automated dataset processing.",
    associatedProjectIds: ["doc-assistant", "pcb-defect-detection"],
    projectApplications: {
      "doc-assistant":
        "Powers the semantic retrieval pipeline, vector embedding generation, and FastAPI service endpoints.",
      "pcb-defect-detection":
        "Powers CNN dataset preprocessing, PyTorch training pipelines, and computer vision inference loops.",
    },
    courseworkContext:
      "Extensively applied across numerical methods, machine learning coursework, and backend scripting at DTU.",
  },
  {
    id: "cpp",
    name: "C++",
    category: "Programming",
    accent: "indigo",
    description:
      "Low-level memory management, systems programming, and high-performance algorithmic problem solving with strict runtime bounds.",
    associatedProjectIds: [],
    courseworkContext:
      "Primary language for Data Structures & Algorithms coursework at DTU; competitive programming, pointer manipulation, and asymptotic performance profiling.",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Programming",
    accent: "cyan",
    description:
      "Relational schema modeling, multi-table queries, ACID transactional isolation, and query execution plan optimization.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Authoring schema migration scripts, transactional inventory commits, and conflict resolution rules in PostgreSQL.",
    },
    courseworkContext:
      "Relational Database Management Systems (DBMS) lab and coursework at DTU covering normalization and ACID compliance.",
  },

  // 2. Backend and APIs
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend and APIs",
    accent: "cyan",
    description:
      "Modern, high-performance Python asynchronous web framework with automatic OpenAPI documentation and strict Pydantic validation.",
    associatedProjectIds: ["doc-assistant"],
    projectApplications: {
      "doc-assistant":
        "Asynchronous query endpoint serving vector similarity searches and document chunk citations with sub-100ms response times.",
    },
    courseworkContext:
      "Applied in building modular microservice endpoints and REST API prototypes for machine learning services.",
  },
  {
    id: "nodejs-runtime",
    name: "Node.js & Express",
    category: "Backend and APIs",
    accent: "emerald",
    description:
      "Event-driven asynchronous server-side runtime for high-concurrency network services and decoupled I/O.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Non-blocking event loop architecture handling concurrent purchase intake before dispatching to Redis Lua scripts.",
    },
    courseworkContext:
      "Client-server architecture, asynchronous I/O event loops, and middleware pipeline design.",
  },
  {
    id: "rest-architecture",
    name: "RESTful Architecture & APIs",
    category: "Backend and APIs",
    accent: "indigo",
    description:
      "Clean API contract design adhering to stateless HTTP semantics, semantic status codes, and idempotency guarantees.",
    associatedProjectIds: ["flash-sale-engine", "doc-assistant"],
    projectApplications: {
      "flash-sale-engine":
        "Idempotent reservation endpoints preventing duplicate submissions on network retries.",
      "doc-assistant":
        "Grounded document ingestion and retrieval endpoints with structured JSON responses.",
    },
    courseworkContext:
      "Computer Networks and Distributed Systems curriculum at DTU covering HTTP/HTTPS, sockets, and transport layers.",
  },
  {
    id: "concurrency-control",
    name: "Concurrency & Race Mitigation",
    category: "Backend and APIs",
    accent: "emerald",
    description:
      "Techniques and data structures to prevent race conditions, dirty reads, and overselling in high-contention environments.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Single-threaded Redis atomic operations and distributed lock timeouts to protect critical inventory sections.",
    },
    courseworkContext:
      "Operating Systems multi-threading, semaphores, mutexes, and deadlocks studied in DTU core CS curriculum.",
  },

  // 3. Databases and systems
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases and systems",
    accent: "cyan",
    description:
      "Robust relational database engine with advanced ACID transactional guarantees, foreign keys, and indexing.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Persistent ledger of completed purchases, transactional order processing, and durable state storage.",
    },
    courseworkContext:
      "Relational database theory, B-tree indexes, execution plans, and transaction isolation levels.",
  },
  {
    id: "redis",
    name: "Redis",
    category: "Databases and systems",
    accent: "emerald",
    description:
      "In-memory key-value data store used for sub-millisecond atomic caching, rate limiting, and ephemeral state holding.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Primary real-time inventory counter executing atomic Lua decrement scripts and holding temporary purchase claims.",
    },
    courseworkContext:
      "High-performance cache hierarchies, eviction policies (LRU/LFU), and memory-bounded storage strategies.",
  },
  {
    id: "distributed-fundamentals",
    name: "System Design Fundamentals",
    category: "Databases and systems",
    accent: "amber",
    description:
      "Foundations of scalable architectures including the CAP theorem, horizontal partitioning, cache-aside patterns, and decoupling.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Decoupling synchronous request intake from asynchronous database persistence via queueing patterns.",
    },
    courseworkContext:
      "Distributed systems coursework and independent engineering explorations into fault tolerance and partitioning.",
  },
  {
    id: "os-internals",
    name: "Operating Systems Principles",
    category: "Databases and systems",
    accent: "indigo",
    description:
      "Process scheduling, virtual memory management, file system architectures, and POSIX system calls.",
    associatedProjectIds: [],
    courseworkContext:
      "Rigorous core DTU curriculum: Unix processes, fork/exec, thread scheduling, page replacement, and memory virtualization.",
  },

  // 4. AI and machine learning
  {
    id: "pytorch",
    name: "PyTorch",
    category: "AI and machine learning",
    accent: "cyan",
    description:
      "Deep learning framework for building, training, and deploying neural network architectures with dynamic computational graphs.",
    associatedProjectIds: ["doc-assistant", "pcb-defect-detection"],
    projectApplications: {
      "doc-assistant":
        "Loading transformer embeddings and performing vectorized similarity matrix computations.",
      "pcb-defect-detection":
        "Configuring convolutional neural networks, transfer learning backbones, and custom loss functions.",
    },
    courseworkContext:
      "Machine Learning and Neural Networks coursework at DTU covering backpropagation and gradient descent optimization.",
  },
  {
    id: "vector-retrieval",
    name: "Vector Search & Retrieval (RAG)",
    category: "AI and machine learning",
    accent: "emerald",
    description:
      "Semantic vector space indexing, cosine distance calculation, and grounded contextual prompt assembly without hallucination.",
    associatedProjectIds: ["doc-assistant"],
    projectApplications: {
      "doc-assistant":
        "Chunking documentation, generating dense vector embeddings, and retrieving top-K passages with citations.",
    },
    courseworkContext:
      "Natural Language Processing and Information Retrieval independent research and implementation.",
  },
  {
    id: "computer-vision",
    name: "Computer Vision & Object Detection",
    category: "AI and machine learning",
    accent: "indigo",
    description:
      "Image preprocessing, bounding box regression, feature extraction, and surface defect classification.",
    associatedProjectIds: ["pcb-defect-detection"],
    projectApplications: {
      "pcb-defect-detection":
        "Automated identification of solder bridges, missing pins, and scratch defects on circuit boards.",
    },
    courseworkContext:
      "Digital Image Processing and Computer Vision academic electives at DTU.",
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn & Evaluation Metrics",
    category: "AI and machine learning",
    accent: "amber",
    description:
      "Statistical machine learning, regression, clustering, dimensionality reduction, and rigorous model evaluation.",
    associatedProjectIds: ["pcb-defect-detection", "doc-assistant"],
    projectApplications: {
      "pcb-defect-detection":
        "Computing ROC-AUC curves, confusion matrices, and precision-recall trade-offs across validation sets.",
      "doc-assistant":
        "Fast cosine similarity distance computations across normalized embedding vectors.",
    },
    courseworkContext:
      "Applied Data Science and Machine Learning laboratory at DTU.",
  },

  // 5. Development tools
  {
    id: "git",
    name: "Git & GitHub",
    category: "Development tools",
    accent: "amber",
    description:
      "Distributed version control, branch management, pull request reviews, and semantic commit hygiene.",
    associatedProjectIds: ["flash-sale-engine", "doc-assistant", "pcb-defect-detection"],
    projectApplications: {
      "flash-sale-engine":
        "Feature branch workflows, pull request reviews, and issue tracking.",
      "doc-assistant":
        "Versioned pipeline configuration and dataset tracking.",
      "pcb-defect-detection":
        "Model checkpoint and experiment reproduction tracking.",
    },
    courseworkContext:
      "Standard collaboration and project submission toolchain across all DTU lab coursework.",
  },
  {
    id: "docker",
    name: "Docker & Containerization",
    category: "Development tools",
    accent: "cyan",
    description:
      "Containerized environments ensuring reproducible execution across local development and production deployments.",
    associatedProjectIds: ["flash-sale-engine"],
    projectApplications: {
      "flash-sale-engine":
        "Multi-container orchestration of the Node.js application, Redis cache, and PostgreSQL database.",
    },
    courseworkContext:
      "Isolated testing environments and reproducible dependency management.",
  },
  {
    id: "linux-tooling",
    name: "Linux & POSIX Shell",
    category: "Development tools",
    accent: "indigo",
    description:
      "Command-line productivity, Bash scripting, system monitoring, process inspection, and environment configuration.",
    associatedProjectIds: ["flash-sale-engine", "doc-assistant", "pcb-defect-detection"],
    projectApplications: {
      "flash-sale-engine":
        "System resource monitoring, Redis CLI scripting, and container log analysis.",
      "doc-assistant":
        "Batch script automation for document corpus extraction and parsing.",
      "pcb-defect-detection":
        "Automated dataset downloading, unzipping, and image conversion scripts.",
    },
    courseworkContext:
      "Linux environment proficiency developed through DTU Systems Programming & OS labs.",
  },
  {
    id: "ci-cd",
    name: "Automated Testing & Code Quality",
    category: "Development tools",
    accent: "emerald",
    description:
      "Automated linting, static type verification, test suite execution, and reproducible builds.",
    associatedProjectIds: ["flash-sale-engine", "pcb-defect-detection"],
    projectApplications: {
      "flash-sale-engine":
        "Automated unit tests validating inventory non-overselling invariants on commit.",
      "pcb-defect-detection":
        "Automated evaluation scripts benchmarking validation mAP and inference timing.",
    },
    courseworkContext:
      "Software Engineering methodology and test-driven validation practices.",
  },
];

/**
 * Helper to retrieve associated project summaries with specific application notes for a given skill item.
 */
export function getAssociatedProjects(skill: SkillItem): AssociatedProjectSummary[] {
  const summaries: AssociatedProjectSummary[] = [];
  for (const projectId of skill.associatedProjectIds) {
    const proj = featuredProjects.find((p) => p.id === projectId);
    if (proj) {
      const applicationNote =
        skill.projectApplications?.[projectId] || proj.tagline;
      summaries.push({
        id: proj.id,
        title: proj.title,
        category: proj.category,
        applicationNote,
      });
    }
  }
  return summaries;
}
