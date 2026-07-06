// Edit this file to personalize the portfolio. Single source of truth.

// Set to your production domain (no trailing slash). Used for SEO metadata,
// canonical URLs, sitemap, robots, and Open Graph tags.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bernardosoriano.com";

export const profile = {
  name: "Bernardo Soriano",
  role: "Software Architect",
  tagline:
    "13 years architecting web & mobile platforms for investment banking, insurance, fin-tech, healthcare, and e-commerce — leading globally distributed teams from idea to scale.",
  location: "Austin, TX · Remote",
  email: "bsorianodev@gmail.com",
  calendlyUrl: "https://calendly.com/bersoriano",
  socials: {
    github: "https://github.com/bersoriano",
    linkedin: "https://www.linkedin.com/in/bernardosoriano/",
  },
};

export type Profile = typeof profile;

export const about = [
  "I'm a software architect with 13 years building web and mobile platforms across investment banking, insurance, fin-tech, healthcare, and e-commerce. I work hands-on — from system architecture and product direction down to the code — alongside senior leadership and globally distributed teams.",
  "I've led teams and pods at firms like BNY Mellon, Boston Consulting Group, Accenture, and IBM, shipping customer-facing banking flows, trading dashboards, wealth-management tooling, and full-stack cloud platforms. Lately I focus on cloud architecture on AWS and RAG systems built on the OpenAI and Anthropic APIs.",
];

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["Angular", "React", "React Native", "Next.js", "Ionic", "RxJS", "D3.js", "Chart.js", "AG Grid"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Nest.js", "Spring", ".NET Core", "Flask", "GraphQL", "REST APIs", "Better Auth"],
  },
  {
    category: "Cloud, Data & AI",
    items: ["AWS", "Azure", "GCP", "Supabase", "Firebase", "PostgreSQL", "MongoDB", "Oracle SQL", "OpenAI & Anthropic APIs / RAG"],
  },
  {
    category: "Practice & Delivery",
    items: ["Architecture", "Team Leadership", "CI/CD", "OAuth2", "Cypress", "Playwright", "Jasmine / Karma", "Agile / Sprints"],
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
    title: "Wealth Management Data Grid — BNY Mellon",
    description:
      "Led a pod building a dynamic data-grid app letting wealth managers categorize accounts, allocate client assets, and generate financial reports, with Chart.js net-worth and allocation visualizations.",
    tags: ["Angular", "GCP", "MongoDB", "Flask", "GraphQL"],
  },
  {
    title: "Healthcare Transformation — Boston Consulting Group",
    description:
      "Designed the new version of a healthcare provider's digital platform. Built interactive web components alongside experience designers, management consultants, and product managers, delivering web and mobile experiences on a design system that scales across large applications.",
    tags: ["React", "Nest.js", "Styled Components", "AWS"],
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
    company: "Multiple startups",
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

export const companies: string[] = [
  "Boston Consulting Group (BCG)",
  "IBM",
  "Accenture",
  "Bank of New York Mellon (BNY Mellon)",
  "Bank of America",
  "Merrill Lynch",
  "Security Service Federal Credit Union (SSFCU)",
  "Banorte",
];

export const startups: string[] = [
  "Fintaak",
  "Renavest",
  "Flexible Finance",
  "Rhino Automotive Glass",
];

export type Recommendation = {
  name: string;
  title: string;
  relation: string;
  text: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Manu Sasi",
    title: "Senior Engineer / Architect at Bank of America",
    relation: "Managed Bernardo directly",
    text: "Great front end and UI/UX developer.",
  },
  {
    name: "Deepak Palkar",
    title: "Vice President at Bank of America",
    relation: "Worked with Bernardo on the same team",
    text: "Bernardo and I worked together at BoA. He keeps himself up to date with the latest web technologies and is always happy to share his knowledge with team members. He taught me some great CSS tricks. He will be a great asset in any team. I wish him the best.",
  },
  {
    name: "Varsha Devadas",
    title: "Senior AI Solutions Engineer",
    relation: "Worked with Bernardo on the same team",
    text: "Bernardo worked with me at Bank of America. He has excellent CSS skills and a great eye for detail. He is very hard working and has always helped teammates out when they had questions. He is a great UI developer and I recommend him as a talented programmer.",
  },
  {
    name: "Carlos León",
    title: "Product Design Lead",
    relation: "Worked with Bernardo on different teams",
    text: "Bernardo is a great software developer. He shows interest in many different areas and learns really quickly. He takes his job very seriously and produces code that is clear, aesthetic, efficient and secure. He's definitively someone I would go to with hard problems — he'd always give me a new perspective I didn't think of before. He doesn't take shortcuts and would go the harder way if that's what's required to produce a better solution. He's also a funny guy and a great co-worker. A very, very talented person.",
  },
  {
    name: "Fabian Miranda",
    title: "Experience Design Lead",
    relation: "Was senior to Bernardo",
    text: "Bernardo is without doubt a leader and self-driven professional who works very effectively and with great results. His technical skills and understanding of business needs are reflected in every product he delivers. He clearly understands when he needs to be a leader and when he needs to be a follower — always with a great attitude.",
  },
  {
    name: "Alejandro Mercado",
    title: "DevOps Lead · AWS Community Builder",
    relation: "Was Bernardo's client",
    text: "Bernardo is an enthusiastic developer and trainer. He is always curious about learning new technologies and he knows how to work in teams in order to deliver astonishing results.",
  },
  {
    name: "Jonathan Salvador Chávez",
    title: "QA Automation Engineer",
    relation: "Reported to Bernardo directly",
    text: "One of the things I admire most is that he is always disposed to share his knowledge with the team. Bernardo is very enthusiastic and a great coworker.",
  },
  {
    name: "Alejandro Gutiérrez",
    title: "Senior UX Consultant, Information Architect",
    relation: "Worked with Bernardo on different teams",
    text: "Extensamente recomiendo la calidad y cualidad en el trabajo de Bernardo Soriano. Durante el tiempo que participé en varios proyectos con él y su equipo, demostró su compromiso y confiabilidad, además de estar preparado para los retos que se le presentaron. Siendo, por sobre todo, una excelente persona.",
  },
];

export const education = {
  degree: "B.S. Electronics, Telecommunications & Computer Science",
  school: "Instituto Politécnico Nacional (IPN)",
};

export type Education = typeof education;

export type PortfolioData = {
  profile: Profile;
  about: string[];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  companies: string[];
  startups: string[];
  recommendations: Recommendation[];
  education: Education;
};
