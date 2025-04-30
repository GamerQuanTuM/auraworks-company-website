import React from "react";
import Advertise from "./advertise";
import Text from "./text";
import Testimonial from "./testimonial";
import Banner from "./banner";
import OurWorks from "./our-works";
import Features from "./features";
import Projects from "./projects";
import FAQ from "./faq";

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
      <Projects/>
      <FAQ/>
    </>
  );
};

export default Home;
