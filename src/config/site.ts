export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: {
    name: string;
    institution: string;
    status: string;
    domains: readonly string[];
  };
  links: {
    github: string;
    linkedin: string;
    upwork: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Aryaveer.dev",
  title: "Aryaveer.dev — Interactive Engineering Studio",
  description:
    "Engineering portfolio and interactive studio of Aryaveer Agarwal — Software engineering, backend systems, machine learning, and DSA.",
  author: {
    name: "Aryaveer Agarwal",
    institution: "Delhi Technological University",
    status: "Final-year B.Tech Student",
    domains: ["Software Development", "Backend Systems", "Machine Learning", "DSA"],
  },
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    upwork: "https://upwork.com",
  },
};

