import React from "react";
import TaxMain from "./TaxConsulting/TaxMain";
import TaxSupport from "./TaxConsulting/TaxSupport";
import TaxOffer from "./TaxConsulting/TaxOffer";
import TaxAdvantage from "./TaxConsulting/TaxAdvantage";
import Contact from "./HomePage/ContactHome";
import ContactBlock from "../components/ContactBlock";

const TaxConsulting = () => {
  return (
    <div className="w-full h-full" id="tax">
      <TaxMain />
      <TaxSupport />
      <TaxOffer />
      <TaxAdvantage />
      <ContactBlock />
    </div>
  );
};

export default TaxConsulting;
