import React from "react";
import { Link } from "react-router-dom";

const WebNav = () => {
  React.useEffect(() => {}, []);
  return (
    <div className="h-28 items-center md:justify-between xl:justify-center lg:flex hidden md:mx-10 xl:mx-0">
      <div>
        <p className="text-3xl capitalize font-rubik_bold text-blue-gray-600">
          company
        </p>
      </div>
      <div className="xl:mx-12 flex items-center">
        <Link to="/">
          <p className="text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            home
          </p>
        </Link>
        <Link to="/about">
          <p className="text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            about
          </p>
        </Link>
        <Link to="/service">
          <p className="text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            service
          </p>
        </Link>
        <Link to="/">
          <p className="text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            page
          </p>
        </Link>
        <Link to="/">
          <p className="text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            blog
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            contact
          </p>
        </Link>
      </div>
      <div className="items-center md:hidden xl:flex">
        <div className="flex">
          <div className="bg-white p-3 rounded-full flex items-center justify-center">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                fill="#0f4ef0"
              />
            </svg>
          </div>
          <div className="ml-5">
            <p className="font-rubik_regular text-black/50 text-sm">
              Quick Call
            </p>
            <p className="font-rubik_regular mt-[0.15rem]">(904) 12-366-25</p>
          </div>
        </div>
        <div className="ml-10 px-8 py-3 rounded-3xl bg-primary hover:bg-blue-gray-600 transition duration-300 cursor-pointer">
          <p className="capitalize text-white font-rubik_regular tracking-wider">
            get started
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebNav;
