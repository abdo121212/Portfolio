import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
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
