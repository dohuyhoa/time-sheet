import React from "react";
import BottomNavigation from "../components/bottom-navigation";
import { Link } from "zmp-react";
import { Page } from "zmp-ui";

import PageHeading from "../components/page-heading";
import Products from "../components/products";
import Banner from "../components/banner";
import Footer from "../components/footer";
import New from "./news";
import SlideNews from "../components/slide-news";
import LogoSlide from "../components/LogoSlide";
const HomePage = () => {
  return (
    <Page>
      <section id="home" className="bg-light">
        <PageHeading />
        <div className="container">
          <Banner />
          <Products />
          <SlideNews />
          <LogoSlide />
        </div>

        <Footer />
      </section>
    </Page>
  );
};

export default HomePage;
