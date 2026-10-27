import { CompetencyDomain } from "@/types/skills";

export const competencyDomains: CompetencyDomain[] = [
  {
    id: "backend-systems",
    index: "01",
    title: "Backend & Systems Architecture",
    summary:
      "Design and implementation of robust server-side applications, RESTful and asynchronous communication layers, database integration, and high-reliability API architectures.",
    accent: "emerald",
    technologies: [
      { name: "Node.js", category: "framework", proficiency: "core" },
      { name: "TypeScript", category: "language", proficiency: "core" },
      { name: "Python", category: "language", proficiency: "core" },
      { name: "Express / Fastify", category: "framework", proficiency: "proficient" },
      { name: "PostgreSQL", category: "database", proficiency: "proficient" },
      { name: "Redis Caching", category: "database", proficiency: "proficient" },
      { name: "REST APIs", category: "concept", proficiency: "core" },
      { name: "Microservices", category: "concept", proficiency: "familiar" },
    ],
    keyConcepts: [
      "Rate limiting & concurrency control",
      "Stateless API design & authentication",
      "Cache invalidation & eviction strategies",
      "Relational schema normalization & indexing",
    ],
  },
  {
    id: "machine-learning",
    index: "02",
    title: "Machine Learning & Data Engineering",
    summary:
      "Applied machine learning pipelines, dataset preprocessing, model evaluation, and integrating predictive components into web services.",
    accent: "cyan",
    technologies: [
      { name: "Python", category: "language", proficiency: "core" },
      { name: "PyTorch", category: "framework", proficiency: "proficient" },
      { name: "Scikit-Learn", category: "framework", proficiency: "proficient" },
      { name: "Pandas & NumPy", category: "tool", proficiency: "core" },
      { name: "Vector Embeddings", category: "concept", proficiency: "proficient" },
      { name: "Model Evaluation", category: "concept", proficiency: "core" },
    ],
    keyConcepts: [
      "Feature engineering & normalization",
      "Supervised & unsupervised learning workflows",
      "Precision, recall & ROC-AUC performance evaluation",
      "Inference latency optimization",
    ],
  },
  {
    id: "algorithmic-foundations",
    index: "03",
    title: "Core CS & Algorithmic Foundations",
    summary:
      "Rigorous application of data structures, algorithm design, asymptotic analysis, and foundational computer science principles to solve computationally demanding problems.",
    accent: "indigo",
    technologies: [
      { name: "C++", category: "language", proficiency: "proficient" },
      { name: "Data Structures", category: "concept", proficiency: "core" },
      { name: "Algorithm Analysis", category: "concept", proficiency: "core" },
      { name: "Operating Systems", category: "concept", proficiency: "proficient" },
      { name: "Database Internals", category: "concept", proficiency: "proficient" },
    ],
    keyConcepts: [
      "Asymptotic time & space complexity (Big-O)",
      "Dynamic programming & graph traversal (BFS/DFS, Dijkstra)",
      "Trees, tries, heaps, and balanced search structures",
      "Memory layouts and cache-friendly data access",
    ],
  },
  {
    id: "toolchain-web",
    index: "04",
    title: "Engineering Toolchain & Modern Web",
    summary:
      "Modern development environments, version control hygiene, containerization basics, and performant client interfaces built on React and Next.js.",
    accent: "amber",
    technologies: [
      { name: "Git & GitHub", category: "tool", proficiency: "core" },
      { name: "Docker Basics", category: "tool", proficiency: "proficient" },
      { name: "Linux / POSIX Shell", category: "tool", proficiency: "proficient" },
      { name: "React & Next.js", category: "framework", proficiency: "proficient" },
      { name: "Tailwind CSS", category: "tool", proficiency: "core" },
      { name: "CI/CD Workflows", category: "concept", proficiency: "familiar" },
    ],
    keyConcepts: [
      "Branching models & semantic version control",
      "Server Components vs Client Components architecture",
      "Accessible markup & WCAG keyboard compliance",
      "Deterministic local development environments",
    ],
  },
];

