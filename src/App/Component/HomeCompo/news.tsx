import React, { useEffect } from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";
import TextGradiant from "../../Animation/textGradiant";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Loader from "../../Animation/loader";

const News = () => {
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
  return (
    <div className="w-full py-10">
      <TextGradiant text="latest blogs" style={"mx-5 text-center"} />
      <div className="sm:w-[30rem] xl:w-[50rem] m-auto">
        <text className="block text-text_color leading-relaxed text-center mx-5 my-4">
          I have written one or more blogs because my goal is to educate and
          bring happiness to others through sharing knowledge. I have written
          many blogs. Please check them below and provide feedback on their
          quality.
        </text>
      </div>
      {blogData.length === 0 ? (
        <Loader />
      ) : (
        <div className="grid sm:flex justify-center">
          <div className="sm:flex items-center justify-center flex-wrap w-full 2xl:w-[80vw] mt-3">
            {blogData.map((item: any, index) => {
              const items = item.data;
              return (
                <>
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
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
