import type { SuggestedQuestion } from "../types/assistant.ts";

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: "q-backend",
    text: "What backend projects has Aryaveer built?",
    category: "backend",
  },
  {
    id: "q-flash-sale",
    text: "Explain the flash-sale engine.",
    category: "backend",
  },
  {
    id: "q-ai",
    text: "Show me his AI projects.",
    category: "ai",
  },
  {
    id: "q-tech",
    text: "What technologies has he used?",
    category: "skills",
  },
  {
    id: "q-contact",
    text: "How can I discuss a project with him?",
    category: "contact",
  },
];

export interface KnowledgeTopic {
  id: string;
  keywords: string[];
  patterns: RegExp[];
  answer: string;
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  // 1. Backend Projects
  {
    id: "backend-projects",
    keywords: [
      "backend",
      "server",
      "distributed",
      "architecture",
      "microservice",
      "concurrency",
      "backend projects",
    ],
    patterns: [
      /backend project/i,
      /what.*backend/i,
      /server.*built/i,
      /systems.*built/i,
    ],
    answer:
      "Aryaveer's primary backend project is the **High-Concurrency Flash Sale Engine**.\n\n" +
      "It is engineered to prevent database write bottlenecks and eliminate inventory overselling during massive concurrent traffic spikes. It uses atomic Redis Lua scripts for sub-millisecond stock decrements, a 15-minute TTL reservation hold queue, and asynchronous message queue decoupling to PostgreSQL.\n\n" +
      "You can explore the full case study under [Featured Projects](#projects) or test the deterministic simulation live in the [Engineering Lab](#lab).",
  },

  // 2. Flash Sale Engine Deep Dive
  {
    id: "flash-sale-deep-dive",
    keywords: [
      "flash-sale",
      "flash sale",
      "redis",
      "lua",
      "overselling",
      "inventory",
      "reservation",
      "contention",
      "engine",
    ],
    patterns: [
      /explain.*flash.*sale/i,
      /how does.*flash.*sale/i,
      /flash.*sale.*engine/i,
      /oversell/i,
      /inventory.*simulation/i,
    ],
    answer:
      "The **High-Concurrency Flash Sale Engine** solves race conditions when thousands of concurrent requests target finite stock:\n\n" +
      "1. **Atomic Decrements:** Uses Redis Lua scripts to execute check-and-decrement atomically in a single round-trip, guaranteeing remaining inventory never drops below zero ($0$ overselling invariant).\n" +
      "2. **Two-Phase Reservation:** Successful reservations are held with a 15-minute TTL key. If payment is uncompleted, stock auto-returns to the pool.\n" +
      "3. **Asynchronous Persistence:** Orders are queued asynchronously to PostgreSQL to decouple read throughput from heavy relational writes.\n\n" +
      "You can test this behavior interactively in the [Engineering Lab Simulator](#lab) or inspect the component topology in the [Architecture Explorer](#lab).",
  },

  // 3. AI & Machine Learning Projects
  {
    id: "ai-projects",
    keywords: [
      "ai",
      "machine learning",
      "ml",
      "deep learning",
      "pytorch",
      "vision",
      "document",
      "rag",
      "pcb",
      "assistant",
    ],
    patterns: [
      /ai project/i,
      /show.*ai/i,
      /machine learning/i,
      /document assistant/i,
      /pcb/i,
      /computer vision/i,
    ],
    answer:
      "Aryaveer has engineered two featured AI and machine learning systems:\n\n" +
      "1. **AI-Powered Document Assistant:** A grounded semantic retrieval (RAG) pipeline designed for technical documentation. Uses dense vector embeddings, cosine similarity ranking, and strict citation injection to eliminate hallucination.\n" +
      "2. **PCB Defect Detection System:** A computer vision inspection pipeline using convolutional neural networks in PyTorch to detect and localize manufacturing flaws (solder bridges, missing pins, track fractures) on circuit boards.\n\n" +
      "Both systems are detailed in the [Case Studies section](#projects).",
  },

