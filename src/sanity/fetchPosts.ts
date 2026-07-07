import type { PortableTextBlock } from "@portabletext/react";

import { client } from "./client";
import { hasSanityConfig } from "./env";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "./queries";

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string | null;
  excerpt: string | null;
};

export type Post = PostSummary & {
  body: PortableTextBlock[] | null;
};

export async function fetchPosts(): Promise<PostSummary[]> {
  if (!hasSanityConfig) {
    return [];
  }

  try {
    const posts = await client.fetch<PostSummary[]>(
      postsQuery,
      {},
      { next: { revalidate: 60 } },
    );
    return posts ?? [];
  } catch (error) {
    console.warn("Sanity posts fetch failed.", error);
    return [];
  }
}

export async function fetchPostSlugs(): Promise<string[]> {
  if (!hasSanityConfig) {
    return [];
  }

  try {
    const slugs = await client.fetch<string[]>(postSlugsQuery);
    return slugs ?? [];
  } catch (error) {
    console.warn("Sanity post slugs fetch failed.", error);
    return [];
  }
}

export async function fetchPost(slug: string): Promise<Post | null> {
  if (!hasSanityConfig) {
    return null;
  }

  try {
    return await client.fetch<Post | null>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: 60 } },
    );
  } catch (error) {
    console.warn(`Sanity post fetch failed for "${slug}".`, error);
    return null;
  }
}
