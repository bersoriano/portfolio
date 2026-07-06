import { defineQuery } from "next-sanity";

export const portfolioQuery = defineQuery(`*[_type == "portfolio"][0]{
  profile,
  about,
  skills,
  projects,
  experience,
  companies,
  startups,
  recommendations,
  education
}`);
