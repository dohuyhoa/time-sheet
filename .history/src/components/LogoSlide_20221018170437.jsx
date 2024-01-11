import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/slide-logo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LogoSlide = (props) => {
  const logos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  ];
  return (
    <>
      <div className="product-title">Thương Hiệu</div>
      <div className="slider-logo">
        {logos &&
          logos.length > 0 &&
          logos.map((logo, index) => {
            return (
              <div key={index} className="slider-item">
                <Link className="slide-img">
                  <img src={logo} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LogoSlide;
