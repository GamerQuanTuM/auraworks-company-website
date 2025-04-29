import React from "react";
import Banner from "./banner";
import Advertise from "./advertise";
import Text from "./text";

const Home = () => {
  return (
    <>
      <Banner />
      <Advertise />
      <div className="relative">
        <Text />
      </div>
    </>
  );
};

export default Home;
