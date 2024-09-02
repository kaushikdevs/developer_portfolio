import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CardBody, Button } from "@material-tailwind/react";
import TextGradiant from "../../Animation/textGradiant";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Loader from "../../Animation/loader";

const Portfolio = () => {
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
  return (
    <div className="w-full h-auto bg-background_second py-10">
      <TextGradiant text="my latest project" style="text-center mx-16" />
      <div className="sm:w-[40rem] xl:w-[55rem] m-auto">
        <text className="block text-text_color leading-relaxed text-center mx-5 my-4">
          I have completed numerous projects that demonstrate my capabilities.
          You can refer to my work and review various project types to gain
          insight into my work experience. This will help you trust me as your
          developer. Please take a look.
        </text>
      </div>
      {portfolioData.length === 0 ? (
        <Loader />
      ) : (
        <div className="grid sm:flex justify-center mt-7">
          <div className="sm:flex items-center justify-center flex-wrap w-full 2xl:w-[80vw]">
            {portfolioData.map((item: any, index) => {
              const items = item.data;

              return (
                <div className="relative grid h-[28rem] w-full max-w-[20rem] xs:max-w-[24rem] rounded-md items-end justify-center overflow-hidden text-center mx-3 lg:mr-5 mb-5 cursor-pointer transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-105 duration-300 bg-gradient-to-t from-primary_pink/5 to-primary_pink/90">
                  <div className="absolute inset-0 m-0 h-full w-full rounded-none overflow-hidden">
                    <img
                      src={items.img}
                      alt=""
                      className="absolute h-full w-full inset-0 object-cover"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/80" />
                  </div>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <text className="text-text_1/70 font-semibold">
                      {items.tag}
                    </text>

                    <text className="block text-2xl my-5 text-white leading-tight">
                      {items.title}
                    </text>
                    <Link to={items.link} target="_blank">
                      <Button className="uppercase bg-transparent shadow-none py-2 rounded-md hover:shadow-none border-[2px] hover:border-primary_gold transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-105 duration-300">
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
      <Link to="/portfolios" className="flex items-center justify-center mt-5">
        <motion.div
          className="px-9 py-3 rounded-2xl border-2 hover:bg-primary_pink hover:border-none"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <text className="text-base tracking-widest font-sans text-white capitalize">
            view more
          </text>
        </motion.div>
      </Link>
    </div>
  );
};

export default Portfolio;
