import React, { useState, useRef, useEffect } from "react";
import HTML from "../assets/techs/HTML5.svg.png";
import CSS from "../assets/techs/css.svg";
import PYTHON from "../assets/techs/python.svg";
import JS from "../assets/techs/JavaScript.png";
import PHP from "../assets/techs/PHP.svg.png";
import LARAVEL from "../assets/techs/Laravel.png";
import VUE from "../assets/techs/Vue.svg.png";
import REACT from "../assets/techs/React.webp";
import FLUTTER from "../assets/techs/Flutter.png";
import NODE from "../assets/techs/node.png";
import TAILWIND from "../assets/techs/Tailwind.svg.png";

const technologies = [
  { id: 1, name: "HTML", logo: HTML },
  { id: 2, name: "CSS", logo: CSS },
  { id: 3, name: "Tailwind", logo: TAILWIND },
  { id: 4, name: "Python", logo: PYTHON },
  { id: 5, name: "JavaScript", logo: JS },
  { id: 6, name: "Node.js", logo: NODE },
  { id: 7, name: "PHP", logo: PHP },
  { id: 8, name: "Laravel", logo: LARAVEL },
  { id: 9, name: "Vue.js", logo: VUE },
  { id: 10, name: "React.js", logo: REACT },
  { id: 11, name: "Flutter", logo: FLUTTER },
];

const techLoop = [...technologies, ...technologies];

const TechLogos = () => {
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const lastTimeRef = useRef(0);
  const requestRef = useRef(null);
  const holdRef = useRef(false);

  const animationDuration = 20; 
  const speed = 100 / animationDuration; 

  useEffect(() => {
    const animate = (time) => {
      if (!paused && !holdRef.current) {
        if (lastTimeRef.current) {
          const deltaTime = (time - lastTimeRef.current) / 1000;
          setOffset((prevOffset) => (prevOffset - speed * deltaTime) % 100);
        }
        lastTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [paused]);

  const handleMouseDown = () => {
    holdRef.current = true;
  };

  const handleMouseUp = () => {
    holdRef.current = false;
  };

  return (
    <div className="relative overflow-hidden bg-gray-900 py-6 shadow-lg rounded-lg">
      <div
        className="flex whitespace-nowrap items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          transform: `translateX(${offset}%)`,
          transition: holdRef.current ? "none" : "transform 0.3s ease-in-out",
        }}
      >
        {techLoop.map((tech, index) => (
          <div key={index} className="flex flex-col items-center mx-8 text-center">
            <img src={tech.logo} alt={tech.name} className="w-20 h-auto drop-shadow-md transition-transform duration-300 hover:scale-110" />
            <span className="mt-2 text-md font-semibold text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechLogos;
