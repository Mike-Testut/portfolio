
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <FeaturedProject/>

      <Skills />
      <About />
      <Contact />
    </div>
  );
}
