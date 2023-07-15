import React from "react";
import FinancialMain from "./FinancialConsulting/FinancialMain";
import FinancialSupport from "./FinancialConsulting/FinancialSupport";
import FinancialOffer from "./FinancialConsulting/FinancialOffer";
import FinancialAdvantages from "./FinancialConsulting/FinancialAdvantages";
import ContactBlock from "../components/ContactBlock";

const FinancialConsulting = () => {
  return (
    <div className="w-full h-full" id="finance">
      <FinancialMain />
      <FinancialSupport />
      <FinancialOffer />
      <FinancialAdvantages />
      <ContactBlock />
    </div>
  );
};

export default FinancialConsulting;
