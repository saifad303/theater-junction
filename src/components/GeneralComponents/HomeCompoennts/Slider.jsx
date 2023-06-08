import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const slides = [
    {
      url: "/images/slider-1.jpg",
    },
    {
      url: "/images/slider-2.jpg",
    },
    {
      url: "/images/slider-3.jpg",
    },
  ];

  return (
    <AwesomeSlider className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${slides[0].url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        1
      </div>
      <div
        style={{
          backgroundImage: `url(${slides[1].url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        1
      </div>
      <div
        style={{
          backgroundImage: `url(${slides[2].url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        1
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
