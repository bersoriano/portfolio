import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(`*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`);

export const postSlugsQuery = defineQuery(`*[_type == "post" && defined(slug.current)].slug.current`);

export const postBySlugQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  body
}`);
