import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortableBody from "@/components/PortableBody";
import { fetchPost, fetchPostSlugs } from "@/sanity/fetchPosts";
import { fetchPortfolio } from "@/sanity/fetchPortfolio";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await fetchPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt ?? undefined,
      publishedTime: post.publishedAt ?? undefined,
    },
  };
}

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [post, portfolio] = await Promise.all([
    fetchPost(slug),
    fetchPortfolio(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="scroll-mt-20 border-t border-[var(--hairline)]">
          <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
            <Link
              href="/posts"
              className="font-mono text-xs uppercase tracking-[0.14em] text-slate transition-colors hover:text-brass"
            >
              ← Writing
            </Link>

            <header className="mt-8 border-b border-[var(--hairline)] pb-8">
              <time
                dateTime={post.publishedAt ?? undefined}
                className="font-mono text-xs uppercase tracking-[0.14em] text-slate-dim"
              >
                {formatDate(post.publishedAt)}
              </time>
              <h1 className="mt-4 font-display text-3xl font-light text-paper sm:text-4xl">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-4 text-lg leading-8 text-slate">
                  {post.excerpt}
                </p>
              )}
            </header>

            {post.body && post.body.length > 0 && (
              <div className="mt-4">
                <PortableBody value={post.body} />
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer profile={portfolio.profile} />
    </>
  );
}
