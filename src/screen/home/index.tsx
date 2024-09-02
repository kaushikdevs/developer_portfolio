import React from "react";
import "./style.css";

import Navigation from "../../component/heade/navigation";
import Header from "../../component/heade/header";
import Home from "../../component/home/homescreen";
import WaveLine from "../../component/waveLine/waveLine";
import ServiceComponent from "../../component/home/service";
import Testimonials from "../../component/home/testimonials";
import Team from "../../component/home/team";
import Project from "../../component/home/project";
import Poster from "../../component/home/poster";
import Blog from "../../component/home/blog";
import Footer from "../../component/footer";

const Homescreen = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="w-screen h-auto bg-gradient-to-r to-shadow_color/60 from-white">
      <Header />
      <Navigation />
      <Home />
      <WaveLine />
      <ServiceComponent />
      <Testimonials />
      <Team />
      <Project />
      <Poster />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homescreen;
