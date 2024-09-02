import {} from "react";
import footer from "../assets/images/footer.jpg";
import { Link } from "react-router-dom";
import { blogData } from "../data/service";

const Footer = () => {
  return (
    <div className="w-screen relative">
      <img
        src={footer}
        alt=""
        className="w-screen h-[100rem] md:h-[75rem] xl:h-[45rem] object-cover rotate-180"
      />
      <div className="w-screen h-[100rem] md:h-[75rem] xl:h-[45rem] bg-black/80 absolute top-0" />
      <div className="absolute top-0 w-screen h-[100rem] md:h-[75rem] xl:h-[45rem] flex flex-col items-center justify-center">
        <div className="md:flex flex-wrap justify-center ml-5 md:ml-0 mt-5 md:mt-0">
          <div className="md:w-[30%]">
            <p className="font-rubik_medium text-white capitalize text-xl">
              about us
            </p>
            <p className="font-rubik_regular text-white/40 w-[80%] mt-6">
              An IT consultancy can help you assess your technology needs and
              develop a technology strategy that aligns with your business
            </p>
            <div className="flex items-center mt-5">
              <div className="p-2 bg-primary/20 rounded-full mr-3">
                <svg
                  fill="#fff"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </g>
                </svg>
              </div>
              <div className="p-2 bg-primary/20 rounded-full mr-3">
                <svg
                  fill="#fff"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </g>
                </svg>
              </div>
              <div className="p-2 bg-primary/20 rounded-full mr-3">
                <svg
                  fill="#fff"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </g>
                </svg>
              </div>
              <div className="p-2 bg-primary/20 rounded-full mr-3">
                <svg
                  fill="#fff"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="mr-24 mt-5 md:mt-0">
            <p className="font-rubik_medium text-white capitalize text-xl">
              link
            </p>
            <div className="mt-6">
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  about us
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Our Mission
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Meet The Teams
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Our Projects
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
          <div className="mr-24 mt-5 md:mt-0">
            <p className="font-rubik_medium text-white capitalize text-xl">
              explore
            </p>
            <div className="mt-6">
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  What we Offer
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Offer
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Our Story
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Latest Posts
                </span>
              </Link>
              <Link to="/" className="block mb-3">
                <span className="text-white/40 font-rubik_regular capitalize">
                  Help Center
                </span>
              </Link>
            </div>
          </div>
          <div className="md:mt-10 xl:mt-0">
            <p className="font-rubik_medium text-white capitalize text-xl">
              recent posts
            </p>
            <div className="flex flex-col mt-6">
              {blogData.map((item, index) => {
                return (
                  <div key={index} className="flex mb-5">
                    <img
                      src={item.image}
                      alt=""
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div className="ml-5">
                      <div className="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
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
                              d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                              stroke="#FFF"
                              stroke-width="2"
                              stroke-linecap="round"
                            ></path>{" "}
                            <rect
                              x="6"
                              y="12"
                              width="3"
                              height="3"
                              rx="0.5"
                              fill="#FFF"
                            ></rect>{" "}
                            <rect
                              x="10.5"
                              y="12"
                              width="3"
                              height="3"
                              rx="0.5"
                              fill="#FFF"
                            ></rect>{" "}
                            <rect
                              x="15"
                              y="12"
                              width="3"
                              height="3"
                              rx="0.5"
                              fill="#FFF"
                            ></rect>{" "}
                          </g>
                        </svg>
                        <p className="font-rubik_regular text-white/90 text-sm ml-3">
                          {item.date}
                        </p>
                      </div>
                      <p className="w-[80%] line-clamp-1 font-rubik_regular text-white mt-2">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
        <div className="border-t-2 w-screen border-t-white/30 mt-20" />
        <div className="md:flex flex-wrap items-center ml-5 lg:ml-0">
          <div className="flex items-center xl:border-r-2 h-40 xl:border-r-white/30">
            <div className="p-5 rounded-full bg-primary/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
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
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-6">
              <p className="font-rubik_medium text-white tracking-wide mb-2">
                Location
              </p>
              <p className="font-rubik_regular text-white/50 tracking-wide w-[80%]">
                258 Daniel Mansion 258 Berlin Germany
              </p>
            </div>
          </div>
          <div className="flex items-center xl:px-24 h-40 ">
            <div className="p-5 rounded-full bg-primary/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
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
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 6V12"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M16.24 16.24L12 12"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-6">
              <p className="font-rubik_medium text-white tracking-wide mb-2">
                Working Hours
              </p>
              <p className="font-rubik_regular text-white/50 tracking-wide">
                Weekdays 8am-22pm
              </p>
              <p className="font-rubik_regular text-white/50 tracking-wide">
                Weekend 10am -12pm
              </p>
            </div>
          </div>
          <div className="flex items-center xl:border-l-2 md:pl-5 h-40 xl:border-l-white/30">
            <div className="p-5 rounded-full bg-primary/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                    fill="#fff"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="ml-6">
              <p className="font-rubik_medium text-white tracking-wide mb-2">
                Contact Us
              </p>
              <p className="font-rubik_regular text-white/50 tracking-wide">
                tronixinfo@tronix.com
              </p>
              <p className="font-rubik_regular text-white/50 tracking-wide">
                (+259)2257 6156
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-t-white/30 w-screen md:block hidden" />
        <p className="font-rubik_medium text-white tracking-wide mt-5 md:mt-24">
          Copyright © 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
