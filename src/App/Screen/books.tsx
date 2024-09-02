import React, { useEffect, useState } from "react";
import TextGradiant from "../Animation/textGradiant";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardBody, Button, IconButton } from "@material-tailwind/react";
import { db } from "../../firebase";
import Loader from "../Animation/loader";
import Navigation from "../Component/navigation";
import Footer from "../Component/Footer";

interface BooksInterface {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const Books: React.FC<BooksInterface> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [bookData, setBookData] = useState<Array<object>>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(collection(db, "notes")).then(
      (querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
      }
    );
    setBookData(data);
  };

  const handleDownload = (url: any) => {
    const pdfUrl = url;
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Navigation
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="w-full h-auto pb-20">
        <div className="w-full h-52 lg:h-52 bg-background flex flex-col items-center justify-center">
          <TextGradiant
            text="Free Books"
            style={"text-center text-5xl lg:text-6xl"}
          />
          <text className="block text-white text-center mt-5 capitalize text-lg">
            home / <text className="text-primary_pink">Free Books</text>
          </text>
        </div>
        <div className="px-5 lg:mx-0 pt-8 lg:py-16 lg:flex justify-center bg-background">
          <div className="lg:w-[70rem] lg:indent-10 indent-5 lg:pb-5 pb-5">
            <text className="block leading-relaxed text-lg text-center text-text_color">
              I offer a wide selection of books covering various programming
              languages, as well as comprehensive guides featuring challenging
              interview questions and in-depth solutions. These resources are
              designed to support individuals seeking to enhance their
              programming skills, tackle difficult technical interviews, and
              gain practical insights for real-world challenges.
            </text>
          </div>
        </div>
        {bookData.length == 0 ? (
          <Loader />
        ) : (
          <div className="grid sm:flex justify-center mt-10">
            <div className="sm:flex items-center justify-center flex-wrap w-full 2xl:w-[80vw] mt-3">
              {bookData.map((item: any, index) => {
                const items = item.data;
                return (
                  <div
                    className="p-5 border-[5px] border-dashed border-blue-gray-600 rounded-lg cursor-pointer mx-5 mb-5"
                    onClick={() => {
                      handleDownload(items.url);
                    }}
                  >
                    <img
                      src={items.image}
                      alt=""
                      className="w-24 h-24 rounded-lg mb-3"
                    />
                    <text className="font-bold text-primary_gold block text-center">
                      {items.name}
                    </text>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default Books;
