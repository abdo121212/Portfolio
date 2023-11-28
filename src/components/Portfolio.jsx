import React from "react";
import node from "../images/installNode.jpg";
import weather from "../images/reactWeather.jpg";
import navbar from "../images/navbar.jpg";
import reactParallax from "../images/reactParallax.jpg";
import reactSmooth from "../images/reactSmooth.jpg";
import usestate from "../images/usestate.jpg";
const Portfolio = () => {
  const protfolios = [
    { id: 1, src: weather },
    { id: 2, src: reactSmooth },
    { id: 3, src: usestate },
    { id: 4, src: navbar },
    { id: 5, src: node },
    { id: 6, src: reactParallax },
  ];
  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  h-full">
          <div className="pb-8 sm:text-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
          <div
            
            className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px12 sm:p-20 "
          >

{protfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg  duration-300 hover:scale-105">
              <img src={src} className="rounded-md" alt="mypicture" />
              <div className="flex justify-center items-center ">
                <button className="w-1/2 px-6 py-3 m-4 ">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 ">
                  Code
                </button>
              </div>
            </div>
          ))}

          </div>

         
        </div>
      </div>
    </>
  );
};

export default Portfolio;
