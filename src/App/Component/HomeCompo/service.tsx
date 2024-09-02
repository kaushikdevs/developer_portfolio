import React from "react";
import TextGradiant from "../../Animation/textGradiant";
import business from "../../Assets/business-people.png";
import backend from "../../Assets/backend.png";
import cloud from "../../Assets/cloud.png";
import devops from "../../Assets/devops.png";
import mobileDev from "../../Assets/mobile-development.png";
import stats from "../../Assets/stats.png";

const service = [
  {
    image: stats,
    head: "business stratagy",
    dicription:
      "I can provide guidance on creating a business-level strategy to help your business grow and on maintaining your most valuable products.",
  },
  {
    image: business,
    head: "development adviser",
    dicription:
      "I will explain how to develop your dream product and how to position it in the market. I will provide comprehensive advice, guiding you from zero to one hundred.",
  },
  {
    image: cloud,
    head: "hosting service & adviser",
    dicription:
      "I will provide comprehensive information about hosting your valuable product, and I will suggest the best option for you.",
  },
  {
    image: devops,
    head: "website development",
    dicription:
      "What I do is provide the best website development for an optimal user experience, ensuring full user-friendliness, responsiveness, clean code, and unique formats.",
  },
  {
    image: mobileDev,
    head: "app development",
    dicription:
      "I specialize in cross-platform mobile app development, aiming for the best user experience, full user-friendliness, responsiveness, clean code, and unique formats.",
  },
  {
    image: backend,
    head: "backend development",
    dicription:
      "I specialize in using the most trending backend technologies and providing very clean, readable, and reusable code.",
  },
];

const Service = () => {
  return (
    <div className="w-full py-10">
      <TextGradiant text="my awesome service" style={"mx-5 text-center"} />
      <div className="sm:w-[30rem] xl:w-[38rem] m-auto">
        <text className="block text-text_color leading-relaxed text-center mx-5 my-4">
          I provide a wide range of services with the best performance and
          lifetime maintenance responsibility for your important products.
          Please check them below.
        </text>
      </div>
      <div className="grid sm:flex justify-center">
        <div className="sm:flex items-center justify-center flex-wrap w-full 2xl:w-[80vw]">
          {service.map((item, index) => {
            return (
              <div className="cursor-pointer w-64 lg:w-96 xl:w-[26rem] h-74 lg:h-[17.2rem] rounded-lg bg-gradient-to-r xl:bg-black  from-primary_gold xl:from-background_second xl:to-background_second to-primary_pink mb-5 p-5 sm:mx-3 lg:mx-5 lg:my-5 xl:hover:from-primary_gold xl:hover:to-primary_pink transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-105 duration-300">
                <img src={item.image} alt="img" className="w-16 h-16" />
                <div className="my-5">
                  <text className="text-white capitalize text-xl tracking-wide font-bold">
                    {item.head}
                  </text>
                </div>
                <text className="text-white/70 font-light">
                  {item.dicription}
                </text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
