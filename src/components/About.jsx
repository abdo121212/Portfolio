import { DiResponsive } from "react-icons/di";
import { GiSpearHook } from "react-icons/gi";
import { SiFarfetch } from "react-icons/si";
import { CiRoute } from "react-icons/ci";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbJson } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import React, { useState } from "react";
import { FaBootstrap, FaHtml5 } from "react-icons/fa";

const About = () => {
  const [currentActive, setCurrentActive] = useState("about");

  const education = [
    {
      id: 1,
      duration: `Sept.2020 – May.2024`,
      text: "B.A., Faculty of Engineering computer engineering department, HTI university",
    },
    {
      id: 2,
      duration: `Jul. 2023- Sep. 2023`,
      text: "Route Academy Internship Back-end (Node js)",
    },
    {
      id: 3,
      duration: `Jun.2022 – Oct. 2022`,
      text: "Route Academy Internship Front-end (React js)",
    },
    {
      id: 4,
      duration: `Jun.2024 – Oct. 2024`,
      text: "Mega-Soft Academy Internship Full-Stack",
    },
  ];

  const experience = [
    {
      id: 1,
      duration: `Oct.2023 – Jun 2024`,
      text: "Graduation Project Sponsorship",
    },
    {
      id: 2,
      duration: `Mar. 2023`,
      text: "Frontend developer React.js Freelance with MPS team.",
    },
    {
      id: 3,
      duration: `Jul ,2024`,
      text: "React.js developer internship at USAM.",
    },
  ];

  const about = [
    {
      id: 1,
      key: `Name`,
      value: "Abdallah Atef Ahmed",
    },
    {
      id: 2,
      key: `phone`,
      value: "+201 067 580 075",
    },
    {
      id: 3,
      key: `experience`,
      value: "2+ Years.",
    },

    {
      id: 4,
      key: `nationality`,
      value: "Egyption",
    },

    {
      id: 5,
      key: `freeLancer`,
      value: "Available",
    },

    {
      id: 6,
      key: `language`,
      value: "English , Arabic",
    },
  ];

  const skills = [
    {
      id: 1,
      name: (
        <FaHtml5
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 2,
      name: (
        <DiCss3
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 3,
      name: (
        <FaBootstrap
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 4,
      name: (
        <SiTailwindcss
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 5,
      name: (
        <SiTypescript
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 6,
      name: (
        <IoLogoJavascript
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 7,
      name: (
        <SiJquery
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 8,
      name: (
        <FaReact
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 9,
      name: (
        <TbJson
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 10,
      name: (
        <CiRoute
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 11,
      name: (
        <SiFarfetch
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 12,
      name: (
        <TbSql
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 13,
      name: (
        <FaNodeJs
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900"
        />
      ),
    },
    {
      id: 14,
      name: (
        <SiExpress
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900 "
        />
      ),
    },

    {
      id: 15,
      name: (
        <GiSpearHook
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900 "
        />
      ),
    },

    {
      id: 16,
      name: (
        <DiResponsive
          size={50}
          className="hover:scale-110 duration-500 hover:text-gray-900 "
        />
      ),
    },
  ];

  return (
    <>
      <section
        name="about"
        className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
      >
        <div className="max-w-screen-lg  flex flex-col container px-10 mx-auto">
          <div className=" sm:text-center py-5">
            <p className="text-4xl font-bold border-b-4 border-cyan-400 rounded-2xl px-4 p-2 inline  max-md:text-xl">
              About
            </p>
          </div>

          <div className="flex justify-center  gap-5 max-md:space-y-5  max-md:flex-col">
            <div className="w-[40%] max-md:w-full flex justify-start   flex-col">
              <h4 className="text-3xl font-medium py-4 w-full text-center">
                Why hire me ?{" "}
              </h4>

              <div className="flex justify-center items-start space-y-6 flex-col w-full ">
                <div
                  onClick={() => {
                    setCurrentActive("about");
                  }}
                  className={`capitalize text-lg py-2 w-full opacity-50   cursor-pointer font-bold hover:scale-110 duration-700 px-5 text-center bg-cyan-700 rounded-xl 
                   ${currentActive === "about" ? "active" : ""}`}
                >
                  About Me
                </div>

                <div
                  onClick={() => {
                    setCurrentActive("experience");
                  }}
                  className={`capitalize text-lg py-2 w-full opacity-50 cursor-pointer font-bold hover:scale-110 duration-700 px-5 text-center bg-cyan-700 rounded-xl 
                   ${currentActive === "experience" ? "active" : ""} `}
                >
                  Experience
                </div>

                <div
                  onClick={() => {
                    setCurrentActive("education");
                  }}
                  className={`capitalize text-lg py-2 w-full opacity-50 cursor-pointer font-bold hover:scale-110 duration-700 px-5 text-center bg-cyan-700 rounded-xl 
                   ${currentActive === "education" ? "active" : ""}`}
                >
                  Education
                </div>

                <div
                  onClick={() => {
                    setCurrentActive("skills");
                  }}
                  className={`capitalize text-lg py-2 w-full opacity-50 cursor-pointer font-bold hover:scale-110 duration-700 px-5 text-center bg-cyan-700 rounded-xl 
                  ${currentActive === "skills" ? "active" : ""} `}
                >
                  Skills
                </div>
              </div>
            </div>

            <div className="w-[60%] max-md:w-full">
              <div className={`${currentActive === "about" ? "" : "hidden"}  `}>
                <div className="space-y-5">
                  <h3 className="text-center font-bold  text-3xl py-[15px]">
                    About me
                  </h3>
                  <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 ">
                    {about.map((ele) => (
                      <div
                        key={ele.id}
                        className="text-center space-y-4 hover:border-2 border-teal-100 bg-gray-700 py-2 px-2 rounded-lg  hover:scale-110 duration-700"
                      >
                        <p className="text-cyan-500 text-[16px] font-bold ">
                          {ele.key}
                        </p>
                        <h4 className=" font-medium text-[15px]">
                          {ele.value}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  currentActive === "skills" ? "" : "hidden"
                } w-full`}
              >
                <div className="space-y-5">
                  <h3 className="text-center font-bold  text-3xl py-[15px]">
                    My Skills
                  </h3>
                  <div className="grid grid-cols-4 w-full gap-5 max-md:grid-cols-2  py-5 px-11">
                    {skills.map((ele) => (
                      <div key={ele.id}>
                        <div
                          data-aos="fade-up"
                          className="bg-gray-800 hover:bg-[#1c3852]  hover:scale-105 duration-700 h-[100px]   border-none space-y-3 rounded-xl flex justify-center items-center flex-col"
                        >
                          {ele.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  currentActive === "experience" ? "" : "hidden"
                } flex justify-center items-center`}
              >
                <div className="space-y-5">
                  <h3 className="text-center font-bold  text-3xl py-[15px]">
                    My Experience
                  </h3>
                  <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 ">
                    {experience.map((ele) => (
                      <div
                        key={ele.id}
                        className="text-center space-y-4 hover:border-2 border-teal-100 bg-gray-700 py-2 px-2 rounded-lg  hover:scale-110 duration-700"
                      >
                        <p className="text-cyan-500 font-medium text-xs">
                          {ele.duration}
                        </p>
                        <h4 className=" text-sm ">{ele.text}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${currentActive === "education" ? "" : "hidden"} `}
              >
                <div className="space-y-5">
                  <h3 className="text-center font-bold  text-3xl py-[15px]">
                    My Edcuation
                  </h3>
                  <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 ">
                    {education.map((ele) => (
                      <div
                        key={ele.id}
                        className="  text-center space-y-4 hover:border-2 border-teal-100 bg-gray-700 py-2 px-2 rounded-lg  hover:scale-110 duration-700"
                      >
                        <p className="text-cyan-500 font-medium text-xs">
                          {ele.duration}
                        </p>
                        <h4 className=" text-sm ">{ele.text}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
