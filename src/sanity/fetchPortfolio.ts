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

export async function fetchPortfolio(): Promise<PortfolioData> {
  if (!hasSanityConfig) {
    return fallbackPortfolio;
  }

  try {
    const data = await client.fetch<Partial<PortfolioData> | null>(
      portfolioQuery,
      {},
      { next: { revalidate: 60 } },
    );

    return {
      ...fallbackPortfolio,
      ...data,
      profile: {
        ...fallbackPortfolio.profile,
        ...data?.profile,
        socials: {
          ...fallbackPortfolio.profile.socials,
          ...data?.profile?.socials,
        },
      },
      education: {
        ...fallbackPortfolio.education,
        ...data?.education,
      },
    };
  } catch (error) {
    console.warn("Sanity portfolio fetch failed; using local fallback.", error);
    return fallbackPortfolio;
  }
}
