import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const categories = ["All", "Brand", "Photos", "Design"];
  const portfolioItems = [
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-2.jpg",
      category: "Design",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-5.jpg",
      category: "Brand",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg",
      category: "Photos",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-1.jpg",
      category: "Photos",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-7.jpg",
      category: "Design",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-6.jpg",
      category: "Brand",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-4.jpg",
      category: "Photos",
    },
    {
      src: "https://harnishdesign.net/demo/react/simone/demo/images/projects/project-4.jpg",
      category: "Photos",
    },
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
};

export default Portfolio;
