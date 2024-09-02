import {} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="xl:flex items-center justify-around xl:h-14 py-3 xl:py-0 border-b-[1px]">
      <div>
        <p className="font-rubik_regular text-black text-center">
          Mon-Fri: 8:00 AM - 6:30 PM
        </p>
      </div>
      <div className="md:flex items-center justify-center text-center">
        <Link to="/">
          <span className="text-sm capitalize font-rubik_regular text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            all services
          </span>
        </Link>
        <Link to="/" className="mx-7">
          <span className="text-sm capitalize font-rubik_regular text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            careers
          </span>
        </Link>
        <Link to="/">
          <span className="text-sm capitalize font-rubik_regular text-black tracking-wider hover:text-primary duration-300 cursor-pointer">
            news
          </span>
        </Link>
        <div className="flex items-center justify-center md:ml-10">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.048"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="style=stroke">
                {" "}
                <g id="email">
                  {" "}
                  <path
                    id="vector (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.88534 5.2371C3.20538 5.86848 2.75 6.89295 2.75 8.5V15.5C2.75 17.107 3.20538 18.1315 3.88534 18.7629C4.57535 19.4036 5.61497 19.75 7 19.75H17C18.385 19.75 19.4246 19.4036 20.1147 18.7629C20.7946 18.1315 21.25 17.107 21.25 15.5V8.5C21.25 6.89295 20.7946 5.86848 20.1147 5.2371C19.4246 4.59637 18.385 4.25 17 4.25H7C5.61497 4.25 4.57535 4.59637 3.88534 5.2371ZM2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="vector (Stroke)_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z"
                    fill="#000000"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="ml-2 text-black font-rubik_regular">media@tronix.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
