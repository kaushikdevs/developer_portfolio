import poster from "../../assets/images/testiPoster.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import left from "../../assets/icons/left.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { testiData } from "../../data/testimonial";
import { EffectFade } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="relative w-screen my-24">
      <img src={poster} alt="" className="w-screen h-[45rem] object-cover" />
      <div className="w-screen h-[45rem] bg-black/50 absolute top-0" />
      <div className="absolute top-0 w-screen h-[45rem] md:flex flex-col items-start justify-center px-5 py-12 md:py-0 xl:px-64">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary rounded-sm" />
          <p className="ml-4 uppercase font-rubik_regular text-white tracking-wide">
            CLIENT TESTIMONIAL
          </p>
        </div>
        <div className="md:flex items-center justify-between w-full">
          <div>
            <p className="mt-6 text-[2.70rem] md:text-5xl font-rubik_medium text-white">
              About Customer Stories
            </p>
          </div>
          <div className="flex items-center md:justify-center mt-6">
            <img src={left} alt="" className="mr-5 w-12 h-12 cursor-pointer" />
            <img
              src={left}
              alt=""
              className="rotate-180 w-12 h-12 cursor-pointer"
            />
          </div>
        </div>
        <Swiper
          modules={[EffectFade]}
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
          }}
          className="w-[100%] h-auto mx-0 mt-5 md:mt-10"
        >
          {testiData.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[30rem] h-auto border-[1px] rounded-2xl border-white bg-brown-50/20 overflow-hidden"
              >
                <div className="h-42 p-5 bg-white/20">
                  <p className="font-rubik_regular tracking-wide leading-snug text-white/70 text-sm md:text-base xl:text-lg indent-5">
                    "{item.message}"
                  </p>
                </div>
                <div className="p-5 flex items-center">
                  <img
                    src={item.profile}
                    alt="profile"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div className="ml-5">
                    <p className="capitalize font-rubik_medium text-black text-xl tracking-wider mb-1">
                      {item.name}
                    </p>
                    <p className="capitalize font-rubik_regular text-light-blue-700 tracking-wide text-sm">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
