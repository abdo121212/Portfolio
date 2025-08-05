import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 4, link: "experience" },
    { id: 3, link: "portfolio" },
    { id: 5, link: "contact" },
  ];

  return (
    <>
      <div className="fixed w-full z-[555]">
        <div className="flex justify-between items-center  h-16 px-4 text-white bg-gradient-to-bl from-black to-gray-800 z-50 py-3">
          <h1 data-aos="fade-up" className="text-4xl ml-2 cursor-pointer select-none">
            A̷b̷d̷a̷l̷l̷a̷h̷
          </h1>
          <ul className="hidden md:flex space-x-4">
            {links.map(({ id, link }) => (
              <li
                data-aos="fade-right"
                key={id}
                className={`  cursor-pointer capitalize text-gray-500 font-medium hover:text-gray-200 hover:scale-105`}
              >
                <Link
                  onClick={() => {
                    setActiveLink(link);
                  }}
                  to={link}
                  smooth
                  duration={500}
                  className={`duration-200   ${
                    activeLink === link ? "activeLink" : ""
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="cursor-pointer text-gray-500 pr-4 z-[10] md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-700  z-[100]">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="capitalize  px-4 cursor-pointer py-6 text-4xl text-gray-500 hover:text-gray-200 duration-300 "
                >
                  <Link
                    to={link}
                    onClick={() => {
                      setNav(!nav);
                    }}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
