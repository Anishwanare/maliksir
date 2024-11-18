// Header.js
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <img src="/path-to-your-logo.png" alt="Malik Sir Academy" className="w-16 h-16" />
          </div>

          {/* Center: Navigation Menu */}
          <div className="flex flex-grow justify-center items-center space-x-8">
            <ul className="flex space-x-8 text-lg font-semibold">
              <li className="hover:text-gray-300 transition-all"><a href="/">Home</a></li>
              <li className="hover:text-gray-300 transition-all"><a href="#contact">Contact</a></li>
              <li className="hover:text-gray-300 transition-all"><a href="#support">Support</a></li>
              <li className="hover:text-gray-300 transition-all"><a href="#classes">Classes</a></li>
            </ul>
          </div>

          {/* Right Side: Contact Info */}
          <div className="hidden lg:flex items-center space-x-2">
            <FaPhoneAlt className="text-xl" />
            <p className="text-sm sm:text-base">Contact Us: +123 456 789</p>
          </div>

          {/* Mobile View: Hamburger Menu (optional) */}
          <div className="lg:hidden flex items-center">
            <button className="text-white text-2xl">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
