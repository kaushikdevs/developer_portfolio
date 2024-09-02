import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App/Screen/home";
import Navigation from "./App/Component/navigation";
import AboutUS from "./App/Screen/about";
import Services from "./App/Screen/service";
import Portfolios from "./App/Screen/portfolio";
import Blogs from "./App/Screen/blog";
import ContactUS from "./App/Screen/contact";
import ScrollToTop from "./App/Component/scrollToTop";
import Books from "./App/Screen/books";
import Theme from "./App/Component/Theme";
import NotFound from "./App/Component/errorpage";

interface AppInterafce {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const App: React.FC<AppInterafce> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUS
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route
          path="/portfolios"
          element={
            <Portfolios
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route
          path="/blogs"
          element={
            <Blogs
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route
          path="/books"
          element={
            <Books
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route
          path="/contact-us"
          element={
            <ContactUS
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
