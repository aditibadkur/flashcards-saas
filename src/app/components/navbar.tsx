"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-cyan-700 bg-opacity-24 text-white p-3 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-lg font-bold">
          Product Name
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-cyan-400 transition duration-300">Login</Link>
          <Link href="#" className="hover:text-cyan-400 transition duration-300">Sign Up</Link>
          <button
            className="p-2 rounded hover:bg-cyan-600 focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            >
            {theme === "dark" ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
           </button>
        </div>

        
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="bg-black bg-opacity-75 fixed inset-0 z-40 flex justify-center items-center"
        >
          <div className="bg-white text-black p-5 rounded shadow-lg flex flex-col items-center space-y-4 relative">
            
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link href="#" onClick={closeMenu} className="hover:text-cyan-400 transition duration-300">Login</Link>
            <Link href="#" onClick={closeMenu} className="hover:text-cyan-400 transition duration-300">Sign Up</Link>
            <button
            className="p-2 rounded hover:bg-cyan-600 focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            >
            {theme === "dark" ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
