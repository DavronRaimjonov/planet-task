import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import MainLayout from "../layout";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Root;
