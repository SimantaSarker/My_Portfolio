import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";


import { Link } from "react-scroll";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);





  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#203352] text-gray-300 z-10">
      <div>
      <h1 className="text-5xl text-pink-500">Simanta</h1>
      </div>

      <ul className="hidden md:flex text-2xl">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
        
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* HamBurger Menu */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icon */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="space-y-4">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-104px] hover:ml-[-10px] duration-500 bg-[#1f7bb5] rounded text-2xl">
            <a
              href="https://www.linkedin.com/in/simanta-sarker-792759181/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-104px] hover:ml-[-10px] duration-500 bg-gray-700 rounded text-2xl">
            <a
              href="https://github.com/SimantaSarker"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30}></FaGithub>
            </a>
          </li>
     
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
