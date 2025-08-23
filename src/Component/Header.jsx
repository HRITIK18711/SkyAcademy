import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaInfoCircle, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    { icon: <FaInfoCircle />, name: "Why Us?", path: "/about" },
    { icon: "", name: "Courses", path: "/course" },
    { icon: "", name: "Fees Structure", path: "/fees" },
    { icon: "", name: "Our Services", path: "/service" },
    { icon: <FaPhone />, name: "Contact Us", path: "/contact" },
    { icon: "", name: "Gallery", path: "/gallery" },
    { icon: "", name: "DANCE ONLINE", path: "/online" },
  ];

  return (
    <header>
      {/* 🔹 Top Banner with Title */}
      <div className="bg-black text-center py-6">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4">
          {/* Left Logo */}
          <img
            src="/Image/logo.jpg"
            alt="Logo"
            className="w-35 h-35 rounded-full object-cover"
          />

          {/* Center Title */}
          <div className="flex flex-col  text-white">
            <h1 className="text-2xl italic md:text-5xl mr-20  font-extrabold">
              SKY HOP PROFESSIONAL DANCE INSTITUTE
            </h1>

          </div>

          {/* Right Logo (Optional - if you want symmetry like 1st image) */}

        </div>
      </div>

      {/* 🔹 Navigation Bar */}
      <div className="bg-black shadow-md">
        <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-4 py-3">
          {/* Logo Small for Mobile */}
          <div className="md:hidden w-[60px]">
            <img src="/Image/logo.jpg" alt="Logo" className="rounded-full" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex ml-65 -mt-15 gap-6 lg:gap-10 text-white font-semibold text-sm lg:text-base">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="flex items-center gap-2 hover:text-[#fc8019] transition duration-200"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white p-4 absolute top-[160px] left-0 w-full shadow-md z-50">
            <ul className="flex flex-col gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-[#fc8019]"
                    onClick={() => setMenuOpen(false)} // close menu on click
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}