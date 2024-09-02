import React from "react";
import Header from "../header";
import Navigation from "../navigation/index";
import SingleWaveLine from "../../waveLine/singleWave";

interface MainHeaderInterface {
  title: string;
  type: string;
}

const MainHeader: React.FC<MainHeaderInterface> = ({ title, type }) => {
  return (
    <div className="bg-gradient-to-r to-primary/10 from-primary/20">
      <div className="2xl:h-56">
        <Header />
        <Navigation />
        <div className="w-screen flex flex-col items-center justify-center pt-8 md:pt-16">
          <p className="capitalize text-black font-rubik_medium text-3xl md:text-5xl tracking-wider">
            {title}
          </p>
          <p className="capitalize text-black/60 text-xs md:text-base mt-3 md:mt-8">
            {`compnay > ${type}`}
          </p>
        </div>
      </div>
      <div className="relative">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 290"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 44.177835051546396,207.28240058910163 88.35567010309279,214.56480117820325 157,208 C 225.6443298969072,201.43519882179675 318.7551546391752,181.02319587628864 378,201 C 437.2448453608248,220.97680412371136 462.6237113402062,281.34241531664213 509,266 C 555.3762886597938,250.65758468335787 622.75,159.60714285714283 690,146 C 757.25,132.39285714285717 824.3762886597939,196.22901325478648 896,196 C 967.6237113402061,195.77098674521352 1043.744845360825,131.4768041237113 1105,139 C 1166.255154639175,146.5231958762887 1212.6443298969073,225.8637702503682 1266,248 C 1319.3556701030927,270.1362297496318 1379.6778350515465,235.0681148748159 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#fff"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
        <div className="bg-transparent absolute -top-10 md:top-0 2xl:top-24">
          <SingleWaveLine />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
