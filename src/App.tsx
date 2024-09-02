import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screen
import Errorpage from "./component/errorPage";
import Homescreen from "./screen/home";
import About from "./screen/about";
import Service from "./screen/service";
import Contact from "./screen/contact";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default Index;
