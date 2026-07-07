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
import { fetchPosts } from "@/sanity/fetchPosts";
import {
  profile,
  about,
  skills,
  projects,
  experience,
  companies,
  startups,
  recommendations,
  education,
} from "@/data/portfolio";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero profile={profile} />
        <About about={about} />
        <Companies companies={companies} startups={startups} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} education={education} />
        <Recommendations recommendations={recommendations} />
        <Writing posts={posts} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
