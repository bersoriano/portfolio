import {
  about,
  companies,
  education,
  experience,
  profile,
  projects,
  recommendations,
  skills,
  startups,
  type PortfolioData,
} from "@/data/portfolio";

import { client } from "./client";
import { hasSanityConfig } from "./env";
import { portfolioQuery } from "./queries";

type SanityPortfolioData = {
  [Key in keyof PortfolioData]?: PortfolioData[Key] | null;
};

export const fallbackPortfolio: PortfolioData = {
  profile,
  about,
  skills,
  projects,
  experience,
  companies,
  startups,
  recommendations,
  education,
};

function arrayOrFallback<T>(value: T[] | null | undefined, fallback: T[]) {
  return Array.isArray(value) ? value : fallback;
}

function normalizePortfolio(data: SanityPortfolioData | null): PortfolioData {
  const safeSkills = arrayOrFallback(data?.skills, fallbackPortfolio.skills).map(
    (group) => ({
      ...group,
      items: arrayOrFallback(group.items, []),
    }),
  );

  const safeProjects = arrayOrFallback(
    data?.projects,
    fallbackPortfolio.projects,
  ).map((project) => ({
    ...project,
    tags: arrayOrFallback(project.tags, []),
  }));

  return {
    ...fallbackPortfolio,
    profile: {
      ...fallbackPortfolio.profile,
      ...(data?.profile ?? {}),
      socials: {
        ...fallbackPortfolio.profile.socials,
        ...(data?.profile?.socials ?? {}),
      },
    },
    about: arrayOrFallback(data?.about, fallbackPortfolio.about),
    skills: safeSkills,
    projects: safeProjects,
    experience: arrayOrFallback(data?.experience, fallbackPortfolio.experience),
    companies: arrayOrFallback(data?.companies, fallbackPortfolio.companies),
    startups: arrayOrFallback(data?.startups, fallbackPortfolio.startups),
    recommendations: arrayOrFallback(
      data?.recommendations,
      fallbackPortfolio.recommendations,
    ),
    education: {
      ...fallbackPortfolio.education,
      ...(data?.education ?? {}),
    },
  };
}

export async function fetchPortfolio(): Promise<PortfolioData> {
  if (!hasSanityConfig) {
    return fallbackPortfolio;
  }

  try {
    const data = await client.fetch<SanityPortfolioData | null>(
      portfolioQuery,
      {},
      { next: { revalidate: 60 } },
    );

    return normalizePortfolio(data);
  } catch (error) {
    console.warn("Sanity portfolio fetch failed; using local fallback.", error);
    return fallbackPortfolio;
  }
}
