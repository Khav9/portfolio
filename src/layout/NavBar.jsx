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

      <div className="p-1 sm:ml-64">
        <div className="p-1 border-2 border-gray-200 border-dashed rounded-lg bg-[#1E2125]">
          {/* Hero Session */}
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
          {/* About Me */}
          <AboutMe />
          {/* Resume */}
          <Resume />
          {/* research & learning */}
          <Services />
          {/* Portfolio */}
          <Portfolio />
          {/* Contact */}
          {/* <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">text</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;

function AboutMe() {
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
}

function Resume() {
  const educations = [
    {
      year: "2023-2024",
      title: "Computer Science",
      location: "Passerelles Numériques Cambodia",
      description:
        " 2-year full time training in IT with a major in Software Development, meeting the needs of local companies in the IT industry, for underprivileged Cambodian youths.",
    },
    {
      year: "2020-2022",
      title: "High School Diploma",
      location: "Chom Roeun Vichea High School",
      description:
        "Three years of private school education supported by the Catholic community and the Korean Association.\n- General knowledge\n- Computer proficiency, including Microsoft Office",
    },
  ];

  const experiences = [
    {
      year: "01/08/2024-30/11/2024",
      position: "Software Engineer Internship",
      company: "NiyAI Co., Ltd",
      description:
        "Internship as a Software Engineer, working on the company's project and research about how AI work. They are using technologies\n- PHP, Laravel, MySQL\n- Agile methodology (Scrum)\n- Testing, JMetter\n- Git version control ",
    },
  ];

  return (
    <section className="bg-black text-white py-16 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 relative inline-block text-center w-full">
          <span className="relative text-white border-b-4 border-blue-500">
            Resume
          </span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold">My Education</h3>
            {educations.map((education, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg mt-4">
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                  {education.year}
                </span>
                <h4 className="text-xl font-bold mt-2">{education.title}</h4>
                <p className="text-blue-500">{education.location}</p>
                <p className="text-gray-400 mt-2">
                  {education.description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold">My Experience</h3>
            {experiences.map((experience, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg mt-4">
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                  {experience.year}
                </span>
                <h4 className="text-xl font-bold mt-2">
                  {experience.position}
                </h4>
                <p className="text-blue-500">{experience.company}</p>
                <p className="text-gray-400 mt-2">
                  {experience.description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaDesktop, FaPencilRuler, FaBrush, FaDatabase } from "react-icons/fa";

const services = [
  {
    title: "Web Design",
    icon: <FaDesktop />,
    description:
      "Create a stunning and user-friendly website that looks great on any device and works seamlessly with a dynamic database.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler />,
    description:
      "Design intuitive and visually appealing interfaces that make every interaction smooth and enjoyable for users.",
  },
  {
    title: "Database Design",
    icon: <FaDatabase />,
    description:
      "Structure and optimize databases efficiently to ensure fast, secure, and scalable data management for your projects.",
  },
];

function Services() {
  return (
    <section className="bg-[#1E2125] text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">What I Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-6 rounded-lg shadow-md text-start"
            >
              <div className="text-blue-500 text-3xl p-4 bg-black rounded-lg">
                {service.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



import { motion, AnimatePresence } from "framer-motion";

function Portfolio() {
  const categories = ["All", "Brand", "Photos", "Design"];
  const portfolioItems = [
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-2.jpg", category: "Design" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-5.jpg", category: "Brand" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg", category: "Photos" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg", category: "Photos" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-7.jpg", category: "Design" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-6.jpg", category: "Brand" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-4.jpg", category: "Photos" },
    { src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-4.jpg", category: "Photos" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 relative inline-block">
          My Work
          <span className="absolute -z-10 text-7xl font-extrabold opacity-10 left-1/2 -translate-x-1/2">
            PORTFOLIO
          </span>
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center space-x-6 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium ${
                activeCategory === category
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400"
              } hover:text-blue-400 transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid Layout with Animation */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-10">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.src}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}