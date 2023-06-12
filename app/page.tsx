import { Metadata } from "next";
import About from "./components/MainComponents/About";
import Hero from "./components/MainComponents/Hero";
import Projects from "./components/MainComponents/Projects";
import Github from "./components/MainComponents/Github";

export const metadata: Metadata = {
  description: "Jason Vallery's Portfolio",
  title: "Jason Vallery's Portfolio",
};

export const dynamic = "force-dynamic"

export default async function Home() {

  const startDate = new Date("03/01/2023").getTime();
  let currentDate = Date.now();
  const millisecondsBetween = startDate - currentDate;

  const numberOfDaysSince = millisecondsBetween / (1000 * 3600 * 24);

  const response = await fetch(
    "https://api.github.com/repos/Vets-Who-Code/js-web-path-JVSONV/commits",
    {
      method: "GET",
      headers: {
        auth: `${process.env.GitHub_Token}`,
        "Content-type": "application/json",
        since: `${startDate}`,
        owner: "Vets-Who-Code",
        repo: "js-web-path-JVSONV",
      },
    }
  );

    const data = await response.json()

  return (
    <main className="main">
      <Hero />
      <About />
      <Github commits={data} />
      <Projects />
    </main>
  );
}
