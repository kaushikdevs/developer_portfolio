import {} from "react";
import MainHeader from "../../component/heade/navigation/mainHeader";
import { service } from "../../data/service";
import Footer from "../../component/footer";

const Service = () => {
  return (
    <>
      <div className="w-screen h-auto bg-white mb-24">
        <MainHeader title="service" type="service" />
        <div className="md:flex flex-wrap items-center justify-center py-10 xl:py-8">
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="group mt-8 xl:mt-0 md:w-[20rem] lg:w-[29rem] lg:h-96 xl:h-auto xl:w-[18rem] border-[1px] border-primary/20 rounded-xl p-8 mx-4 md:mx-3 xl:mx-2 cursor-pointer hover:shadow-xl hover:bg-white/30 transition-all duration-500"
              >
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
        <div className="md:flex flex-wrap items-center justify-center">
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="group mt-8 xl:mt-0 md:w-[20rem] lg:w-[29rem] lg:h-96 xl:h-auto xl:w-[18rem] border-[1px] border-primary/20 rounded-xl p-8 mx-4 md:mx-3 xl:mx-2 cursor-pointer hover:shadow-xl hover:bg-white/30 transition-all duration-500"
              >
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
      </div>
      <Footer />
    </>
  );
};

export default Service;
