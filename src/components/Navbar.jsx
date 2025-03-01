// src/components/Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white w-full p-2">
      {/* NAVBAR ROW */}
      <div className="flex items-center justify-between h-16 w-full px-2">
        {/* LEFT: BRAND */}
        <div className="flex items-center gap-2">
          {/* Replace with your logo file/path */}
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
            alt="Persist Logo"
            className="h-7 w-auto m-2"
          />
          
        </div>

        {/* RIGHT: LINKS (hidden on mobile) + FELLOWSHIP BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#ongoing"
            className="text-sm transition-colors duration-300 hover:text-purple-500 whitespace-nowrap"
          >
            Ongoing Startupathon
          </a>
          <a
            href="completed"
            className="text-sm transition-colors duration-300 hover:text-purple-500 whitespace-nowrap"
          >
            Completed Startupathon
          </a>
          <a
            href="guide"
            className="text-sm transition-colors duration-300 hover:text-purple-500 whitespace-nowrap"
          >
            Startupathon Guide
          </a>
          <a
            href="#how-it-works"
            className="text-sm transition-colors duration-300 hover:text-purple-500 whitespace-nowrap"
          >
            How It Works
          </a>
          <a
            href="#mentor-network"
            className="text-sm transition-colors duration-300 hover:text-purple-500 whitespace-nowrap"
          >
            Mentor Network
          </a>

          {/* Fellowship button with gradient hover */}
          <a
            href="#fellowship"
            className="
              text-sm px-4 py-2 rounded-full font-medium whitespace-nowrap
              transition-all duration-500
              bg-purple-600
              hover:bg-gradient-to-r
              hover:from-purple-600 hover:via-pink-500 hover:to-purple-600
              hover:bg-[length:400%_400%]
              hover:animate-gradientMove
            "
          >
            Apply For Fellowship
          </a>
        </div>

        {/* HAMBURGER (Mobile Only) */}
        <button
          type="button"
          className="md:hidden bg-purple-600 hover:bg-purple-700 p-2 rounded-full flex flex-col items-center justify-center gap-1"
          onClick={toggleMenu}
        >
          <div className="w-4 h-[2px] bg-white" />
          <div className="w-4 h-[2px] bg-white" />
          <div className="w-4 h-[2px] bg-white" />
        </button>
      </div>

      {/* MOBILE MENU (shown when isOpen = true) */}
      {isOpen && (
        <div className="md:hidden bg-black px-2 pt-2 pb-4 space-y-2">
          <a
            href="#ongoing"
            className="block text-sm transition-colors duration-300 hover:text-purple-500"
          >
            Ongoing Startupathon
          </a>
          <a
            href="#completed"
            className="block text-sm transition-colors duration-300 hover:text-purple-500"
          >
            Completed Startupathon
          </a>
          <a
            href="#guide"
            className="block text-sm transition-colors duration-300 hover:text-purple-500"
          >
            Startupathon Guide
          </a>
          <a
            href="#how-it-works"
            className="block text-sm transition-colors duration-300 hover:text-purple-500"
          >
            How It Works
          </a>
          <a
            href="#mentor-network"
            className="block text-sm transition-colors duration-300 hover:text-purple-500"
          >
            Mentor Network
          </a>
          <a
            href="#fellowship"
            className="
              block text-sm font-medium text-center px-4 py-2 rounded-full
              bg-purple-600 transition-all duration-500
              hover:bg-gradient-to-r
              hover:from-purple-600 hover:via-pink-500 hover:to-purple-600
              hover:bg-[length:400%_400%]
              hover:animate-gradientMove
            "
          >
            Apply For Fellowship
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
