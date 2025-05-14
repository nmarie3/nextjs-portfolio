import Image from "next/image";
import Hero from "./modules/Hero";
import NaviMobile from "./modules/NaviMobile";
import Projects from "./modules/Projects";
//import HistoryDesktop from "./modules/HistoryDesktop";
import HistoryMobile from "./modules/HistoryMobile";
import Skills from "./modules/Skills";

export default function Home() {
  return (
    <div className="">
      <NaviMobile/>
        <Hero />
      <HistoryMobile/>
      <Skills/>
      <Projects/>
    </div>
  );
}
