import {} from "react";
import posterMan from "../../assets/images/posterMan.png";

const Poster = () => {
  return (
    <div className="xl:w-[87%] xl:h-[35rem] lg:flex items-center justify-between bg-primary/20 m-auto rounded-2xl">
      <div className="lg:w-[43.5%] xl:ml-[14%] md:ml-20 ml-5 pt-10">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
          <p className="mx-4 font-rubik_regular tracking-wider uppercase">
            START WORK WITH US
          </p>
        </div>
        <p className="mt-10 mb-8 font-rubik_medium text-[2.4rem] md:text-5xl text-black/80 xl:w-[80%] leading-snug">
          The Best <span className="text-primary"> IT Service </span> Provider.
        </p>
        <p className="font-rubik_regular text-black/50 w-[80%] lg:w-auto xl:w-[80%] mb-8">
          Managed IT services can help you outsource your IT needs to a
          third-party provider. This includes IT support, network monitoring,
          and maintenance, and disaster recovery and business continuity
          planning.
        </p>
        <div className="w-56 px-8 py-4 rounded-full bg-primary mr-12 text-white hover:bg-white hover:text-primary transition duration-300 cursor-pointer">
          <p className="font-rubik_regular capitalize text-center tracking-wide">
            Let’s Get Started
          </p>
        </div>
      </div>
      <div className="xl:w-[43.5%] relative md:flex items-end justify-end lg:block">
        <img
          src={posterMan}
          alt=""
          className="lg:w-[30rem] lg:h-[33rem] object-contain mt-8 md:mr-10 lg:md-0"
        />
        <div className="flex items-center justify-center bg-primary lg:w-[120%] xl:w-[100%] px-2  py-5 absolute bottom-0 right-0">
          <p className="text-white font-rubik_regular tracking-wide text-sm">
            Fast 24/7 Customer Service{" "}
          </p>
          <div className="border-b-[1px] w-36 mx-2 md:mx-5" />
          <p className="text-white font-rubik_regular tracking-wide text-sm">
            Save time & valuable money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
