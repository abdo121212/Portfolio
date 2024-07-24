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
            <p className="text-4xl font-bold   border-b-4 inline  border-gray-500">
              About
            </p>
          </div>
          <p className="text-lg">
            I'm have one experince building and designing software . Currently ,
            I love to work on web appliation using technologies like React ,
            Tailwind , Node Js And GraphQl
          </p>
          <br />
          <p className="text-lg ">
            I have had the enriching experience of building and designing
            software, and my current passion lies in the realm of web
            application development. Over time, I have honed my skills and
            expertise in crafting innovative solutions using cutting-edge
            technologies. My toolkit includes proficiency in React, Tailwind,
            Node.js, and GraphQL, which collectively empower me to create
            dynamic and responsive web applications. The versatility of these
            technologies allows me to seamlessly blend creativity with
            functionality, delivering user-centric and aesthetically pleasing
            digital experiences. I am enthusiastic about staying at the
            forefront of the ever-evolving tech landscape, embracing challenges,
            and consistently pushing the boundaries of what is possible in the
            realm of software development. With a strong foundation in these
            technologies, I am dedicated to contributing to the evolution of web
            applications and creating solutions that not only meet but exceed
            user expectations.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
