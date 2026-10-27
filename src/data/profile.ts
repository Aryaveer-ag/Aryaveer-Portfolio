export interface StudioProfile {
  name: string;
  tagline: string;
  headline: string;
  institution: string;
  degree: string;
  graduatingYear: string;
  location: string;
  availability: {
    status: "available" | "busy" | "limited";
    label: string;
    sublabel: string;
  };
  specializations: string[];
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
  tagline: "Software Engineer & Interactive Engineering Studio",
  headline:
    "Final-year B.Tech student at Delhi Technological University specializing in robust backend systems, applied machine learning pipelines, and algorithmic problem-solving.",
  institution: "Delhi Technological University (DTU)",
  degree: "Bachelor of Technology (B.Tech)",
  graduatingYear: "2026",
  location: "Delhi, India",
  availability: {
    status: "available",
    label: "Available for Freelance",
    sublabel: "Open to contract engineering & Upwork projects",
  },
  specializations: [
    "Backend Systems Architecture",
    "RESTful API & Service Design",
    "Machine Learning & Data Pipelines",
    "Data Structures & Algorithm Design",
  ],
  specs: [
    { label: "Institution", value: "Delhi Technological University" },
    { label: "Status", value: "Final-Year B.Tech (Class of 2026)" },
    { label: "Core Stack", value: "TypeScript, Python, Node.js, C++" },
    { label: "Domain Focus", value: "Backend Systems, ML, Algorithmic DSA" },
    { label: "Studio Environment", value: "Linux / Windows, Git, Next.js" },
    { label: "Freelance", value: "Available for Contract & Upwork" },
  ],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    upwork: "https://upwork.com",
    email: "contact@aryaveer.dev",
  },
};

