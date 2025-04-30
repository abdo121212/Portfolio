import React from "react";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white max-md:pt-20 pb-20"
    >
      <div className="pb-8 text-center ">
        <p
          data-aos="fade-up"
          className="text-4xl font-bold  border-b-4 inline border-cyan-400 rounded-2xl px-4  max-w-[10px]"
        >
          Contact
        </p>
        <p data-aos="fade-up" className="py-6">
          Submit the form below to get in touch with me{" "}
        </p>
      </div>

      <div className="flex flex-row p-4 justify-center items-center max-w-screen-lg mx-auto gap-6 max-lg:flex-col">
        <div className=" flex justify-center items-center w-3/4">
          <form
            action="https://getform.io/f/184edfe2-14eb-4128-8a67-a3467847a450"
            method="POST"
            className="flex flex-col w-full md:w-3/4"
          >
            <input
              data-aos="fade-up"
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-inherit "
            />
            <input
              required
              data-aos="fade-up"
              type="text"
              name="email "
              placeholder="Enter Your Email "
              className="p-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-inherit "
            />
            <textarea
              required
              data-aos="fade-up"
              placeholder="Enter Your Message "
              name="message"
              className="p-2 bg-transparent  focus:outline-inherit  focus:outline-none border-2 rounded-md text-white"
              rows="10"
            ></textarea>
            <button
              data-aos="fade-up"
              className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md text-white my-8 hover:scale-105 transition duration-700 ease-in-out  mx-auto flex items-center"
            >
              let's talk
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 py-10  w-1/4 max-md:w-full">
          <div
            data-aos="fade-up"
            className="bg-gray-800 hover:bg-[#1c3852] hover:border   w-[300px] hover:scale-105 h-[200px] border-none space-y-3 rounded-xl flex justify-center items-center flex-col "
          >
            <FaMailBulk size={30} className="text-white justify-center " />
            <h4 className="font-bold text-xl">Email</h4>
            <a
              href="mailto:atfbdallh147@gmail.com"
              target="blank"
              className="duration-700 hover:scale-105 hover:font-bold hover:text-teal-400"
            >
              Send a message
            </a>
          </div>
          <div
            data-aos="fade-up"
            className="bg-gray-800 hover:bg-[#1c3852] hover:border   w-[300px] hover:scale-105 h-[200px] border-none space-y-3 rounded-xl flex justify-center items-center flex-col  "
          >
            <FaWhatsapp size={30} className="text-white justify-center " />
            <h4 className="font-bold text-xl">WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+201067580075"
              target="blank"
              className=" hover:scale-105 hover:font-bold hover:text-teal-400 "
            >
              Send a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
