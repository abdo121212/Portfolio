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
              className="font-bold  sm:text-3xl  md:text-5xl lg:text-7xl "
              data-aos="fade-up"
            >
              I'm a Front-End Developer
            </h1>
            <Link
              data-aos="fade-down"
              to="portfolio"
              smooth
              duration={500}
              className="group ml-4 text-white flex items-center  bg-gradient-to-r max-md:justify-center max-md:w-[120px] from-cyan-500 mx-auto   to-blue-500 cursor-pointer rounded-md my-2 px-6 py-3 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={22} />
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

// <section
// name="home"
// className="w-full bg-gradient-to-b from-black h-screen  to-gray-800"
// >
// <div className="max-w-screen-lg mx-auto  flex flex-col justify-center max-md:flex-col-reverse items-center h-full px-4 md:flex-row pt-14  ">
//   <div className="flex-col justify-center items-center   lg:flex ">
//     <h1
//       data-aos="fade-up"
//       className="text-4xl  font-bold md:text-7xl text-white py-10"
//     >
//       I'm a Front-End Developer
//     </h1>
//     <div data-aos="fade-left">
//       <Link
//         to="portfolio"
//         smooth
//         duration={500}
//         className="group ml-4 text-white flex items-center  bg-gradient-to-r max-md:justify-center max-md:w-[120px] from-cyan-500 mx-auto   to-blue-500 cursor-pointer rounded-md my-2 px-6 py-3 "
//       >
//         Portfolio
//         <span className="group-hover:rotate-90 duration-300">
//           <MdArrowRight size={22} />
//         </span>
//       </Link>
//     </div>
//   </div>
//   <div data-aos="zoom-in-up">
//    <div className="w-full">
//    <img
//       src={Giga}
//       alt="my profile"
//       className="rounded-3xl max-sm:p-10 w-full max-w-[300px] max-sm:rounded-[50px] hover:scale-110 duration-300"
//     />
//    </div>
//   </div>
// </div>
// </section>
