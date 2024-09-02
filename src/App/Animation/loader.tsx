import React from "react";
import Lottie from "lottie-react";
import Json from "../Assets/lottie/JelrIcglcD.json";

const Loader = () => {
  return <Lottie animationData={Json} autoPlay loop style={{ height: 100, marginTop: 35 }} />;
};

export default Loader;
