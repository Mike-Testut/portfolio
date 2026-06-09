
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/data/projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <>
          <Navbar />
          <main className="min-h-screen w-full font-sans text-charcoal">
              <Hero/>
              <FeaturedProject/>
                <section className="mx-auto max-w-6xl px-6 py-20">
                    <h2 className="text-3xl font-bold">Other Projects</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </section>
              <Skills />
              <About />
              <Contact />
            </main>
      </>
  );
}
