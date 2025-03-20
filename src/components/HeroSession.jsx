import React from "react";
import { SlArrowDown } from "react-icons/sl";
import bgImage from "../assets/programming-background.avif";

const HeroSession = () => {
  return (
    <div
      id="hero_section"
      className="relative flex flex-col items-center justify-center h-screen mb-4 rounded-sm bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
        <h1 className="text-3xl text-white font-bold">Welcome</h1>
        <p className="text-5xl text-white font-bold">I'm Khav Saroeun</p>

        <p className="text-xl text-white">Phnom Penh, Cambodia</p>

        <a
          href="#portfolio"
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Portfolio
        </a>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 text-white animate-smooth-bounce"
      >
        <SlArrowDown size={24} />
      </a>
    </div>
  );
};

export default HeroSession;
