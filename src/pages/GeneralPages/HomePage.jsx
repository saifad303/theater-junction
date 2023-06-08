import React from "react";
import Slider from "../../components/GeneralComponents/HomeCompoennts/Slider";
import Classes from "../../components/GeneralComponents/HomeCompoennts/Classes/Classes";
import Instructor from "../../components/GeneralComponents/HomeCompoennts/Instructor/Instructor";
import ContactForm from "../../components/GeneralComponents/HomeCompoennts/ContactForm/ContactForm";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <Classes></Classes>
      <Instructor></Instructor>
      <ContactForm></ContactForm>
    </div>
  );
};

export default HomePage;
