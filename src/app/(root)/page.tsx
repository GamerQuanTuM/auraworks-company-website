import React from "react";
import Advertise from "./advertise";
import Text from "./text";
import Testimonial from "./testimonial";
import Banner from "./banner";
import OurWorks from "./our-works";
import Features from "./features";

const Home = () => {
  return (
    <>
      <Banner />
      <Advertise />
      <div className="relative">
        <Text />
      </div>
      <Testimonial/>
      <OurWorks/>
      <Features/>
    </>
  );
};

export default Home;
