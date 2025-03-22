import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-[#1E2125] text-white py-24 px-3">
      <div className="sm:text-left text-center max-w-5xl mx-auto flex flex-col md:flex-row sm:items-center items-start">
        <div className="md:w-2/3">
          <h2 className="sm:text-center sm:text-5xl text-3xl font-bold text-gray-800 relative inline-block">
            <span className="relative text-white border-b-4 border-blue-500">
              Know Me More
            </span>
          </h2>
          <p className="mt-6 text-lg font-light sm:text-left text-left">
            I'm <span className="font-bold text-blue-500">Khav</span>, a Web
            Developer.
          </p>
          <p className="mt-4 text-gray-400 text-justify md:text-justify">
            I am happy to work as a{" "}
            <span className="font-bold">Full-Stack Developer</span> with
            experience in JavaScript, Vue.js, and Laravel with MySQL. I aim to
            apply and enhance my skills in both front-end and back-end
            development while learning and receiving guidance from my team. I
            enjoy researching and learning new technologies that are popular
            today.
          </p>
          <p className="mt-4 text-gray-400 text-justify md:text-justify">
            Delivering work within time and budget which meets client’s
            requirements is our motto. Lorem Ipsum has been the industry’s
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 sm:pl-12 pl-0 text-left">
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
          <a
            href="https://drive.google.com/file/d/1htu_ybd7AT4NANXL92_cci46L61jAqpa/view?usp=sharing"
            download="khav_saroeun.pdf"
            className="mt-6 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-300text-lg inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
