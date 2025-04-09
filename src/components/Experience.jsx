import React from "react";
import html from "../images/html.png";
import js from "../images/javascript.png";
import github from "../images/github.png";
import graphql from "../images/graphql.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import css from "../images/unnamed.webp";
import bootstrap from "../images/Bootstrap_logo.svg.png";
import figma from "../images/images.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 5, src: graphql, title: "GraphQl", style: "shadow-pink-500" },
    { id: 6, src: mongo, title: "Mongo", style: "shadow-green-500" },
    { id: 7, src: node, title: "Node JS", style: "shadow-green-700" },
    { id: 8, src: react, title: "React", style: "shadow-blue-900" },
    { id: 9, src: tailwind, title: "Tailwind", style: "shadow-blue-300" },
    { id: 10, src: css, title: "Css", style: "shadow-[#fb9e00]" },
    { id: 11, src: bootstrap, title: "Bootstrap", style: "shadow-[#810af9]" },
    { id: 12, src: figma, title: "figma", style: "shadow-[#ffffff]" },
  ];
  return (
    <section
      className="bg-gradient-to-b from-black to-gray-800 w-full  py-20"
      name="experience"
    >
      <div
        data-aos="fade-up"
        className="mx-auto p-4 flex flex-col justify-center w-full h-full text-white  container px-10 "
      >
        <div className=" sm:text-center">
          <p className="text-4xl font-bold border-b-4 border-cyan-400 rounded-2xl px-4 p-2 inline  max-md:text-xl">
            Experience
          </p>
          <p className="py-6"> These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid max-lg:grid-cols-2  max-sm:grid-cols-1  lg:grid-cols-3  gap-8 text-center py-8 px-12 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-md ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
