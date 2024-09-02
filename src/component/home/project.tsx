import left from "../../assets/icons/left.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { project } from "../../data/service";

const Project = () => {
  return (
    <div className="w-screen h-auto mt-16 mb-24">
      <div className="lg:flex items-center justify-around mx-5 lg:mx-0">
        <div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
            <p className="mx-8 font-rubik_regular tracking-wider uppercase">
              QUICK PROJECTS
            </p>
            <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
          </div>
          <p className="text-[2.75rem] md:text-5xl font-rubik_medium text-black tracking-wide capitalize my-8">
            Our Successful Projects
          </p>
        </div>
        <div className="flex items-center lg:justify-center mt-6">
          <div className="bg-primary mr-5 px-5 py-2 rounded-full cursor-pointer">
            <img src={left} alt="" className="w-6 h-6" />
          </div>
          <div className="bg-primary mr-5 px-5 py-2 rounded-full cursor-pointer">
            <img src={left} alt="" className="rotate-180 w-6 h-6 " />
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        modules={[EffectFade]}
        className="h-auto mx-5 mt-10"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {project.map((item, index) => {
          return (
            <SwiperSlide key={index} className="relative group">
              <img
                src={item.img}
                alt=""
                className="w-full h-[31rem] rounded-xl object-cover"
              />
              <div className="w-full h-[31rem] absolute top-0 hidden group-hover:flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="w-[80%] h-[25rem] bg-primary/50 rounded-xl flex flex-col justify-end p-8">
                  <p className="uppercase font-rubik_medium text-white tracking-wider text-xs cursor-pointer transition ease-in-out hover:-translate-y-1 over:scale-110 duration-300">
                    {item.type}
                  </p>
                  <p className="capitalize mt-1 text-xl text-white font-rubik_medium tracking-wider cursor-pointer transition ease-in hover:translate-y-1 hover:scale-110 duration-300">
                    {item.project}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Project;
