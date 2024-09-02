import React from "react";
import person1 from "../../assets/images/p1.png";
import "../../screen/home/style.css";

const Home = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="mx-5 md:mx-0 lg:flex items-center justify-center md:my-14 lg:my-10 xl:my-14 mt-8">
      <div className="mr-5 md:ml-24 lg:ml-10 xl:ml-12">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary border-[1px] rounded-sm" />
          <p className="ml-3 md:ml-5 uppercase font-rubik_regular text-black tracking-wide text-sm md:text-base">
            welcome to our company
          </p>
        </div>
        <p className="md:w-[40rem] lg:w-[30rem] xl:w-[45rem] mt-5 capitalize font-rubik_medium text-black text-[2.75rem] sm:text-[3.50rem] sm:leading-tight md:text-6xl lg:text-[3rem] xl:text-6xl leading-tight md:leading-tight tracking-wide">
          clear thinking makes{" "}
          <span className="text-primary">bright future!</span>
        </p>
        <p className="md:w-[40rem] lg:w-[30rem] xl:w-[45rem] mt-5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-rubik_regular text-black/50">
          The website design should be user-friendly, easy to navigate, and
          aesthetically pleasing. It should be optimized for fast loading times,
          and the layout should be consistent across all pages.
        </p>
        <div className="sm:flex items-center mt-8 md:mt-12">
          <div className="px-8 py-4 rounded-full bg-primary mr-12 text-white hover:bg-white hover:text-primary transition duration-300 cursor-pointer">
            <p className="font-rubik_regular capitalize text-center tracking-wide">
              discover more
            </p>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <div className="wrapper">
              <div className="video-main">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                <div
                  className="video video-popup mfp-iframe flex items-center justify-center cursor-pointer"
                  data-lity
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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
                        d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                        fill="#FFF"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <p className="ml-10 font-rubik_regular capitalize text-black tracking-wide">
              watch video
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex items-center justify-center xl:block md:ml-5 sm:mt-20 mt-5 md:mt-20 lg:mt-0 md:mr-10 xl:mr-12">
        <img src={person1} alt="person" />
      </div>
    </div>
  );
};

export default Home;
