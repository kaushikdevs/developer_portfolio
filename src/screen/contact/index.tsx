import {} from "react";
import MainHeader from "../../component/heade/navigation/mainHeader";
import Footer from "../../component/footer";

const Contact = () => {
  return (
    <>
      <div className="w-screen h-auto bg-white mb-24">
        <MainHeader title="contact" type="contact" />
        <div className="flex items-center justify-around w-[70%] h-64 border-2 rounded-xl m-auto mt-16">
          <div className="flex">
            <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mr-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
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
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#0f4ef0"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <p className="font-rubik_regular text-2xl text-black capitalize tracking-wide mb-3">
                Phone Number
              </p>
              <p className="font-rubik_regular text-black/60 text-base tracking-wide">
                +569 (58) 3259-3256
              </p>
              <p className="font-rubik_regular text-black/60 text-base tracking-wide">
                +569 (58) 3259-3256
              </p>
            </div>
          </div>
          <div className="border-l-2 h-32" />
          <div className="flex">
            <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mr-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
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
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="#0f4ef0"
                    stroke-width="1.152"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#0f4ef0"
                    stroke-width="1.152"
                    stroke-linecap="round"
                  ></rect>{" "}
                </g>
              </svg>
            </div>
            <div>
              <p className="font-rubik_regular text-2xl text-black capitalize tracking-wide mb-3">
                Email Address
              </p>
              <p className="font-rubik_regular text-black/60 text-base tracking-wide">
                info@tronix.com
              </p>
              <p className="font-rubik_regular text-black/60 text-base tracking-wide">
                inside.24tronix.com
              </p>
            </div>
          </div>
          <div className="border-l-2 h-32" />
          <div className="flex">
            <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mr-5">
              <svg
                fill="#0f4ef0"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="0.00032"
                className="w-9 h-9"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <p className="font-rubik_regular text-2xl text-black capitalize tracking-wide mb-3">
                Office Address
              </p>
              <p className="font-rubik_regular text-black/60 text-base tracking-wide">
                25 Hilton Street, Miana
              </p>
              <p className="font-rubik_regular text-black/60 text-base tracking-wide">
                Frankfurt. DE
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
