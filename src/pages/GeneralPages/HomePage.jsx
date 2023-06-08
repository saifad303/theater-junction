import React from "react";
import Slider from "../../components/GeneralComponents/HomeCompoennts/Slider";
import Classes from "../../components/GeneralComponents/HomeCompoennts/Classes/Classes";
import Instructor from "../../components/GeneralComponents/HomeCompoennts/Instructor/Instructor";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <Classes></Classes>
      <Instructor></Instructor>
    </div>
  );
};

export default HomePage;
