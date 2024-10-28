import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <section
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white py-20 "
      >
        <div className="max-w-screen-lg  flex flex-col container px-10 mx-auto ">
          <div className="py-5 text-center">
            <p
              data-aos="fade-up"
              className=" font-bold border-b-4 inline  border-gray-500 sm:text-2xl lg:text-5xl  "
            >
              About
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p
              data-aos="fade-up"
              className="text-sm text-center max-lg:text-lg"
            >
              I'm have two years experince building and designing software .
              Currently , I love to work on web appliation using technologies
              like React , Tailwind ,Bootstrap
            </p>

            <p data-aos="fade-up" className="text-sm lg:text-lg">
              Bachelor's degree in Computer Engineering
            </p>

            <p data-aos="fade-up" className="text-sm lg:text-lg">
              I trained at Route Academy
            </p>

            <p data-aos="fade-up" className="text-sm lg:text-lg text-center">
              Years of learning and working in full-stack development, I've
              developed extensive knowledge in - Front-end development: ReactJS
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center justify-center space-x-9 py-10 ">
            <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2  gap-5  ">
              <div
                data-aos="fade-up"
                className="bg-gray-800 hover:bg-[#1c3852] hover:border duration-500 w-[300px] hover:scale-110 h-[200px] border-none space-y-3 rounded-xl flex justify-center items-center flex-col"
              >
                <FaAward size={30} className="text-white justify-center " />
                <h4 className="font-bold text-xl">Experience</h4>
                <h6>Junior</h6>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-800 hover:bg-[#1c3852] hover:border duration-500 w-[300px] hover:scale-110 h-[200px] border-none space-y-3 rounded-xl flex justify-center items-center flex-col"
              >
                <FiUsers size={30} className="text-white justify-center " />
                <h4 className="font-bold text-xl">Clients</h4>
                <div className="flex justify-center items-center ">
                  <h6 className="text-2xl">6</h6>
                  <span className=" text-2xl">+</span>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gray-800 hover:bg-[#1c3852] hover:border duration-500 w-[300px] hover:scale-110 h-[200px] border-none space-y-3 rounded-xl flex justify-center items-center flex-col"
              >
                <AiFillProject
                  size={30}
                  className="text-white justify-center "
                />
                <h4 className="font-bold text-xl">Projects</h4>
                <div className="flex justify-center items-center ">
                  <h6 className="text-2xl">20</h6>
                  <span className=" text-2xl">+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link to="contact" smooth  className="text-white flex items-center  bg-gradient-to-r max-md:justify-center max-md:w-[120px] from-cyan-500 mx-auto   to-blue-500 cursor-pointer rounded-md my-2 px-6 py-3">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
