import React, { useEffect, useState } from "react";
import "../css/slide-logo.css";
const LogoSlide = (props) => {
  const logos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  ];
  const delay = 0;
  // useEffect(() => {
  //   setInterval(() => {}, delay);
  // });

  return (
    <>
      <div className="product-title">Thương Hiệu</div>
      <div className="slider-logo">
        {logos &&
          logos.length > 0 &&
          logos.map((logo, index) => {
            const animate = {
              transform: `translateX(-50%)`,
            };
            return (
              <div
                className="slider-item"
                style={index === 0 ? transform : null}
              >
                <img src={logo} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LogoSlide;
