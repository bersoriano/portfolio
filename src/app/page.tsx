import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchPortfolio } from "@/sanity/fetchPortfolio";
import { fetchPosts } from "@/sanity/fetchPosts";

export default async function Home() {
  const [portfolio, posts] = await Promise.all([
    fetchPortfolio(),
    fetchPosts(),
  ]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero profile={portfolio.profile} />
        <About about={portfolio.about} />
        <Companies
          companies={portfolio.companies}
          startups={portfolio.startups}
        />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Experience
          experience={portfolio.experience}
          education={portfolio.education}
        />
        <Recommendations recommendations={portfolio.recommendations} />
        <Writing posts={posts} />
        <Contact profile={portfolio.profile} />
      </main>
      <Footer profile={portfolio.profile} />
    </>
  );
}
