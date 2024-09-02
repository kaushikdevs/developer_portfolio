import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "../style/style.css";
import Footer from "../Component/Footer";
import About from "../Component/HomeCompo/about";
import Service from "../Component/HomeCompo/service";
import Portfolio from "../Component/HomeCompo/portfolio";
import News from "../Component/HomeCompo/news";
import Contact from "../Component/HomeCompo/contact";
import ramdev from "../Assets/client/ramdev.png";
import Client from "../Component/HomeCompo/client";
import kaushik from "../Assets/kaushik.jpg";
import Navigation from "../Component/navigation";

interface HomeInterface {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const Home: React.FC<HomeInterface> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navigation
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="w-full h-auto bg-background">
        {/* home page */}
        <div className="w-full lg:h-[90vh] lg:flex items-center justify-around pt-8 md:px-24 2xl:px-36 lg:ml-0 lg:pt-0 md:pb-8 lg:pb-0">
          <div>
            <div className="mb-20">
              <text className="block text-dark_white uppercase tracking-widest font-medium mb-6 text-center md:text-left">
                welcome to my world
              </text>
              <p className="text-white text-2xl md:text-5xl 2xl:text-6xl font-medium mb-4 text-center md:text-left">
                Hi, I'm Kaushik Hirpara
              </p>
              <section className="animation -my-3 md:my-2 md:block flex flex-col items-center">
                <div className="text-primary_pink md:text-4xl  2xl:text-5xl font-medium">
                  <div>MERN Stack Developer.</div>
                </div>
                <div className="text-primary_pink md:text-4xl  2xl:text-5xl font-medium">
                  <div>{`JS Developer (All Framework).`}</div>
                </div>
                <div className="text-primary_pink md:text-4xl  2xl:text-5xl font-medium">
                  <div>UI/UX Designer.</div>
                </div>
              </section>
              {/* <p className="text-primary_pink text-5xl font-medium mb-6">MERN Stack Developer</p> */}
              <p className="text-white text-2xl md:text-5xl 2xl:text-6xl font-medium text-center md:text-left">
                based in India.
              </p>
            </div>
          </div>
          {/* <div>
          <h1 className="whitespace-nowrap">
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              k
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              a
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              u
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              s
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              h
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              i
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              k
            </span>
            <br />
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              c
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              o
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              d
            </span>
            <span className="text-primary_pink text-5xl md:text-7xl 2xl:text-8xl">
              e
            </span>
          </h1>
        </div> */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src={kaushik}
              alt="kaushik"
              className="w-64 h-64 lg:w-96 lg:h-96 object-cover outline-dashed p-2 outline-primary_gold/40 rounded-full shadow-2xl mx-auto lg:mx-0 shadow-gray-800"
            />
          </motion.div>
        </div>
        <About />
        <Service />
        <Portfolio />
        <News />
        {/* <Client /> */}
        <Contact />
        <div className="bg-background">
          <Footer
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
