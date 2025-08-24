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
    { icon: "", name: "Gallery", path: "/gallery" },
    { icon: "", name: "Our Services", path: "/service" },
    { icon: "", name: "DANCE ONLINE", path: "/online" },
    { icon: "", name: "Support Us", path: "/support" },
    { icon: <FaPhone />, name: "Contact Us", path: "/contact" },

  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Banner */}
      <div className="bg-black py-4">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* ✅ Mobile View: Logo + Title + Menu in 1 row */}
          <div className="flex items-center justify-between md:hidden">
            <div className="flex items-center gap-2">
              <img
                src="/Image/logo.jpg"
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h1 className="text-white text-sm font-bold leading-tight">
                SKY HOP PROFESSIONAL DANCE INSTITUTE
              </h1>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* ✅ Desktop View: Logo + Title in center */}
          <div className="hidden md:flex justify-between items-center">
            <img
              src="/Image/logo.jpg"
              alt="Logo"
              className="w-35 h-35 rounded-full object-cover"
            />
            <h1 className="text-white text-5xl -mr-15 font-extrabold italic text-center">
              SKY HOP PROFESSIONAL DANCE INSTITUTE
            </h1>
            <div className="w-20" /> {/* empty for symmetry */}
          </div>
        </div>
      </div>

      {/* 🔹 Navigation Bar */}
      <div className="bg-black shadow-md">
        <div className="hidden md:flex justify-center ml-10 -mt-10 gap-10 text-white font-semibold py-3">
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
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white p-4 absolute top-full left-0 w-full shadow-md z-50">
            <ul className="flex flex-col gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-[#fc8019]"
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}

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