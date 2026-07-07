import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchPosts } from "@/sanity/fetchPosts";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes and articles on software architecture and engineering leadership.",
  keywords: [
    "Software Architecture",
    "Engineering Leadership",
    "Software Engineering",
    "Architecture",
    "Engineering",
    "Software",
  ],
  alternates: { canonical: "/posts" },
};

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="scroll-mt-20 border-t border-[var(--hairline)]">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <div className="mb-12 flex items-baseline justify-between gap-6">
              <h1 className="eyebrow">Writing</h1>
              <span className="tnum font-mono text-xs text-slate-dim">
                {String(posts.length).padStart(2, "0")}
              </span>
            </div>

            {posts.length === 0 ? (
              <p className="leading-7 text-slate">No posts yet.</p>
            ) : (
              <div className="border-t border-[var(--hairline)]">
                {posts.map((p, i) => (
                  <article
                    key={p._id}
                    className="group grid gap-4 border-b border-[var(--hairline)] py-8 md:grid-cols-[3rem_1fr_auto] md:gap-8"
                  >
                    <span className="tnum font-mono text-sm text-slate-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="max-w-2xl">
                      <h2 className="font-display text-xl font-light text-paper transition-colors group-hover:text-brass sm:text-2xl">
                        <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                      </h2>
                      {p.excerpt && (
                        <p className="mt-3 leading-7 text-slate">{p.excerpt}</p>
                      )}
                    </div>
                    <time
                      dateTime={p.publishedAt ?? undefined}
                      className="h-fit font-mono text-xs uppercase tracking-[0.1em] text-slate-dim md:text-right"
                    >
                      {formatDate(p.publishedAt)}
                    </time>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer profile={profile} />
    </>
  );
}
