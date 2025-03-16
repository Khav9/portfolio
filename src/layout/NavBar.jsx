import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdEmail, MdOutlineClose } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

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
            <FaGithub  size={16}/>
          </a>
          <a
            href="https://www.linkedin.com/in/khav-saroeun-443b272a2/"
            target="https://www.linkedin.com/in/khav-saroeun-443b272a2/"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={16}/>
          </a>
          <a href="khav.saroeun@email.com">
            <MdEmail size={18}/>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:text-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  src="https://images.khmer24.co/profiles/pictures/24-11-06/1095531945197f8673fc1b8117201131611730906477552620814895.jpg"
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
                <FaGithub size={24}/>
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

      <div className="p-1 sm:ml-64">
        <div className="p-1 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div
            id="hero_section"
            className="relative flex flex-col items-center justify-center h-screen mb-4 rounded-sm bg-[url('https://images.ctfassets.net/2htm8llflwdx/1LEJIT9KGRC4nwTJ5vuS6H/a912e31c468fd32986f2818816135cc4/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068.jpg')] bg-cover bg-center bg-fixed"
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

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
               text
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
               text
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              text
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;