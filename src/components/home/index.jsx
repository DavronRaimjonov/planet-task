import React from "react";
import AboutUs from "./about-us";
import Collection from "./collection";
import Customers from "./customers";
import Follow from "./follow";
import Product from "./product";
import Showcase from "./showcase";
import Subscirpe from "./subscripe";

const Home = () => {
  return (
    <>
      <Showcase />
      <Collection />
      <AboutUs />
      <Product />
      <Customers />
      <Subscirpe />
      <Follow />
    </>
  );
};

export default Home;
