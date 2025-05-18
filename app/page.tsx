import Image from "next/image";
import Hero from "./modules/Hero";
import NaviMobile from "./modules/NaviMobile";
import Projects from "./modules/Projects";
import History from "./modules/History";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";

export default function Home() {
  return (
    <>
      <NaviMobile/>
        <Hero/>
      <History/>
      <Skills/>
        <Projects/>
        <Footer />
    </>
  );
}
