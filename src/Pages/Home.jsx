import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Skills from "../Sections/Skills";
import Projects from "../Sections/Projects";
import Illustrations from "../Sections/Illustrations";
import Contact from "../Sections/Contact";

function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Illustrations />
      <Contact />
    </div>
  );
}

export default Home;
