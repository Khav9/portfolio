import React from "react";
import { FaDesktop, FaPencilRuler,FaDatabase } from "react-icons/fa";

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

const Skill = () => {
  return (
    <section className="bg-[#1E2125] text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="sm:text-5xl text-3xl font-bold mb-8 text-white">What I Do?</h2>
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
};

export default Skill;
