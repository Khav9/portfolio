import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#1E2125] text-white pt-36 pb-22 px-8 text-center">
      <div className="text-center  mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 relative inline-block">
          <span
            className="absolute -z-10 text-7xl font-extrabold text-gray-900 opacity-20"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)" }}
          >
            ABOUT ME
          </span>
          <span className="relative text-white border-b-4 border-blue-500">
            Contact Me By
          </span>
        </h2>
        <p className="mt-12 text-gray-400">010 250 337</p>
        <p className="mt-3 text-gray-400">
          <a href="https://t.me/khav_saroeun"
          target="https://t.me/khav_saroeun"
          rel="noopener noreferrer"
          >@khav_saroeun</a>
        </p>
        <p className="mt-3 text-gray-400">
          <a href="mailto:khav.saroeun@gmail.com">khav.saroeun@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
