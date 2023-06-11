import React from "react";
import AboutUs from "./about-us";
import Collection from "./collection";
import Customers from "./customers";
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
    </>
  );
};

export default Home;
