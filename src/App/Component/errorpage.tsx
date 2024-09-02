import React from "react";
import Lottie from "lottie-react";
import notfound from "../Assets/lottie/notfound.json";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Lottie
        animationData={notfound}
        autoPlay
        loop
        style={{ height: "35%", marginTop: 35 }}
      />
      <text className="mt-5 text-3xl capitalize text-primary_pink">page not found</text>
    </div>
  );
};

export default NotFound;
