import React from "react";
import { Button, Drawer, IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import Cursor from "../Animation/cursor";
const url = "https://codewithkaushik.com/Kaushik.pdf";

interface NavigationInterafce {
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
}

const Navigation: React.FC<NavigationInterafce> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const location = useLocation();

  const DesktopNavigation = () => {
    return (
      <div className="hidden lg:flex items-center justify-between h-20 px-5 bg-background">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          {/* <p className="font-serif font-bold text-4xl text-white">K</p> */}
          <div className="ml-12 2xl:ml-20">
            <Link
              to="/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/" ? "text-primary_pink" : "text-white"
              }`}
            >
              <text>Home</text>
            </Link>
            <Link
              to="/about-us"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/about-us"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>About</text>
            </Link>
            <Link
              to="/services"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/services"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Service</text>
            </Link>
            <Link
              to="/portfolios"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/portfolios"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Portfolio</text>
            </Link>
            <Link
              to="/blogs"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/blogs"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Blog</text>
            </Link>
            <Link
              to="/books"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/books"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Free-Books</text>
            </Link>
            <Link
              to="/contact-us"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={` text-lg font-medium capitalize tracking-wider mr-5 2xl:mr-8 ${
                location.pathname === "/contact-us"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Contact</text>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
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
          <Link to={url} download="kaushik" target="_blank" rel="noreferrer">
            <Button className="bg-primary_pink tracking-wider text-xs py-3 hover:shadow-primary_pink hover:shadow-2xl px-5">
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  const MobileNavigation = () => {
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    return (
      <div className="flex lg:hidden h-24 bg-background items-center justify-between pr-5">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        <div className="flex items-center">
          <Link
            to="https://t.me/httpkaushikkk"
            target="_blank"
            className="mr-5"
          >
            <FaTelegramPlane className="text-[1.8rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/kaushik-hirpara-10b672240/"
            target="_blank"
            className="mr-5"
          >
            <FaLinkedinIn className="text-[1.6rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
          </Link>
          <Link
            to="https://www.instagram.com/http.kaushikkk/"
            target="_blank"
            className="mr-5"
          >
            <FiInstagram className="text-[1.6rem] text-white/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300 cursor-pointer" />
          </Link>
          <div onClick={openDrawerRight} className="ml-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-11 h-11 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4 bg-gray-900"
        >
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-11 w-11" />
          </IconButton>
          <div className="text-center">
            <Link
              to="/"
              className={`block text-2xl font-medium capitalize tracking-wider my-8 ${
                location.pathname === "/" ? "text-primary_pink" : "text-white"
              }`}
            >
              <text>Home</text>
            </Link>
            <Link
              to="/about-us"
              className={`block text-2xl font-medium capitalize tracking-wider mb-8 ${
                location.pathname === "/about-us"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>About</text>
            </Link>
            <Link
              to="/services"
              className={`block text-2xl font-medium capitalize tracking-wider mb-8 ${
                location.pathname === "/services"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Service</text>
            </Link>
            <Link
              to="/portfolios"
              className={`block text-2xl font-medium capitalize tracking-wider mb-8 ${
                location.pathname === "/portfolios"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Portfolio</text>
            </Link>
            <Link
              to="/blogs"
              className={`block text-2xl font-medium capitalize tracking-wider mb-8 ${
                location.pathname === "/blogs"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Blog</text>
            </Link>
            <Link
              to="/books"
              className={`block text-2xl font-medium capitalize tracking-wider mb-8 ${
                location.pathname === "/books"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Free-Books</text>
            </Link>
            <Link
              to="/contact-us"
              className={`block text-2xl font-medium capitalize tracking-wider mb-8 ${
                location.pathname === "/contact-us"
                  ? "text-primary_pink"
                  : "text-white"
              }`}
            >
              <text>Contact</text>
            </Link>

            <Link to={url} download="kaushik" target="_blank" rel="noreferrer">
              <Button className="bg-primary_pink tracking-wider text-xs py-3 hover:shadow-primary_pink hover:shadow-2xl px-5">
                Download CV
              </Button>
            </Link>
          </div>
        </Drawer>
      </div>
    );
  };

  return (
    <div className="sticky -top-0 z-50">
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};
export default Navigation;
