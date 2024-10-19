import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <>
      <div
        className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fiexd z-50 py-11"
      >
        <div>
          <h1
        data-aos="fade-up"
          
          className="font-signature text-5xl ml-2 cursor-pointer">
            Abdallah
          </h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li

        data-aos="fade-right"

              key={id}
              className="px-4 cursor-pointer capitalize text-gray-500 font-medium hover:text-gray-200 hover:scale-105  duration-200"
            >
              <Link to={link} smooth duration={500}>
                {" "}
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer text-gray-500 pr-4 z-10  md:hidden "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-700 ">
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
    </>
  );
};

export default Navbar;
