import Image from "next/image";
import Hero from "./modules/Hero";
import NaviMobile from "./modules/NaviMobile";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import HistoryDesktop from "./modules/HistoryDesktop";
import HistoryMobile from "./modules/HistoryMobile";

export default function Home() {
  return (
    <div className="m-5">
    <NaviMobile/>
    <Hero/>
    <Skills/>
    <HistoryMobile/>
    {/*<HistoryDesktop/>*/}
    <Projects/>
    </div>
  );
}
