import { Metadata } from "next";
import Main from "./components/MainComponents/main";

export const metadata: Metadata = {
  description: "Jason Vallery's Portfolio",
  title: "Jason Vallery's Portfolio",
};

export default function Home() {
  return <Main />;
}
