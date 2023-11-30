import React from "react";
import Giga from "../images/giga.jpg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <section
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
      >
        <div className="max-w-screen-lg mx-auto  flex flex-col justify-center  items-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full pt-36  sm:text-center">
            <h1 className="text-4xl  font-bold md:text-7xl text-white ">
              I'm a Full Stack Developer
            </h1>
            <p className="text-gray-500 py-4 max-w-md">
              I'm have one experince building and designing software . Currently
              , I love to work on web appliation using technologies like React ,
              Tailwind , Node Js And GraphQl
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white flex items-center w-1/4 bg-gradient-to-r from-cyan-500 mx-auto  to-blue-500 cursor-pointer rounded-md my-2 px-5 py-3"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdArrowRight size={22} />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={Giga}
              alt="my profile"
              className="rounded-3xl   mx-auto w-3/4 md:w-5/6 "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
