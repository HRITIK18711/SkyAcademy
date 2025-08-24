import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedin , FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050028] text-white pt-12 pb-6 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SkyHop</h2>
          <p className="text-gray-300">
            Thank you for visiting our official dance portfolio website.
            Connect with us over socials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About Us</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Gallery</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact US</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-yellow-400" /> +91 7985516210 , +91 9219589420
          </p>
          <p className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-yellow-400" /> skyhop22@gmail.com
          </p>
          <p className="flex items-center gap-3 mb-5">
            <FaMapMarkerAlt className="text-yellow-400" /> House No 1, Dev Nagar Apartment, Thana Rd, near Smileganj, 
            Sector 8, Indira Nagar, Lucknow, Uttar Pradesh 226016
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/skyhopakash"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/sykhop-professional-dance-institute-549389377?utm_source=share&utm_campaign=share"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sky_hop?igsh=MTl3aG94MWx4ZDY0dw=="
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@sykhopprofessionaldanceins5320?feature=shared"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="absolute right-8 bottom-8">
        <a
          href="#top"
          className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full"
        >
          ↑
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <span className="text-yellow-400 font-semibold">Developed By:</span>{" "}
        Hritik Upadhyay
      </div>
    </footer>
  );
};

export default Footer;
