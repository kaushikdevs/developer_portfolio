import {} from "react";
import { blogData } from "../../data/service";

const Blog = () => {
  return (
    <div className="w-screen h-auto mt-24">
      <div className="flex items-center justify-center">
        <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
        <p className="mx-8 font-rubik_regular tracking-wider uppercase">
          NEWS POSTS
        </p>
        <div className="w-3 h-3 rounded-sm shadow-2xl bg-primary" />
      </div>
      <p className="text-5xl font-rubik_medium text-black tracking-wide capitalize my-8 text-center">
        Latest Blog Updates
      </p>
      <div className="w-screen md:flex items-center justify-center my-20">
        {blogData.map((item, index) => {
          return (
            <div
              key={index}
              className="group mb-6 md:w-[35rem] h-auto mx-3 rounded-2xl border-[1px] border-primary/10 overflow-hidden cursor-pointer"
            >
              <div className="w-[35rem] h-[20rem] overflow-hidden">
                <img
                  src={item.image}
                  alt="post image"
                  className="w-[35rem] h-[20rem] object-cover group-hover:opacity-50 group-hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="flex items-center p-8">
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-primary"
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
                        d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                        stroke="#0f4ef0"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>{" "}
                      <rect
                        x="6"
                        y="12"
                        width="3"
                        height="3"
                        rx="0.5"
                        fill="#0f4ef0"
                      ></rect>{" "}
                      <rect
                        x="10.5"
                        y="12"
                        width="3"
                        height="3"
                        rx="0.5"
                        fill="#0f4ef0"
                      ></rect>{" "}
                      <rect
                        x="15"
                        y="12"
                        width="3"
                        height="3"
                        rx="0.5"
                        fill="#0f4ef0"
                      ></rect>{" "}
                    </g>
                  </svg>
                  <p className="ml-2 font-rubik_regular text-black/50">
                    {item.date}
                  </p>
                </div>
                <div className="flex items-center ml-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 5C1 3.34315 2.34315 2 4 2H8.55848C9.84977 2 10.9962 2.82629 11.4045 4.05132L11.7208 5H20C21.1046 5 22 5.89543 22 7V9.00961C23.1475 9.12163 23.9808 10.196 23.7695 11.3578L22.1332 20.3578C21.9603 21.3087 21.132 22 20.1654 22H3C1.89543 22 1 21.1046 1 20V5ZM20 9V7H11.7208C10.8599 7 10.0956 6.44914 9.82339 5.63246L9.50716 4.68377C9.37105 4.27543 8.98891 4 8.55848 4H4C3.44772 4 3 4.44772 3 5V12.2709L3.35429 10.588C3.54913 9.66249 4.36562 9 5.31139 9H20ZM3.36634 20C3.41777 19.9109 3.4562 19.8122 3.47855 19.706L5.31139 11L21 11H21.8018L20.1654 20L3.36634 20Z"
                        fill="#0f4ef0"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p className="ml-2 font-rubik_regular text-black/50 cursor-pointer hover:text-primary transition duration-300">
                    {item.type}
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <p className="text-2xl lg:text-3xl leading-snug font-rubik_medium text-black/90 tracking-wide hover:text-primary transition-all duration-500">
                  {item.title}
                </p>
                <p className="text-sm md:text-base mt-5 text-black/50 font-rubik_regular">
                  {item.dis}
                </p>
                <div className="mt-5 w-36 py-3 rounded-full bg-primary/5 flex items-center justify-center cursor-pointer text-primary hover:text-white hover:bg-black/90 transition duration-500">
                  <p className="capitalize font-rubik_medium  text-sm">
                    read more
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
