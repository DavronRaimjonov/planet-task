import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/about";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Home from "../components/home";
import Services from "../components/services";
import MainLayout from "../layout";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Root;
