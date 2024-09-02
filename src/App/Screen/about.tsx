import React from "react";
import kaushik from "../Assets/kaushik.jpg";
import TextGradiant from "../Animation/textGradiant";
import About from "../Component/HomeCompo/about";
import Footer from "../Component/Footer";
import Navigation from "../Component/navigation";

interface AboutUSInterface {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const AboutUS: React.FC<AboutUSInterface> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <>
      <Navigation
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="w-full h-auto">
        <div className="w-full h-52 lg:h-52 bg-background flex flex-col items-center justify-center">
          <TextGradiant
            text="about us"
            style={"text-center text-5xl lg:text-6xl"}
          />
          <text className="block text-white text-center mt-5 capitalize text-lg">
            home / <text className="text-primary_pink">about us</text>
          </text>
        </div>
        <div className="px-5 lg:mx-0 pt-8 lg:py-16 lg:flex justify-center bg-background">
          <div className="flex items-center justify-center lg:block">
            <img
              src={kaushik}
              alt="kaushik"
              className="w-64 h-64 lg:w-96 lg:h-96 object-cover outline-dashed p-2 outline-primary_gold/40 rounded-full shadow-2xl"
            />
          </div>
          <div className="lg:w-[45rem] lg:ml-24 mt-10 lg:mt-5 lg:indent-10 indent-5 break-all lg:break-normal ">
            <text className="block leading-relaxed text-lg text-left text-text_color">
              I am a software developer who is passionate about crafting
              creative and effective solutions. Thanks to my extensive
              experience with programming languages like Python, Java, and
              Javascript, I have gained a profound understanding of software
              development principles and best practices. I derive satisfaction
              from tackling complex projects that demand problem-solving
              abilities and meticulous attention to detail.
            </text>
            <div className="mt-5">
              <text className="leading-relaxed text-lg text-left text-text_color mt-8">
                Over the course of my career, I have accumulated expertise in
                diverse aspects of software development, encompassing both
                front-end and back-end development, database management, and
                quality assurance testing. I maintain a perpetual enthusiasm for
                learning and keeping abreast of the most current technologies
                and industry trends. During my leisure time, I find
                gratification in exploring novel coding methodologies and making
                contributions to open-source initiatives. In my capacity as a
                software developer, my constant endeavor is to enhance my skill
                set continuously and deliver software of exceptional quality
                that surpasses expectations.
              </text>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-8 lg:-mt-5 pt-5 px-5 py-5 bg-background">
          <div className="w-[80rem] indent-10">
            <text className="leading-relaxed text-lg text-left text-text_color mt-8 break-all lg:break-normal">
              In addition to my technical skills, I highly prioritize effective
              communication and collaboration, recognizing their indispensable
              roles in achieving successful project outcomes. To me, being a
              software developer isn't merely a job; it's a rewarding voyage
              where I have the opportunity for perpetual learning, personal
              growth, and the chance to create a meaningful impact through my
              contributions.
            </text>
          </div>
        </div>
        <About />
        <Footer
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default AboutUS;
