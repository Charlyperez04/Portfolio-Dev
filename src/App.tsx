import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <main className="bg-darkLight relative">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}

export default App;
