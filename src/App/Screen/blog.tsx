import React, { useEffect } from "react";
import { Card, CardBody, Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import TextGradiant from "../Animation/textGradiant";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { blogsData } from "../JSON";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../Animation/loader";
import Navigation from "../Component/navigation";

interface BlogsInterace {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const Blogs: React.FC<BlogsInterace> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [active, setActive] = React.useState(1);
  const [blogData, setBlogData] = React.useState<Array<object>>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(collection(db, "blogsData")).then(
      (querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
      }
    );
    setBlogData(data);
  };

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
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
            text="Blog List"
            style={"text-center text-5xl lg:text-6xl"}
          />
          <text className="block text-white text-center mt-5 capitalize text-lg">
            home / <text className="text-primary_pink">Blog List</text>
          </text>
        </div>
        <div className="px-5 lg:mx-0 pt-8 lg:py-16 lg:flex justify-center bg-background">
          <div className="lg:w-[70rem] lg:indent-10 indent-5">
            <text className="block leading-relaxed text-lg text-center text-text_color">
              I have written one or more blogs because my goal is to educate and
              bring happiness to others through sharing knowledge. I have
              written many blogs. Please check them below and provide feedback
              on their quality.
            </text>
          </div>
        </div>
        {blogData.length == 0 ? (
          <Loader />
        ) : (
          <div className="grid sm:flex justify-center mt-10">
            <div className="sm:flex items-center justify-center flex-wrap w-full 2xl:w-[80vw] mt-3">
              {blogData.map((item: any, index) => {
                const items = item.data;
                return (
                  <Card
                    shadow={false}
                    className="group rounded-lg relative grid h-[28rem] w-full max-w-[20rem] items-end justify-center overflow-hidden mb-5 mx-3"
                  >
                    <div className="absolute inset-0 m-0 h-full w-full rounded-none overflow-hidden ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125">
                      <img
                        src={items.img}
                        alt=""
                        className="absolute h-full w-full inset-0 object-cover"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/80" />
                    </div>
                    <CardBody className="relative py-14 px-6 md:px-12">
                      <text className="text-text_2 font-semibold">
                        {items.tag}
                      </text>

                      <text className="block text-2xl my-5 text-white leading-tight">
                        {items.title}
                      </text>
                      <Link to={items.link} target="_blank">
                        <Button className="uppercase bg-transparent shadow-none border-[2px] hover:shadow-none hover:border-primary_pink text-xs">
                          read more
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
        {blogsData.length != 1 && (
          <div className="flex justify-center items-center my-8 gap-8">
            <IconButton
              size="sm"
              variant="outlined"
              color="white"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <text className="font-normal text-gray-400">
              Page <strong className="text-primary_gold">{active}</strong> of{" "}
              <strong className="text-primary_gold">10</strong>
            </text>
            <IconButton
              size="sm"
              variant="outlined"
              color="white"
              onClick={next}
              disabled={active === 10}
            >
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </div>
        )}
        <div className="pt-16">
          <Footer
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;
