/** @format */

import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";
import sunhara from "../assets/logo/sunhara.png";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky w-full bg-[#800020] shadow-md z-10">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={sunhara} alt="Logo" className="h-12 w-28" />
          {/* <span className='text-xl font-bold text-gray-800'>My Brand</span> */}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#FFD700] text-[#fffff0] font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#FFD700] text-[#fffff0] font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#FFD700] text-[#fffff0] font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#FFD700] text-[#fffff0] font-medium"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth={true}
              duration={1000}
              className="block text-center cursor-pointer hover:text-[#FFD700] text-[#fffff0] font-medium"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <RxCross2 color="#FFD700"  size={24} /> : <RiMenu4Fill color="#FFD700" size={24}/>}
          </button>
        </div>

        {/* Book Attendance Button */}
        {/* <button className='hidden md:block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
          Book Attendance
        </button> */}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 space-y-4 py-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="block text-center cursor-pointer hover:text-red-500 text-gray-700 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="block text-center cursor-pointer hover:text-red-500 text-gray-700 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to='story'
              smooth={true}
              duration={1000}
              className='block text-center cursor-pointer hover:text-red-500 text-gray-700 font-medium'
              onClick={toggleMenu}>
              Story
            </Link>
          </li> */}
          <li>
            <Link
              to="services"
              smooth={true}
              duration={1000}
              className="block text-center cursor-pointer hover:text-red-500 text-gray-700 font-medium"
              onClick={toggleMenu}
            >
             Services
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={1000}
              className="block text-center cursor-pointer hover:text-red-500 text-gray-700 font-medium"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              smooth={true}
              duration={1000}
              className="block text-center cursor-pointer hover:text-red-500 text-gray-700 font-medium"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </li>
          {/* <li>
            <button className='block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
              Book Attendance
            </button>
          </li> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
