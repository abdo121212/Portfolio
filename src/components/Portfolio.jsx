import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307505/movies_upjbe5.bmp",

      linkGitHub: "https://github.com/abdo121212/Movies-App",
      linkLive: "https://movies-app-new-nine.vercel.app/",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307506/loading_lvmr82.bmp",
      linkGitHub: "https://github.com/abdo121212/Loading-Screen/",
      linkLive: "https://abdo121212.github.io/Loading-Screen/",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307504/fitnut_fgqb3s.bmp",
      linkGitHub: "https://github.com/abdo121212/fitunt",
      linkLive: "https://app-fitnut.netlify.app/",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307505/bakery_kipfqn.bmp",

      linkGitHub: "https://github.com/abdo121212/Bakery",
      linkLive: "https://abdo121212.github.io/Bakery/",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307370/reactWeather_snfoy2.jpg",

      linkGitHub: "https://github.com/abdo121212/Weather-App",
      linkLive: "https://abdo121212.github.io/Weather-App/",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307573/shopsy_ozqgfm.bmp",

      linkGitHub: "https://github.com/abdo121212/shopsy",
      linkLive: "https://shopsy-giga.netlify.app/",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307516/Slider_uyruuu.bmp",
      linkGitHub: "https://github.com/abdo121212/Slider",
      linkLive: "https://abdo121212.github.io/Slider/",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307613/World_prwp06.bmp",

      linkGitHub: "https://github.com/abdo121212/VR-World",
      linkLive: "https://vr-world-inky.vercel.app/",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1741307498/ecomm_wcaydq.bmp",

      linkGitHub: "https://github.com/abdo121212/E-commerce-app",
      linkLive: "https://e-commerce-app-five-gamma.vercel.app/",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1744902918/capture_20250409160207324_oqhoox.bmp",

      linkGitHub: "https://github.com/abdo121212/todo-list",
      linkLive: "https://todo-list-smoky-phi-38.vercel.app/",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1744918180/capture_20250417212041260_t4llsw.bmp",
      linkGitHub: "https://github.com/abdo121212/Create-Products",
      linkLive: "https://createpro.netlify.app/",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1745975299/capture_20250430040455852_hycnzi.png",
      linkGitHub: "https://github.com/abdo121212/Travel",
      linkLive: "https://travel-giga.netlify.app/",
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

        <div className="grid max-lg:grid-cols-2  max-lg:gap-x-10 max-md:grid-cols-1  lg:grid-cols-3 gap-10  py-3 px-10  ">
          {portfolios.map(({ id, src, linkGitHub, linkLive }) => (
            <div
              key={id}
              data-aos="zoom-up"
              className="flex justify-center items-center"
            >
              <div className="shadow-md max-w-[700px] max-h-[500px] shadow-gray-100 rounded-md duration-300 hover:scale-105 ">
                <img
                  src={src}
                  loading="lazy"
                  className="rounded-md object-contain w-[350px] h-[180px]"
                  alt="image for products"
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
