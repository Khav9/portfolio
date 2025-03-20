import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-[#1E2125] text-white pt-36 pb-22 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-800 relative inline-block">
            <span
              className="absolute -z-10 text-7xl font-extrabold text-gray-900 opacity-20"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)" }}
            >
              ABOUT ME
            </span>
            <span className="relative text-white border-b-4 border-blue-500">
              Know Me More
            </span>
          </h2>
          <p className="mt-6 text-lg font-light">
            I'm <span className="font-bold text-blue-500">Khav</span>, a Web
            Developer
          </p>
          <p className="mt-4 text-gray-400">
            I am happy to work as a{" "}
            <span className="font-bold">Full-Stack Developer</span> with
            experience in JavaScript, Vue.js, and Laravel with MySQL. I aim to
            apply and enhance my skills in both front-end and back-end
            development while learning and receiving guidance from my team. I
            enjoy researching and learning new technologies that are popular
            today.
          </p>
          <p className="mt-4 text-gray-400">
            Delivering work within time and budget which meets client’s
            requirements is our motto. Lorem Ipsum has been the industry’s
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:pl-12">
          <div className="text-gray-400 space-y-2">
            <p>
              <span className="text-white font-bold">Name:</span> Khav Saroeun
            </p>
            <p>
              <span className="text-white font-bold">Email:</span>{" "}
              <a href="mailto:chat@simone.com" className="text-blue-500">
                khav.saroeun@gmail.com
              </a>
            </p>
            <p>
              <span className="text-white font-bold">Age:</span> 21
            </p>
            <p>
              <span className="text-white font-bold">From:</span> Phnom Penh,
              Cambodia
            </p>
          </div>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
