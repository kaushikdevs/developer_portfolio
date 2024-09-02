import React from "react";
import { ToastContainer, toast } from "react-toastify";
import TextGradiant from "../Animation/textGradiant";
import Footer from "../Component/Footer";
import emailjs from "@emailjs/browser";
import Navigation from "../Component/navigation";

interface ContactUSInterface {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const ContactUS: React.FC<ContactUSInterface> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const form = React.useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m9fdcbj",
        "template_h8tqbrw",
        form.current,
        "mPmb9jZbp6IYSaaMc"
      )
      .then(
        (result) => {
          toast.success("Message send successfully!");
          console.log(result.text);
        },
        (error) => {
          toast.error("Message not send!");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navigation
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="w-full h-auto">
        <div className="w-full h-52 lg:h-52 bg-background flex flex-col items-center justify-center">
          <TextGradiant
            text="contact Us"
            style={"text-center text-5xl lg:text-6xl"}
          />
          <div className="sm:w-[30rem] xl:w-[40rem] m-auto">
            <text className="block text-text_color leading-relaxed text-center mx-5 my-4">
              I am available for freelance work. Connect with me via phone:{" "}
              <text className="text-primary_gold"> +918347131792 </text> or
              email:{" "}
              <text className="text-primary_gold">
                {" "}
                kaushikhirapara12@gmail.com
              </text>
            </text>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="card">
            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              className="space-y-8 mx-6 p-8"
              id="box"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-text_2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-background border-none text-gray-100 text-sm rounded-lg outline-none block w-56 lg:w-[30rem] p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-text_2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-56 lg:w-[30rem] text-sm text-gray-100 bg-background rounded-lg border shadow-sm border-none outline-none"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-text_2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block p-2.5 w-56 lg:w-[30rem] text-sm text-gray-100 bg-background rounded-lg shadow-sm border-none outline-none"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary_gold sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </div>
        </div>
        <div className="pt-16">
          <Footer
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default ContactUS;
