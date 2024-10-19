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
        className="bg-gradient-to-b from-black to-gray-800 w-full  text-white py-20 px-32"
      >
        <div className="text-center">
          <p
            data-aos="fade-left"
            className="text-3xl font-bold border-b-4 inline "
          >
            Portfolio
          </p>
          <p data-aos="flip-left" className="py-3">
            Check out some of my work right here{" "}
          </p>
        </div>

        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-3 px-10 ">
          {protfolios.map(({ id, src }) => (
            <div
              data-aos="zoom-in-left"
              className="flex justify-center items-center"
            >
              <div className=" shadow-md shadow-gray-100 rounded-md duration-300 hover:scale-105">
                <img src={src} className="w-[350px] rounded-md  " alt="Giga" />
                <div className="flex justify-between items-center  cursor-pointer">
                  <button className="p-4 font-bold ">Demo</button>
                  <button className="p-4 font-bold ">Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
