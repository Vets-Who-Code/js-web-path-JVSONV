import { Metadata } from "next";
import About from "./components/MainComponents/About";
import Hero from "./components/MainComponents/Hero";
import Projects from "./components/MainComponents/Projects";


export const metadata: Metadata = {
  description: "Jason Vallery's Portfolio",
  title: "Jason Vallery's Portfolio",
};

export const dynamic = "force-dynamic"

export default async function Home() {

  
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
