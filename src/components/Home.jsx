import React from "react";
import Giga from "../images/giga.jpg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <section
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="  max-w-screen-lg mx-auto  flex flex-col justify-center  items-center h-full px-4 md:flex-row ">
          <div className=" flex-col justify-center items-center h-full hidden lg:flex ">
            <h1
              data-aos="fade-up"
              className="text-4xl  font-bold md:text-7xl text-white py-10"
            >
              I'm a Front-End Developer
            </h1>
            <div data-aos="fade-left">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group ml-4 text-white flex items-center w-10/12 bg-gradient-to-r from-cyan-500 mx-auto  to-blue-500 cursor-pointer rounded-md my-2 px-6 py-3 "
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdArrowRight size={22} />
                </span>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <img
              src={Giga}
              alt="my profile"
              className="rounded-3xl max-sm:p-10 max-lg:w-[500px] max-sm:rounded-[50px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
