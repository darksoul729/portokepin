"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  private: boolean;
  images: string[];
};

const ProjectCard: React.FC<ProjectProps> = ({ name, description, html_url, private: isPrivate, images }) => {
  const [showAllImages, setShowAllImages] = useState(false);

  const initialImagesToShowMobile = 1;
  const initialImagesToShowDesktop = 2;

  const imagesToShow = showAllImages
    ? images
    : images.slice(0, typeof window !== "undefined" && window.innerWidth < 640 ? initialImagesToShowMobile : initialImagesToShowDesktop);

  return (
    <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] rounded-lg shadow-md border overflow-hidden bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
      <div className="relative z-10 p-4 sm:p-5 flex flex-col h-full justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-all">
          {name}
        </h2>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPrivate ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
          {isPrivate ? "Private" : "Public"}
        </span>
        {description && <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>}
        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AnimatePresence>
              {imagesToShow.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full aspect-[16/9] overflow-hidden rounded-md"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        {(images.length > initialImagesToShowMobile || images.length > initialImagesToShowDesktop) && (
          <button
            onClick={() => setShowAllImages(!showAllImages)}
            className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold transition-all"
          >
            {showAllImages ? "Sembunyikan" : "Lihat Lainnya"}
          </button>
        )}
        {html_url && (
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold transition-all mt-2 text-sm"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
