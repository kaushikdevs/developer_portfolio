import React, { useEffect } from "react";
import {
  CardHeader,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import TextGradiant from "../Animation/textGradiant";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import Loader from "../Animation/loader";
import Navigation from "../Component/navigation";

interface PortfoliosInterface {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const Portfolios: React.FC<PortfoliosInterface> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [active, setActive] = React.useState(1);
  const [portfolioData, setPortfolioData] = React.useState<Array<object>>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(collection(db, "projectData")).then(
      (querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
      }
    );
    setPortfolioData(data);
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
            text="portfolio"
            style={"text-center text-5xl lg:text-6xl"}
          />
          <text className="block text-white text-center mt-5 capitalize text-lg">
            home / <text className="text-primary_pink">portfolio</text>
          </text>
        </div>
        <div className="px-5 lg:mx-0 pt-8 lg:py-16 lg:flex justify-center bg-background">
          <div className="lg:w-[70rem] lg:indent-10 indent-5 pb-5 lg:pb-0">
            <text className="block leading-relaxed text-lg text-center text-text_color">
              I have completed numerous projects that demonstrate my
              capabilities. You can refer to my work and review various project
              types to gain insight into my work experience. This will help you
              trust me as your developer. Please take a look.
            </text>
          </div>
        </div>
        {portfolioData.length == 0 ? (
          <Loader />
        ) : (
          <div className="grid sm:flex justify-center mt-16">
            <div className="sm:flex items-center justify-center flex-wrap w-full 2xl:w-[80vw]">
              {portfolioData.map((item: any, index) => {
                const items = item.data;
                return (
                  <div className="relative grid h-[28rem] w-full max-w-[20rem] xs:max-w-[24rem] rounded-md items-end justify-center overflow-hidden text-center mx-3 lg:mr-2 mb-5 cursor-pointer transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-105 duration-300 bg-gradient-to-t from-primary_pink/5 to-primary_pink/90">
                    <div className="absolute inset-0 m-0 h-full w-full rounded-none overflow-hidden">
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

                      <text className="block text-3xl my-5 text-white leading-tight">
                        {items.title}
                      </text>
                      <Link to={items.link} target="_blank">
                        <Button className="uppercase bg-transparent shadow-none hover:shadow-none border-[2px] transition ease-in-out delay-150 hover:text-primary_gold hover:border-primary_gold xl:hover:-translate-y-1 xl:hover:scale-105 duration-300">
                          view details
                        </Button>
                      </Link>
                    </CardBody>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {portfolioData.length == 9 && (
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

export default Portfolios;
