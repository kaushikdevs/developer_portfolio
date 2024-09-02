import React from "react";
import { Drawer } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="flex items-center justify-between mx-5 md:mx-24 mt-3 md:mt-6 lg:hidden">
      <div>
        <p className="font-rubik_medium text-black capitalize tracking-wider">
          compnay
        </p>
      </div>
      <div className="p-2 rounded-lg bg-white" onClick={openDrawer}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 6H12H19M5 12H19M5 18H19"
              stroke="#0f4ef0"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>

      <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-end justify-end p-5" onClick={closeDrawer}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#0F0F0F"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center mt-5">
          <Link to="/">
            <p className="mt-8 text-center ml-5 text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
              home
            </p>
          </Link>
          <Link to="/about">
            <p className="mt-8 text-center ml-5 text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
              about
            </p>
          </Link>
          <Link to="/service">
            <p className="mt-8 text-center ml-5 text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
              service
            </p>
          </Link>
          <Link to="/">
            <p className="mt-8 text-center ml-5 text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
              page
            </p>
          </Link>
          <Link to="/">
            <p className="mt-8 text-center ml-5 text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
              blog
            </p>
          </Link>
          <Link to="/contact">
            <p className="mt-8 text-center ml-5 text-lg capitalize font-rubik_medium mr-8 text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
              contact
            </p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
