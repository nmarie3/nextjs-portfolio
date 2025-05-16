import Image from "next/image";
import Hero from "./modules/Hero";
import NaviMobile from "./modules/NaviMobile";
import Projects from "./modules/Projects";
//import HistoryDesktop from "./modules/HistoryDesktop";
import HistoryMobile from "./modules/HistoryMobile";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";

export default function Home() {
  return (
    <>
      <NaviMobile/>
        <Hero/>
      <HistoryMobile/>
      <Skills/>
        <Projects/>
        <Footer />
    </>
  );
}
