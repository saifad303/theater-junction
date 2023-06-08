import React from "react";
import Slider from "../../components/GeneralComponents/HomeCompoennts/Slider";
import Classes from "../../components/GeneralComponents/HomeCompoennts/Classes/Classes";
import Instructor from "../../components/GeneralComponents/HomeCompoennts/Instructor/Instructor";
import ContactForm from "../../components/GeneralComponents/HomeCompoennts/ContactForm/ContactForm";
import ClassesSection from "../../components/GeneralComponents/HomeCompoennts/ClassSection/ClassesSection";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <Classes></Classes>
      <ClassesSection></ClassesSection>
      <Instructor></Instructor>
      <ContactForm></ContactForm>
    </div>
  );
};

export default HomePage;
