import Image from "next/image";
import Hero from "./modules/Hero";
import Projects from "./modules/Projects";
import History from "./modules/History";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";
import Navbar from "./modules/Navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <History/>
        <Skills/>
        <Projects/>
        <Footer />
    </>
  );
}
