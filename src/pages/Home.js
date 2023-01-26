import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Banner from "../components/Banner";

import HeaderBottom from "../components/home_p/HeaderBottom";

import MainMenu from "../components/home_p/MainMenu";

const Home = () => {
  // 2. 로그인 상태 파악
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  // console.log("user", user);
  useEffect(() => {
    // 사용자 로그인 여부 파악
    if (user.accessToken === "") {
      // 로그인이 안된 경우
      alert("로그인을 하셔야 합니다.");
      navigate("/login");
    } else {
      // 로그인이 된 경우
    }
  }, [user]);

  return (
    <div>
      <HeaderBottom />

      <MainMenu />
      <Banner />
    </div>
  );
};

export default Home;
