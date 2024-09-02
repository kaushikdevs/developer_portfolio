import {} from "react";
import MainHeader from "../../component/heade/navigation/mainHeader";
import mainImg from "../../assets/images/p4.jpeg";
import person from "../../assets/images/p3.png";
import award from "../../assets/images/award.png";
import support from "../../assets/icons/support.png";
import tech from "../../assets/icons/teach.png";
import coding from "../../assets/icons/coding.png";
import creativity from "../../assets/icons/creativity.png";
import process from "../../assets/icons/process.png";
import customer from "../../assets/icons/customer.png";
import arrow from "../../assets/icons/arrowss.png";
import arrowDown from "../../assets/icons/arrowdown.png";
import Footer from "../../component/footer";
import services from "../../assets/images/service.png";
import { serviceData } from "../../data/service";
import Team from "../../component/home/team";

const About = () => {
  return (
    <>
      <div className="w-screen h-auto bg-white mb-24">
        <MainHeader title="about US" type="about US" />
        <div className="w-screen xl:flex items-center justify-center mt-24 md:mb-40 px-5">
          <div className="relative lg:grid lg:place-items-center xl:block">
            <img
              src={mainImg}
              alt="poster"
              className="md:w-[36rem] md:h-[30rem] object-cover rounded-xl overflow-hidden"
            />
            <img
              src={person}
              alt="person"
              className="absolute md:left-96 lg:left-[35rem] xl:left-64 2xl:left-96 md:-right-32 md:-bottom-16 -bottom-14 left-16 w-64 h-64 md:w-[19rem] md:h-96 xl:h-[18rem] xl:w-[15rem] 2xl:w-[19rem] 2xl:h-96 object-cover rounded-2xl overflow-hidden"
            />
            <div className="w-64 hidden md:flex items-center justify-center p-5 bg-primary rounded-2xl absolute -bottom-10 left-8 lg:left-64 xl:left-8 border-[9px] border-white shadow-md ">
              <img src={award} alt="" />
              <div className="ml-3">
                <p className="text-3xl text-white font-rubik_medium tracking-wide">
                  100+
                </p>
                <p className="text-white font-rubik_regular text-sm mt-1">
                  Awards We Won
                </p>
              </div>
            </div>
          </div>
          <div className="md:ml-8 xl:ml-48 mt-24 md:mt-32 xl:mt-0 md:grid md:place-items-center lg:block">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary border-[1px] rounded-sm" />
              <p className="ml-3 md:ml-5 uppercase font-rubik_regular text-black tracking-wide text-sm md:text-base">
                welcome to our company
              </p>
            </div>
            <p className="text-5xl xl:w-[38rem] md:mx-10 lg:mx-0 font-rubik_medium tracking-wide leading-tight mt-3">
              We provide perfect it solutions & technology for any startups.
            </p>
            <p className=" font-rubik_regular xl:w-[35rem] md:mx-10 lg:mx-0 tracking-wide leading-normal mt-8 text-black/50">
              An IT solution service company may serve clients from various
              industries such as healthcare, finance, education, and
              manufacturing. They may work on a project basis, providing
              services for a specific project or on a long-term basis...
            </p>
            <div className="flex flex-col md:flex-row items-center mt-14">
              <div className="flex md:flex-row flex-col items-center mb-8 md:mb-0">
                <img
                  src={tech}
                  alt=""
                  className="w-14 h-14 md:w-auto md:h-auto"
                />
                <p className="ml-5 md:text-xl xl:w-32 font-rubik_regular leading-relaxed mt-2 md:mt-0">
                  Provide Skills Services
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center md:ml-8 lg:ml-16 xl:ml-8">
                <img
                  src={support}
                  alt=""
                  className="w-14 h-14 md:w-auto md:h-auto"
                />
                <p className="ml-5 md:text-xl xl:w-40 font-rubik_regular leading-relaxed mt-2 md:mt-0">
                  Urgent Support For Clients
                </p>
              </div>
            </div>
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
        <div className="xl:w-[80rem] mx-auto my-20 lg:my-28 border-[1px] border-black/10" />
        <div className="pt-24 md:pt-0 lg:pt-0">
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
            <p className="mx-8 font-rubik_regular tracking-wider uppercase">
              WORKING CYCLE
            </p>
            <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
          </div>
          <p className="text-5xl font-rubik_medium text-black tracking-wide capitalize my-8 text-center leading-tight md:leading-normal">
            Our Working Cycle
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center mx-96">
            <div className="flex flex-col items-center group">
              <div className="relative p-5 bg-white shadow-xl rounded-full w-28 h-28 flex items-center justify-center group-hover:bg-primary/30 transition duration-500">
                <img src={creativity} alt="" className="w-12 h-12" />
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center absolute top-0 right-0 border-[5px] border-white">
                  <p className="font-rubik_bold text-white">1</p>
                </div>
              </div>
              <p className="text-center font-rubik_medium text-black text-2xl mt-10">
                Project Discussion
              </p>
              <p className="mt-4 text-center w-80 font-rubik_regular text-black/80 tracking-wide leading-relaxed">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </p>
            </div>
            <img
              src={arrow}
              alt=""
              className="mb-24 rotate-45 hidden lg:block"
            />
            <div className="flex flex-col items-center mt-12 md:mt-0 lg:mt-24 group">
              <div className="relative p-5 bg-white shadow-xl rounded-full w-28 h-28 flex items-center justify-center group-hover:bg-primary/30 transition duration-500">
                <img src={coding} alt="" className="w-12 h-12" />
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center absolute top-0 right-0 border-[5px] border-white">
                  <p className="font-rubik_bold text-white">2</p>
                </div>
              </div>
              <p className="text-center font-rubik_medium text-black text-2xl mt-10">
                Testing & Trying
              </p>
              <p className="mt-4 text-center w-80 font-rubik_regular text-black/80 tracking-wide">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </p>
            </div>
            <img
              src={arrowDown}
              alt=""
              className="-rotate-45 hidden lg:block"
            />
            <div className="flex flex-col items-center mt-12 md:mt-10 lg:mt-0 group">
              <div className="relative p-5 bg-white shadow-xl rounded-full w-28 h-28 flex items-center justify-center group-hover:bg-primary/30 transition duration-500">
                <img src={process} alt="" className="w-12 h-12" />
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center absolute top-0 right-0 border-[5px] border-white">
                  <p className="font-rubik_bold text-white">3</p>
                </div>
              </div>
              <p className="text-center font-rubik_medium text-black text-2xl mt-10">
                Execute & install
              </p>
              <p className="mt-4 text-center w-80 font-rubik_regular text-black/80 tracking-wide">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </p>
            </div>
            <img
              src={arrow}
              alt=""
              className="mb-24 rotate-45 hidden lg:block"
            />
            <div className="flex flex-col items-center mt-12 md:mt-10 lg:mt-24 group">
              <div className="relative p-5 bg-white shadow-xl rounded-full w-28 h-28 flex items-center justify-center group-hover:bg-primary/30 transition duration-500">
                <img src={customer} alt="" className="w-12 h-12" />
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center absolute top-0 right-0 border-[5px] border-white">
                  <p className="font-rubik_bold text-white">4</p>
                </div>
              </div>
              <p className="text-center font-rubik_medium text-black text-2xl mt-10">
                We Care About
              </p>
              <p className="mt-4 text-center w-80 font-rubik_regular text-black/80 tracking-wide">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:flex items-center justify-center mx-5 md:mx-24 lg:mx-10 my-36">
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
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default About;
