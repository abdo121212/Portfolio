import React from "react";
import fitnut from "../images/project/fitnut.bmp";
import weather from "../images/project/reactWeather.jpg";
import baker from "../images/project/bakery.bmp";
import movies from "../images/project/movies.bmp";
import loadingScreen from "../images/project/loading.bmp";
import slider from "../images/project/Slider.bmp";
import reactSmooth from "../images/project/reactSmooth.jpg";
import shopsy from "../images/project/shopsy.bmp";
import usestate from "../images/project/usestate.jpg";
import world from "../images/project/World.bmp";
import ecommerce from "../images/project/ecomm.bmp";
const Portfolio = () => {
  const protfolios = [
    {
      id: 2,
      src: loadingScreen,
      title: `I worked on a project that focused on creating a dynamic loading screen for applications. It
features animated spinners, progress bars, and informative messages, enhancing user
experience by providing visual feedback during content loading.`,
      linkGitHub: "https://github.com/abdo121212/Loading-Screen/",
      linkLive: "https://abdo121212.github.io/Loading-Screen/",
    },

    {
      id: 3,
      src: fitnut,
      title: `I worked on a project that calculates daily calorie needs based on user data and creates
personalized diet plans to promote healthy nutrition. Did you know that tracking calorie
intake can significantly improve weight management and overall health`,
      linkGitHub: "https://github.com/abdo121212/fitunt",
      linkLive: "https://app-fitnut.netlify.app/",
    },

    {
      id: 4,
      src: baker,
      title: `I worked on a project that displays static data for a bakery, showcasing product details,
pricing, and descriptions, along with store locations and positions. The interface is intuitive
for easy navigation and information accessInitiated 4 tasks using the EDF scheduler. `,
      linkGitHub: "https://github.com/abdo121212/Bakery",
      linkLive: "https://abdo121212.github.io/Bakery/",
    },
    {
      id: 1,
      src: weather,
      title: `I developed a weather application using React that fetches real-time weather data, displays
      forecasts, and provides location-based weather updates with an intuitive user interface`,
      linkGitHub: "https://github.com/abdo121212/Weather-App",
      linkLive: "https://abdo121212.github.io/Weather-App/",
    },
    {
      id: 7,
      src: reactSmooth,
      title: `A React-based animation library that offers smooth, customizable transitions for UI elements.`,
    },
    {
      id: 8,
      src: usestate,
      title: `useState is a hook that allows you to add state to functional components.`,
    },

    {
      id: 5,
      src: movies,
      title: `• A Site that is built using React js for navigation and tailwind for styling. The site contains
movies and tv series information that are well organized. It is fully responsive.
`,
      linkGitHub: "https://github.com/abdo121212/Movies-App",
      linkLive: "https://movies-app-new-nine.vercel.app/",
    },

    {
      id: 9,
      src: shopsy,
      title: `I developed an e-commerce project that displays products, including details like pricing,
descriptions, and images. The platform provides an intuitive interface for users to browse,
search, and explore available products seamlessly.`,
      linkGitHub: "https://github.com/abdo121212/shopsy",
      linkLive: "https://shopsy-giga.netlify.app/",
    },

    {
      id: 6,
      src: slider,
      title: `I created a responsive slider using HTML, CSS, and JavaScript. The slider displays images
with smooth transitions, navigation arrows, and indicators, allowing users to browse
content interactively on various screen sizes.`,
      linkGitHub: "https://github.com/abdo121212/Slider",
      linkLive: "https://abdo121212.github.io/Slider/",
    },

    {
      id: 7,
      src: world,

      linkGitHub: "https://github.com/abdo121212/VR-World",
      linkLive: "https://vr-world-inky.vercel.app/",
    },
    
    {
      id: 8,
      src: ecommerce,

      linkGitHub: "https://github.com/abdo121212/E-commerce-app",
      linkLive: "https://e-commerce-app-five-gamma.vercel.app/",
    },
  ];
  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-gray-800 to-black w-full  text-white py-10 px-32"
      >
        <div className=" sm:text-center ">
          <p className="text-4xl font-bold border-b-4 border-cyan-400 rounded-2xl px-4 p-2 inline  max-md:text-xl">
            portfolio
          </p>
          <p className="py-10 w-fit max-sm:text-[12px] mx-auto">
            {" "}
            These are the technologies i've worked with
          </p>
        </div>

        <div className="grid max-lg:grid-cols-2  max-lg:gap-x-10 max-md:grid-cols-1  lg:grid-cols-3 gap-10 py-3 px-10 ">
          {protfolios.map(({ id, src, linkGitHub, linkLive, title }) => (
            <div
              key={id}
              data-aos="zoom-up"
              className="flex justify-center items-center"
            >
              <div className="shadow-md max-w-[700px] max-h-[500px] shadow-gray-100 rounded-md duration-300 hover:scale-105">
                <img
                  src={src}
                  loading="lazy"
                  className="rounded-md object-contain w-full"
                  alt="Giga"
                />

                <div className="py-3 px-5 flex flex-col">
                  <div className="flex justify-between items-center  cursor-pointer gap-7">
                    <button className="p-4 font-medium  hover:scale-105  px-6 py-2  rounded-xl hover:font-bold duration-500 max-xl:font-normal max-xl:text-sm ">
                      <a href={linkGitHub} target="blank">
                        GitHub
                      </a>
                    </button>
                    <button className="p-4 font-medium  hover:scale-105  px-6 py-2 rounded-xl hover:font-bold duration-500 max-xl:font-normal max-xl:text-sm ">
                      <a href={linkLive} target="blank">
                        Live Demo
                      </a>
                    </button>
                  </div>
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
