import {} from "react";
import { service, serviceData } from "../../data/service";
import person_2 from "../../assets/images/p2.png";
import person_3 from "../../assets/images/p3.png";
import consultation from "../../assets/images/banner.jpeg";
import services from "../../assets/images/service.png";

const ServiceComponent = () => {
  return (
    <div className="w-screen h-auto mt-10">
      <div className="flex items-center justify-center">
        <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
        <p className="mx-8 font-rubik_regular tracking-wider uppercase">
          our services
        </p>
        <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
      </div>
      <p className="text-5xl font-rubik_medium text-black tracking-wide capitalize my-8 text-center leading-tight md:leading-normal">
        service we provide
      </p>
      <div className="flex items-center justify-center">
        <p className="font-rubik_regular text-center text-black/50 md:w-[35rem] mx-5 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi obortis
          ligula euismod sededesty am augue nisl.
        </p>
      </div>
      <div className="md:flex flex-wrap items-center justify-center py-10 xl:py-16">
        {service.map((item, index) => {
          return (
            <div key={index} className="group mt-8 xl:mt-0 md:w-[20rem] lg:w-[29rem] lg:h-96 xl:h-auto xl:w-[18rem] border-[1px] border-primary/20 rounded-xl p-8 mx-4 md:mx-3 xl:mx-2 cursor-pointer hover:shadow-xl hover:bg-white/30 transition-all duration-500">
              <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                <img
                  src={item.image}
                  alt="img"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="mt-10 text-[1.55rem] font-rubik_medium text-black/80 capitalize group-hover:text-primary/90 transition duration-300">
                {item.name}
              </p>
              <p className="mt-5 font-rubik_regular text-black/50">
                {item.discription}
              </p>
              <svg
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mt-5 ml-2 group-hover:rotate-45 transition-all duration-300"
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
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#000000"
                    stroke-width="1.056"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          );
        })}
      </div>
      <div className="xl:flex items-center justify-center mt-10 md:mx-24 lg:mx-5 xl:mx-0">
        <div className="mr-14 mx-5 xl:mx-0">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary border-[1px] rounded-sm" />
            <p className="ml-5 uppercase font-rubik_regular text-black tracking-wide">
              welcome to our company
            </p>
          </div>
          <p className="xl:w-[30rem] text-4xl sm:text-[2.50rem] md:text-4xl font-rubik_medium tracking-wide leading-snug md:leading-relaxed lg:leading-snug my-5">
            We Are Increasing Business Success With Technology
          </p>
          <p className="xl:w-[35rem] text-sm sm:text-base font-rubik_regular leading-relaxed text-black/50">
            An IT solution service company may serve clients from various
            industries such as healthcare, finance, education, and
            manufacturing. They may work on a project basis, providing services
            for a specific project or on a long-term basis...
          </p>
          <div className="mt-5 ml-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-black mr-5" />
              <p className="md:text-lg font-rubik_regular text-black/80 tracking-wide">
                Amazing communication.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-black mr-5" />
              <p className="md:text-lg font-rubik_regular text-black/80 tracking-wide my-1">
                Best trending designing experience
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-black mr-5" />
              <p className="md:text-lg font-rubik_regular text-black/80 tracking-wide">
                Email & Live chat..
              </p>
            </div>
          </div>
          <div className="px-8 mt-10 w-48 py-4 flex items-center justify-center rounded-full bg-primary hover:bg-blue-gray-600 transition duration-300 cursor-pointer">
            <p className="capitalize text-white font-rubik_regular tracking-wider">
              Discover More
            </p>
          </div>
        </div>
        <div className="xl:ml-16 mx-5 mt-10 md:mt-16 lg:mt-0 md:mx-0 md:flex items-center justify-center xl:block">
          <div className="relative">
            <img src={person_2} alt="" />
            <img
              src={person_3}
              alt=""
              className="absolute bottom-0 rounded-3xl border-t-[6px] border-r-[6px] w-56 h-56 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative w-screen my-36">
        <img
          src={consultation}
          alt=""
          className="w-screen h-[25rem] md:h-[21rem] object-cover"
        />
        <div className="w-screen h-[25rem] md:h-[21rem] bg-black/70 absolute top-0" />
        <div className="w-screen h-[25rem] md:h-[21rem] absolute top-0 flex flex-col md:flex-row md:items-center justify-around">
          <div className="mx-5 md:mx-0">
            <p className="font-rubik_medium tracking-wider text-xs md:text-sm text-white">
              WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
            </p>
            <p className="font-rubik_medium text-5xl text-white mt-8 leading-tight">
              Need A Consultation?
            </p>
          </div>
          <div className="-mt-16 md:-mt-16">
            <div className="mx-5 md:mx-0 px-8 mt-5 w-48 py-4 md:flex items-center justify-center rounded-full bg-primary hover:bg-blue-gray-600 transition duration-300 cursor-pointer">
              <p className="capitalize text-white font-rubik_regular">
                Let’s Get Started
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:flex items-center justify-center mx-5 md:mx-24 lg:mx-10">
        <div className="">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary border-[1px] rounded-sm" />
            <p className="ml-5 uppercase font-rubik_regular text-black tracking-wide">
              welcome to our company
            </p>
          </div>
          <p className="xl:w-[30rem] text-[2.50rem] lg:text-4xl font-rubik_medium tracking-wide leading-snug my-5">
            We Make Awesome IT Services For Your Newly Business
          </p>
          <div className="sm:flex items-center mt-12">
            <div className="px-8 w-54 py-4 flex items-center justify-center rounded-full bg-primary hover:bg-blue-gray-600 transition duration-300 cursor-pointer">
              <p className="capitalize text-white font-rubik_regular tracking-wider">
                Start A Projects
              </p>
            </div>
            <div className="ml-16 lg:mt-0">
              <p className="font-rubik_medium text-lg text-primary tracking-wide">
                Call Us: 258-3258 235
              </p>
              <p className="text-black/50 font-rubik_regular mt-1">
                For any question
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-20 mt-10 md:mt-16 xl:mt-0">
          <img src={services} alt="" />
        </div>
      </div>
      <div className="xl:w-[80rem] mx-auto my-20 lg:my-28 border-[1px] border-black/10" />
      <div className="md:flex flex-row lg:flex-row flex-wrap items-center justify-center grid">
        {serviceData.map((item, index) => {
          return (
            <div
              key={index}
              className="md:mx-16 md:mt-16 lg:mx-16 xl:mx-12 flex items-center mt-5 lg:mt-5"
            >
              <div className="p-5 bg-primary rounded-full">
                <img src={item.image} alt="" className="w-12 h-12" />
              </div>
              <div className="ml-8">
                <p className="text-[2.7rem] font-rubik_medium text-black">
                  {item.count}&nbsp;+
                </p>
                <p className="uppercase font-rubik_regular text-black/50 mt-2 text-sm tracking-wider">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceComponent;
