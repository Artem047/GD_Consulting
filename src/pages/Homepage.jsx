import React from "react";

import WorksWe from "./HomePage/WorksWe";
import Specificity from "./HomePage/Specificity";
import Services from "./HomePage/Services";
import Experience from "./HomePage/Experience";
import Functioning from "./HomePage/Functioning";

import shape from "../assets/Shape.png";
import Clients from "./HomePage/Clients";
import ContactHome from "./HomePage/ContactHome";
import shap2 from "../assets/shpe2.png";
import Connection from "./HomePage/Connection";
import Main from "./HomePage/Main";

const Homepage = () => {
  return (
    <div className="w-full h-full" id="home">
      <Main />
      <WorksWe />
      <Specificity />
      <Services />
      <Experience />
      <Functioning />
      <img src={shape} alt="" className="tab:hidden tel:hidden" />
      <Clients />
      <ContactHome />
      <img src={shap2} alt="" className="tab:hidden tel:hidden" />
      <Connection />
    </div>
  );
};

export default Homepage;
