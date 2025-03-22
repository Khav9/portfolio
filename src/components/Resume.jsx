import React from "react";

const Resume = () => {
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
        <h2 className="sm:text-5xl text-3xl font-bold text-gray-800 relative inline-block text-center w-full">
          <span className="relative text-white border-b-4 border-blue-500">
            Resume
          </span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold sm:px-0 px-3">My Education</h3>
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
            <h3 className="text-2xl font-bold sm:px-0 px-3">My Experience</h3>
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
};

export default Resume;
