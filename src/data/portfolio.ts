// Edit this file to personalize the portfolio. Single source of truth.

export const profile = {
  name: "Bernardo Soriano",
  role: "Software Architect",
  tagline:
    "13 years architecting web & mobile platforms for investment banking, insurance, fin-tech, healthcare, and e-commerce — leading globally distributed teams from idea to scale.",
  location: "Austin, TX · Remote",
  email: "bsorianodev@gmail.com",
  calendlyUrl: "https://calendly.com/bersoriano",
  socials: {
    github: "https://github.com/bsorianodev",
    linkedin: "https://www.linkedin.com/in/bernardosoriano/",
  },
};

export const about = [
  "I'm a software architect with 13 years building web and mobile platforms across investment banking, insurance, fin-tech, healthcare, and e-commerce. I work hands-on — from system architecture and product direction down to the code — alongside senior leadership and globally distributed teams.",
  "I've led teams and pods at firms like BNY Mellon, Boston Consulting Group, Accenture, and IBM, shipping customer-facing banking flows, trading dashboards, wealth-management tooling, and full-stack cloud platforms. Lately I focus on cloud architecture on AWS and RAG systems built on the OpenAI and Anthropic APIs.",
];

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "C#", "SQL"],
  },
  {
    category: "Frontend",
    items: ["Angular", "React", "React Native", "Next.js", "Ionic", "RxJS", "D3.js", "Chart.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Nest.js", "Spring", ".NET Core", "Flask", "GraphQL", "REST APIs"],
  },
  {
    category: "Cloud, Data & AI",
    items: ["AWS", "Azure", "GCP", "Firebase", "PostgreSQL", "MongoDB", "Oracle SQL", "OpenAI & Anthropic APIs / RAG"],
  },
  {
    category: "Practice & Delivery",
    items: ["Architecture", "Team Leadership", "CI/CD", "OAuth2 / BetterAuth", "Cypress", "Jasmine / Karma", "Agile / Sprints"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Full-Stack Cloud Platforms — Renavest",
    description:
      "Architected and built fin-tech cloud platforms from scratch, used by thousands. Backend APIs on AWS, secure auth with BetterAuth, and RAG features powered by the OpenAI and Anthropic APIs.",
    tags: ["TypeScript", "Node.js", "Next.js", "AWS", "RAG"],
  },
  {
    title: "Wealth Management Data Grid — BNY Mellon",
    description:
      "Led a pod building a dynamic data-grid app letting wealth managers categorize accounts, allocate client assets, and generate financial reports, with Chart.js net-worth and allocation visualizations.",
    tags: ["Angular", "GCP", "MongoDB", "Flask", "GraphQL"],
  },
  {
    title: "Trading & Capital Markets Dashboards — Accenture (BoA / Merrill Lynch)",
    description:
      "Built real-time trading-floor dashboards and pre/during/post-trade workflows, plus reusable web components shared across investment apps and offshore teams.",
    tags: ["Angular", "RxJS", "D3.js", "RESTful WS"],
  },
  {
    title: "Omni-channel Banking Transformation — IBM iX",
    description:
      "Hired and led a team of 7 to deliver ~50 banking flows for transfers and account statements. Became a public IBM case study.",
    tags: ["HTML5", "JavaScript", "Dojo", "WebSphere Portal"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    company: "Renavest & other startups",
    role: "Tech Advisor & Consultant",
    period: "2023 — Now",
    summary:
      "Lead architecture and product for full-stack cloud platforms from scratch, used by thousands. Build AWS backend APIs in TypeScript/Node/Express/PostgreSQL, integrate BetterAuth, and implement RAG with the OpenAI and Anthropic APIs. Run sprints, mentor devs, and own delivery pipelines with product and leadership.",
  },
  {
    company: "SSFCU — Mobile Banking",
    role: "Hybrid Mobile Developer",
    period: "2021 — 2023",
    summary:
      "Built interactive mobile banking apps with Angular, Ionic, TypeScript, RxJS, C# and .NET Core REST services on Azure. Unit tested with Jasmine/Karma, end-to-end with Cypress, automated iOS CI/CD on Azure DevOps, and resolved production issues like double payments in real time.",
  },
  {
    company: "Bank of New York Mellon — Wealth Mgmt",
    role: "Principal Developer (VP)",
    period: "2019 — 2020",
    summary:
      "Led a pod building a dynamic data-grid app for wealth managers to allocate client assets and generate reports. Built OAuth-secured Flask & GraphQL APIs behind an API gateway, state-management algorithms, and Chart.js visualizations. Reported to Tech/Product Directors and managed an offshore team.",
  },
  {
    company: "Boston Consulting Group — Healthcare & E-commerce",
    role: "Senior Engineer",
    period: "2018 — 2019",
    summary:
      "Designed and built digital web and mobile platforms for BCG clients in healthcare and telecom using Angular, React, React Native, Nest.js, Java/Spring, AWS and Firebase. Developed design systems supporting large applications and an interactive healthcare platform.",
  },
  {
    company: "Accenture — BoA & Merrill Lynch",
    role: "Software Engineer Team Lead",
    period: "2015 — 2018",
    summary:
      "Built customer-facing and internal banking apps: new ATM customer journeys, real-time capital-markets dashboards, CRM platforms for risk and compliance, and end-to-end trading workflows. Led initiatives for reusable web components across investment apps and offshore teams.",
  },
  {
    company: "IBM Interactive Experience — Web Banking",
    role: "Lead Front-end Developer",
    period: "2014 — 2015",
    summary:
      "Implemented an omni-channel transformation for customer-facing banking with IBM Interactive Studio — a public case study. Hired and led a team of 7 to deliver ~50 banking flows, collaborating with an offshore team in Spain.",
  },
  {
    company: "KTC Digital Agency — Mobile Insurance",
    role: "Web & Mobile Developer",
    period: "2013",
    summary:
      "Delivered iPad and Android tablet apps letting insurance agents sell products and manage customer information, with custom geolocation and network device plugins using Sencha Touch and Apache Cordova.",
  },
];

export const education = {
  degree: "B.S. Electronics, Telecommunications & Computer Science",
  school: "Instituto Politécnico Nacional (IPN)",
};
