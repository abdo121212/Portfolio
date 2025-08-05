import { useEffect, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ScrollUp from "./ScrollUp";
import myImage from "../assets/WhatsApp_Image_2024-07-14_at_20.00.12_5f274665_50-min.jpg";
const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full bg-gradient-to-b from-black h-screen to-gray-800 py-20 relative z-40"
      name="home"
    >
      <div className=" h-full  container mx-auto px-10 text-white pt-20 max-md:pt-28 ">
        <div className="flex justify-center items-center h-full max-md:flex-col-reverse max-md:gap-6 ">
          <div className="flex flex-col justify-center items-center space-y-6 w-1/2">
            <h1
              className="font-bold text-2xl md:text-3xl lg:text-4xl  animate-bounce  max-md:text-center"
              data-aos="fade-up"
            >
              I'm a Front-End Developer
            </h1>
            <Link
              data-aos="fade-down"
              to="portfolio"
              smooth
              duration={500}
              className="group  text-white flex items-center font-bold   bg-gradient-to-r max-md:justify-center max-md:w-[120px] from-cyan-500 mx-auto   to-blue-500 cursor-pointer rounded-md my-2 px-6 py-3 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={25} />
              </span>
            </Link>
          </div>

          <div>
            <img
              data-aos="flip-down"
              src={myImage}
              width={400}
              height={500}
              fetchPriority="high"
              className="object-contain rounded-3xl w-[300px] lg:w-[350px] xl:w-[400px] "
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* scroll up  */}
      <ScrollUp showButton={showButton} scrollToTop={scrollToTop} />

      <div className="absolute top-0 left-0 blur-3xl animated-wrapper w-[300px] h-[300px] bg-gradient-to-r from-[#444444] to-gray-200 z-[-1] rounded-full"></div>
    </section>
  );
};

export default Home;
