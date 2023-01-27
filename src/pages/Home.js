import React from "react";
import Banner from "../components/Banner";
import HeaderBottom from "../components/home/HeaderBottom";
import MainMenu from "../components/home/MainMenu";

const Home = () => {
  return (
    <div>
      <HeaderBottom />
      <MainMenu />
      <Banner />
    </div>
  );
};

export default Home;
