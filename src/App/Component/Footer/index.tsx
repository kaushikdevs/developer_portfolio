import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";

interface FooterInterface {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const Footer: React.FC<FooterInterface> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="flex items-center mb-5">
        <Link
          to="https://t.me/httpkaushikkk"
          target="_blank"
          className="mr-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaTelegramPlane className="text-[1.8rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/kaushik-hirpara-10b672240/"
          target="_blank"
          className="mr-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedinIn className="text-[1.6rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
        </Link>
        <Link
          to="https://www.instagram.com/http.kaushikkk/"
          target="_blank"
          className="mr-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FiInstagram className="text-[1.6rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
        </Link>
        <Link
          to="https://stackoverflow.com/users/22267875/code-with-kaushik"
          target="_blank"
          className="mr-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsStackOverflow className="text-[1.6rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
        </Link>
      </div>
      <text className="text-white text-xs font-bold mb-3">
        &copy;2023 Kaushik Hirpara | All Rights Reserved
      </text>
    </footer>
  );
};

export default Footer;
