export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  category: "Backend & Systems" | "AI & Machine Learning" | "Computer Vision & Systems";
  badgeVariant: "emerald" | "cyan" | "indigo";
  description: string;
  problemStatement: string;
  architectureHighlights: string[];
  technologies: string[];
  statusLabel: string;
  repoUrl?: string;
  specUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "flash-sale-engine",
    title: "High-Concurrency Flash Sale Engine",
    tagline: "Distributed inventory reservation under surge traffic",
    category: "Backend & Systems",
    badgeVariant: "emerald",
    description:
      "A high-throughput backend service engineered to handle sudden traffic spikes and prevent inventory overselling during limited-quantity flash sales.",
    problemStatement:
      "Preventing database write bottlenecks, deadlocks, and race conditions when thousands of concurrent requests attempt to reserve the same finite inventory.",
    architectureHighlights: [
      "Atomic inventory decrements via Redis Lua scripts to eliminate race conditions",
      "Two-phase reservation with TTL-backed hold queue and automated rollback",
      "Asynchronous message decoupling for payment confirmation and order creation",
      "Stateless API layer designed for horizontal container scaling",
    ],
    technologies: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker"],
    statusLabel: "Architecture & Implementation",
    repoUrl: "https://github.com",
  },
  {
    id: "doc-assistant",
    title: "AI-Powered Document Assistant",
    tagline: "Grounded semantic retrieval across complex documentation",
    category: "AI & Machine Learning",
    badgeVariant: "cyan",
    description:
      "A context-aware retrieval and query assistant designed to parse technical manuals, codebases, and documentation with strict factual grounding.",
    problemStatement:
      "Enabling rapid information lookup over extensive technical corpora while eliminating generative hallucination through verified document citation.",
    architectureHighlights: [
      "Document chunking pipeline with structural header awareness",
      "Dense vector embeddings paired with cosine similarity ranking",
      "Grounded prompt synthesis injecting source document citations",
      "Pluggable service interface decoupling vector store from model inference",
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "Vector Embeddings", "Scikit-Learn"],
    statusLabel: "Pipeline & Prototype",
    repoUrl: "https://github.com",
  },
  {
    id: "pcb-defect-detection",
    title: "PCB Defect Detection System",
    tagline: "Automated surface flaw detection on printed circuit boards",
    category: "Computer Vision & Systems",
    badgeVariant: "indigo",
    description:
      "A computer vision inspection system applying convolutional neural networks to identify and localize micro-flaws on printed circuit board assemblies.",
    problemStatement:
      "Manual PCB visual inspection is prone to fatigue and misses subtle manufacturing defects such as solder bridges, missing pins, and track fractures.",
    architectureHighlights: [
      "Supervised object detection trained on categorized manufacturing flaw datasets",
      "Data augmentation pipeline handling lighting variance and surface reflections",
      "Rigorous evaluation pipeline tracking Mean Average Precision (mAP) and IoU",
      "Inference optimization prioritizing fast per-board evaluation cycles",
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "Scikit-Learn"],
    statusLabel: "Model Evaluation & Benchmarks",
    repoUrl: "https://github.com",
  },
];

