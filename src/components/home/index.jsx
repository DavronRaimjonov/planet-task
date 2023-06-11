import React from "react";
import AboutUs from "./about-us";
import Collection from "./collection";
import Product from "./peoduct";
import Showcase from "./showcase";

const Home = () => {
  return (
    <>
      <Showcase />
      <Collection />
      <AboutUs />
      <Product />
    </>
  );
};

export default Home;
