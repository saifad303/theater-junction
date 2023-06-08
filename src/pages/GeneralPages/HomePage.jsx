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
      <div className=" py-6">
        <Classes></Classes>
      </div>
      <div className=" py-8">
        <ClassesSection></ClassesSection>
      </div>
      <div className=" py-8">
        <Instructor></Instructor>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default HomePage;
