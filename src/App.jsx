import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "../../../../Front End/portfolio/portfolio/src/components/About";
import Experience from "../../../../Front End/portfolio/portfolio/src/components/Experience";
import Portfolio from "../../../../Front End/portfolio/portfolio/src/components/Portfolio";
import Contact from "../../../../Front End/portfolio/portfolio/src/components/Contact";
import SocialLinks from "../../../../Front End/portfolio/portfolio/src/components/SocialLinks";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 300,
    });
    AOS.refresh();
  }, []);

  AOS;
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
