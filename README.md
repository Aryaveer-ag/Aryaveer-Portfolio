# Aryaveer.dev — Interactive Engineering Studio

A high-performance personal engineering studio and portfolio website for **Aryaveer Agarwal**, final-year B.Tech student at Delhi Technological University (DTU), specializing in software development, backend systems, machine learning, and algorithm design.

## Core Pillars

1. **Engineering-First Case Studies**: Architectural walkthroughs, trade-off analysis, and verified system benchmarks.
2. **Interactive Engineering Lab**: In-browser algorithmic and distributed systems simulations (e.g. rate-limiting algorithms, cache eviction).
3. **Local AI Portfolio Assistant**: Deterministic, zero-cost, grounded retrieval assistant answering visitor queries without external API dependencies.
4. **Freelance Client Inquiries**: Structured workflow for freelance engineering contracts and Upwork inquiries.

---

## Architecture & Directory Structure

```
src/
├── app/                  # Next.js App Router (Layouts, routes, global styles)
│   ├── globals.css       # Tailwind CSS configuration and dark theme tokens
│   ├── layout.tsx        # Base root layout and SEO metadata
│   └── page.tsx          # Studio homepage (Server Component)
├── components/           # Reusable UI primitives
│   └── common/           # Shared cross-module UI components
├── config/               # Centralized configuration and site metadata
│   └── site.ts           # Author details, links, and studio parameters
├── modules/              # Domain-driven feature modules
│   ├── assistant/        # Local AI assistant logic and UI
│   ├── contact/          # Freelance inquiry and contract flows
│   ├── lab/              # In-browser technical simulations
│   └── projects/         # Engineering project case studies
└── types/                # Domain-wide TypeScript type definitions
    └── index.ts          # Project, service, and simulation interfaces
```

---

## Getting Started

### Prerequisites

- Node.js `20.x` or higher (tested with `v24.12.0`)
- npm `10.x` or higher (tested with `11.6.2`)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Checking & Linting

Run TypeScript verification and ESLint:

```bash
# Linting
npm run lint

# TypeScript check
npx tsc --noEmit
```

### Production Build

Create an optimized production build:

```bash
npm run build
npm run start
```

---

## Security & Environment

- Environment files (`.env`, `.env.local`, `.env.*`) and private keys are strictly excluded from source control via `.gitignore`.
- Initial development requires zero API keys or external paid subscriptions.

---

## License

Private repository &copy; Aryaveer Agarwal. All rights reserved.
