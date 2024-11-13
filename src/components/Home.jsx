import React from "react";
import Giga from "../images/giga.jpg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-black h-screen to-gray-800 py-20 "
      name="home"
    >
      <div className=" w-full h-full  container mx-auto px-10 text-white pt-20 max-md:pt-28 ">
        <div className="flex justify-center items-center h-full max-md:flex-col-reverse max-md:gap-6 ">
          <div className="flex flex-col justify-center items-center space-y-6 w-1/2">
            <h1
              className="font-bold  sm:text-3xl  md:text-5xl lg:text-7xl animate-bounce "
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
              src={Giga}
              className="object-contain rounded-3xl   max-sm:w-[200px] max-md:w-[250px] max-w-[380px]  duration-300"
              alt="myphoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
