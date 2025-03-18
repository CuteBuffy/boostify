import React from "react";
import { useState, useEffect } from "react";

import Footer from "../../components/Footer/Footer.jsx"
import HomePageCategories from "./HomePageCategories/HomePageCategories.jsx";
import HomePageInfo from "./HomePageInfo/HomePageInfo.jsx";
import HomePageSocials from "./HomePageSocials/HomePageSocials.jsx";
import HomePageAbout from "./HomePageAbout/HomePageAbout.jsx";

import "./HomePage.css"

const MainPage = () => {

  useEffect(() => {
    document.title = "Boostify | Home"
  }, [])

  return (
    <div className="page__wrapper_white_bg">
      <div className="container page__container">
        <div className="main__page_content">
          <HomePageCategories />
          <HomePageInfo />
          <HomePageSocials />
          <HomePageAbout />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
