import React from "react";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white sm:text-center max-sm:py-40 max-sm:pt-10"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full  ">
          <div className="py-5 ">
            <p
              data-aos="fade-left"
              className="text-4xl font-bold   border-b-4 inline  border-gray-500"
            >
              About
            </p>
          </div>
          <p data-aos="fade-up" className="text-lg">
            I'm have  two years experince building and designing software . Currently ,
            I love to work on web appliation using technologies like React ,
            Tailwind ,Bootstrap
          </p>
          <br />
          <p
          data-aos="fade-right"
          className="text-lg ">
       Years of learning and working in full-stack development, I've developed extensive knowledge in
- Front-end development: ReactJS | NextJS
- Back-end development: NodeJS
- Databases: Postgres | MySql
- Styling: SASS | CSS-in-JS | Bootstrap | TailwindCSS
- Infra: Netlify | vercel

I have also finished 4 years of studying at HTI (A well-known college in Egypt) for computer science where I have learned a lot about computers and how they work.

Some of the key things I learned in years at the HTI
- Data structure and algorithms
- OOP
- System analyses
- Networks
- Artificial intelgance
- Neural network
- System design
- computer ethics
- Operating system  
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
