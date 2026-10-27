export interface FocusArea {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  capabilities: string[];
}

export interface StudioProfile {
  name: string;
  headline: string;
  supportingText: string;
  institution: string;
  degree: string;
  graduatingYear: string;
  location: string;
  availability: {
    status: "available" | "busy" | "limited";
    label: string;
    sublabel: string;
  };
  ctas: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
    talk: {
      label: string;
      href: string;
    };
  };
  focusAreas: FocusArea[];
  specs: {
    label: string;
    value: string;
  }[];
  links: {
    github: string;
    linkedin: string;
    upwork: string;
    email: string;
  };
}

export const studioProfile: StudioProfile = {
  name: "Aryaveer Agarwal",
  headline: "Software Engineer Building Systems That Scale.",
  supportingText:
    "I build backend systems and intelligent applications with a focus on reliability, performance, and practical problem-solving.",
  institution: "Delhi Technological University (DTU)",
  degree: "B.Tech Final Year",
  graduatingYear: "2026",
  location: "Delhi, India",
  availability: {
    status: "available",
    label: "Available for Freelance",
    sublabel: "Open to contract engineering & Upwork projects",
  },
  ctas: {
    primary: {
      label: "Explore My Work",
      href: "#projects",
    },
    secondary: {
      label: "Visit Engineering Lab",
      href: "#lab",
    },
    talk: {
      label: "Start a Project",
      href: "#contact",
    },
  },
  focusAreas: [
    {
      id: "backend",
      title: "Backend Engineering",
      eyebrow: "01 // ARCHITECTURE",
      description:
        "Building robust API services, relational and document data layers, caching hierarchies, and resilient microservices designed for deterministic uptime.",
      capabilities: [
        "REST & GraphQL API design",
        "Redis caching & rate limiting",
        "PostgreSQL schema modeling & indexing",
        "Asynchronous task queues & workers",
      ],
    },
    {
      id: "ai-ml",
      title: "AI and Machine Learning",
      eyebrow: "02 // INTELLIGENCE",
      description:
        "Developing applied machine learning pipelines, embedding-based semantic retrieval systems, and integrating computer vision models into production services.",
      capabilities: [
        "PyTorch model training & evaluation",
        "Vector search & grounded RAG pipelines",
        "Computer vision surface flaw detection",
        "Rigorous metric benchmarking (mAP, ROC-AUC)",
      ],
    },
    {
      id: "systems",
      title: "Systems and Performance",
      eyebrow: "03 // FOUNDATIONS",
      description:
        "Applying asymptotic computational complexity analysis, concurrency primitives, and hardware-conscious data structures to eliminate processing bottlenecks.",
      capabilities: [
        "Time & space complexity optimization",
        "Concurrent request flow management",
        "Memory-conscious data structures",
        "Profiling latency & query bottlenecks",
      ],
    },
    {
      id: "software-dev",
      title: "Software Development",
      eyebrow: "04 // ENGINEERING",
      description:
        "Practicing clean architecture, SOLID principles, type-safe development across TypeScript and Python, automated testing, and comprehensive documentation.",
      capabilities: [
        "TypeScript & Python strict typing",
        "SOLID design principles & decoupling",
        "Maintainable modular project structure",
        "CI/CD and reproducible environments",
      ],
    },
  ],
  specs: [
    { label: "Institution", value: "Delhi Technological University" },
    { label: "Degree Level", value: "Final-Year B.Tech (Class of 2026)" },
    { label: "Primary Languages", value: "TypeScript, Python, C++, SQL" },
    { label: "Core Domains", value: "Backend Systems, ML, Algorithmic DSA" },
    { label: "Freelance", value: "Available for Contract & Upwork" },
  ],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    upwork: "https://upwork.com",
    email: "contact@aryaveer.dev",
  },
};
