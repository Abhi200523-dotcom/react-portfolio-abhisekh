import { useState } from "react";
import logo from "../assets/assets/neonCrown.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";

const Navbar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0226430022");
    setCopied(true);
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-0 w-14" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhisekh-chand-25201823b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhi200523-dotcom"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:abhisekhchand23@gmail.com"
          className="hover:text-red-600 transition duration-300"
        >
          <AiOutlineMail />
        </a>
        <button
          onClick={handleCopy}
          className="relative hover:text-green-600 transition duration-300"
        >
          <CiPhone />
          {copied && (
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
