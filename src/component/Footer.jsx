// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Academy Logo and Info */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="flex items-center">
            <img src="/path-to-your-logo.png" alt="Malik Sir Academy" className="w-16 h-16 mr-4" />
            <span className="text-2xl font-semibold">Malik Sir Academy</span>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Malik Sir Academy. All Rights Reserved.</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About</a></li>
              <li><a href="#courses" className="hover:text-yellow-500">Courses</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul>
              <li><a href="#blog" className="hover:text-yellow-500">Blog</a></li>
              <li><a href="#events" className="hover:text-yellow-500">Events</a></li>
              <li><a href="#support" className="hover:text-yellow-500">Support</a></li>
              <li><a href="#faq" className="hover:text-yellow-500">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <p>Phone: +123 456 789</p>
            <p>Email: <a href="mailto:info@maliksiracademy.com" className="hover:text-yellow-500">info@maliksiracademy.com</a></p>
            <p>Address: 123 Academy St, City, Country</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-yellow-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-yellow-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-yellow-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-yellow-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Powered by Malik Sir Academy Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
