import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return ( 
    <footer className="bg-black text-white pt-10 pb-6 border-t-4 border-b-cyan-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Logo and Nav Links */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Image/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold ml-2">SKY HOP</span>
          </div>

          {/* Navigation */}
           <ul className="hidden md:flex space-x-6 uppercase font-medium text-sm ml-50">
            <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow-400 cursor-pointer">Terms & Condition</li>
          </ul>
        </div>

        {/* Contact Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-sm mt-5 md:mt-0">
          <Link to="/contact">CONTACT US</Link>
        </button>
      </div>

      {/* Social Icons */}
      <div className="max-w-6xl mx-auto px-4 mt-10 flex justify-center space-x-6">
        <a href="https://www.facebook.com/skyhopakash" className="bg-gray-800 hover:bg-gray-700 p-3 rounded">
          <FaFacebookF />
        </a>
        <a href="" className="bg-gray-800 hover:bg-gray-700 p-3 rounded">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/sky_hop?igsh=MTl3aG94MWx4ZDY0dw==" className="bg-gray-800 hover:bg-gray-700 p-3 rounded">
          <FaInstagram />
        </a>
        <a href="https://youtube.com/@sykhopprofessionaldanceins5320?feature=shared" className="bg-gray-800 hover:bg-gray-700 p-3 rounded">
          <FaYoutube />
        </a>
      </div>

      {/* Horizontal line */}
      <div className="border-t border-gray-700 mt-8 max-w-4xl mx-auto"></div>

      {/* Footer bottom */}
      <div className="text-center text-sm text-gray-500 mt-4">
        <span className="text-yellow-500 font-semibold">Devloped By:</span> Hritik Upadhyay
      </div>
    </footer>
  );
};

export default Footer;