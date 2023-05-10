import Navigation from "./navigation";
import Hero from "./hero";
import Projects from "./projects";
import About from "./about";

const Main = () => {
  return <main className="main">
    <Navigation />
    <Hero />
    <Projects />
    <About />
  </main>;
}

export default Main;