  // 4. Technologies & Tech Stack
  {
    id: "technologies-used",
    keywords: [
      "technologies",
      "tech stack",
      "languages",
      "skills",
      "tools",
      "frameworks",
      "stack",
      "typescript",
      "python",
      "c++",
      "redis",
      "postgres",
    ],
    patterns: [
      /what technolog/i,
      /what stack/i,
      /what skills/i,
      /programming language/i,
      /tech stack/i,
      /tools.*used/i,
    ],
    answer:
      "Aryaveer's technical stack is organized across 5 core domains:\n\n" +
      "- **Programming:** TypeScript, Python, C++, SQL\n" +
      "- **Backend & APIs:** FastAPI, Node.js & Express, RESTful APIs, Concurrency Control\n" +
      "- **Databases & Systems:** PostgreSQL, Redis (Lua/Caching), Distributed Systems, Operating Systems (POSIX)\n" +
      "- **AI & Machine Learning:** PyTorch, Vector Search/RAG, Computer Vision, Scikit-Learn\n" +
      "- **Development Tools:** Docker, Git & GitHub, Linux/Shell, CI/CD & Automated Testing\n\n" +
      "You can interact with every skill and its exact project application in the [Skills Matrix](#about).",
  },

  // 5. Contact & Collaboration
  {
    id: "contact-discussion",
    keywords: [
      "contact",
      "discuss",
      "hire",
      "email",
      "upwork",
      "freelance",
      "collaborate",
      "talk",
      "reach out",
      "connect",
    ],
    patterns: [
      /how.*discuss/i,
      /how.*contact/i,
      /how.*hire/i,
      /work together/i,
      /start.*project/i,
      /email/i,
    ],
    answer:
      "You can discuss a project or contract inquiry with Aryaveer through the following verified channels:\n\n" +
      "- **Direct Email:** [contact@aryaveer.dev](mailto:contact@aryaveer.dev) — monitored regularly for engineering inquiries.\n" +
      "- **Upwork:** Available for freelance backend development and machine learning contracts.\n" +
      "- **LinkedIn:** Connect for professional and recruitment inquiries.\n" +
      "- **Quick Inquiry Form:** Send a message directly via the [Contact Section](#contact).\n\n" +
      "Engineering resumes in PDF format are also dispatched directly upon email inquiry.",
  },

  // 6. Academic Background at DTU
  {
    id: "academic-background",
    keywords: [
      "dtu",
      "college",
      "university",
      "education",
      "degree",
      "delhi technological university",
      "graduation",
      "student",
      "btech",
      "academics",
    ],
    patterns: [
      /where.*study/i,
      /education/i,
      /dtu/i,
      /university/i,
      /degree/i,
      /when.*graduate/i,
      /college/i,
    ],
    answer:
      "Aryaveer Agarwal is a **final-year undergraduate student at Delhi Technological University (DTU)**, completing his Bachelor of Technology (B.Tech) degree in the **Class of 2026**.\n\n" +
      "His academic concentration covers foundational computer science: Data Structures & Algorithms, Database Management Systems, Operating Systems & Concurrency, Computer Networks, and Machine Learning.\n\n" +
      "Review the full academic background in the [About Section](#about).",
  },

  // 7. Engineering Lab & Simulations
  {
    id: "engineering-lab",
    keywords: [
      "lab",
      "simulation",
      "simulator",
      "rate limiter",
      "cache eviction",
      "lru",
      "lfu",
      "token bucket",
    ],
    patterns: [
      /engineering lab/i,
      /what.*simulat/i,
      /rate limiter.*sim/i,
      /cache.*sim/i,
    ],
    answer:
      "The [Engineering Lab](#lab) features 4 in-browser interactive simulators built to demonstrate backend systems principles:\n\n" +
      "1. **Flash Sale Engine Simulator:** Configurable stock $N$ and requests $R$ demonstrating atomic decrement without overselling.\n" +
      "2. **Interactive Architecture Explorer:** Clickable node and connection topology covering Client, FastAPI, Redis, and PostgreSQL.\n" +
      "3. **Rate Limiter Visualizer:** Token Bucket vs. Sliding Window counter comparison under burst traffic.\n" +
      "4. **Cache Eviction Visualizer:** LRU (Least Recently Used) vs. LFU (Least Frequently Used) hit/miss comparison.\n\n" +
      "Visit the [Engineering Lab](#lab) to run the simulations directly in your browser.",
  },
];

export const FALLBACK_UNKNOWN_RESPONSE =
  "I don't have verified information regarding that specific query. As a portfolio assistant, I only provide factual information about Aryaveer's software engineering background at DTU, his backend and AI projects, technical skills, or how to contact him.\n\n" +
  "You can ask one of the suggested questions below, explore his [Featured Projects](#projects), or get in touch directly via [contact@aryaveer.dev](mailto:contact@aryaveer.dev).";

