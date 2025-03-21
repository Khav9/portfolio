import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdEmail, MdOutlineClose } from "react-icons/md";
import HeroSession from "../components/HeroSession";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import mePro from "../assets/saroeun-khav.jpg";
import Contact from "../components/Contact";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black sticky top-0 z-50 p-4 flex items-center justify-between sm:hidden">
        <a href="#" className="text-white font-bold uppercase">
          KhavSaroeun
        </a>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Khav9"
            target="https://github.com/Khav9"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/khav-saroeun-443b272a2/"
            target="https://www.linkedin.com/in/khav-saroeun-443b272a2/"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={16} />
          </a>
          <a href="khav.saroeun@email.com">
            <MdEmail size={18} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:text-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open sidebar</span>
            <div className="relative w-6 h-6">
              <MdOutlineClose
                className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                  menuOpen ? "opacity-100" : "opacity-0"
                }`}
                size={30}
              />
              <HiOutlineMenuAlt2
                className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
                size={30}
              />
            </div>
          </button>
        </div>
      </div>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-black transition-transform ${
          menuOpen ? "translate-x-0 mt-8" : "-translate-x-full"
        } sm:translate-x-0`}
        id="default-sidebar"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 my-6 py-4 overflow-y-auto dark:black text-center">
          <ul className="space-y-2 font-medium text-center">
            <li className="hidden sm:flex flex-col items-center justify-center mb-4">
              <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
                <img
                  src={mePro}
                  alt=""
                  className="img-fluid rounded-full d-block w-30 h-30 mx-auto mb-2"
                />
              </span>
              <h1 className="text-white">Khav Saroeun</h1>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">About Me</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Resume</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
            <li
              className={`mt-45 flex items-center justify-center space-x-4 ${
                menuOpen ? "hidden" : "block"
              }`}
            >
              <a
                href="https://github.com/Khav9"
                target="https://github.com/Khav9"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/khav-saroeun-443b272a2/"
                target="https://www.linkedin.com/in/khav-saroeun-443b272a2/"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a href="khav.saroeun@email.com">
                <MdEmail size={24} />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-64">
        <div className="border-gray-200  rounded-lg bg-[#1E2125]">
          <HeroSession />
          <AboutMe />
          <Resume />
          <Skill />
          <Portfolio />
          {/* Contact */}
          <Contact />
          {/* <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">text</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;