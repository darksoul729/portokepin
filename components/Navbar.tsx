"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Navbar Scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isNavbarVisible ? 0 : -100, opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-full backdrop-blur-lg bg-gradient-to-r from-white to-gray-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white shadow-xl z-50 transition-all border-b border-gray-300 dark:border-gray-700"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Kevin Hermansyah</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
            {["About", "Skills", "Information", "Project", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.div>

      {/* Sidebar Navbar for Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-white to-gray-200 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg text-black dark:text-white shadow-2xl z-50 border-r border-gray-300 dark:border-gray-700"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="p-6">
              <h1 className="text-xl font-bold mb-6 text-blue-500 dark:text-blue-400">Kevin Hermansyah</h1>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                {["About", "Skills", "Information", "Project", "Contact"].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
