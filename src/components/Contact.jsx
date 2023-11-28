import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[1000px]  bg-gradient-to-b from-black  to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8 text-center ">
          <p className="text-4xl font-bold  border-b-4 inline border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/184edfe2-14eb-4128-8a67-a3467847a450"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-inherit "
            />
            <input
              type="text"
              name="email "
              placeholder="Enter Your Email "
              className="p-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-inherit "
            />
            <textarea
              placeholder="Enter Your Message "
              name="message"
              className="p-2 bg-transparent  focus:outline-inherit  focus:outline-none border-2 rounded-md text-white"
              rows="10"
            ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md text-white my-8 hover:scale-110 duration-300 mx-auto flex items-center">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
