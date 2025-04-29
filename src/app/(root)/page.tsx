import React from "react";
import Advertise from "./advertise";
import Text from "./text";
import Testimonial from "./testimonial";
import Banner from "./banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Advertise />
      <div className="relative">
        <Text />
      </div>
      <Testimonial/>
    </>
  );
};

export default Home;
