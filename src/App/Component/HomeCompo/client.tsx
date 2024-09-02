import React, { useEffect, useState } from "react";
import TextGradiant from "../../Animation/textGradiant";
import { Link } from "react-router-dom";
import "./testi.css";
import Swiper from "swiper";

const Client = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="w-full h-auto bg-background_second py-10">
      <TextGradiant text="clients" style={"text-center"} />
    </div>
  );
};

export default Client;
