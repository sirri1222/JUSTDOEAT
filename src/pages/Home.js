import React from "react";
import Banner from "../components/Banner";
import BasketModal from "../components/BasketModal";

import HeaderBottom from "../components/HeaderBottom";
import HeaderNav from "../components/HeaderNav";
import MainMenu from "../components/MainMenu";


const Home = () => {


  return (
    <div>

      <HeaderNav />
      <HeaderBottom />

      <MainMenu />
      <Banner />
    </div>
  );
};

export default Home;
