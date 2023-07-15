import React from "react";
import AccountingMain from "./AccountingServices/AccountingMain";
import AccountingSupport from "./AccountingServices/AccountingSupport";
import AccountingOffer from "./AccountingServices/AccountingOffer";
import ContactBlock from "../components/ContactBlock";
import AccountingServicesAdvantages from "./AccountingServices/AccountingServicesAdvantages";

const AccountingServices = () => {
  return (
    <div className="w-full h-full" id="account">
      <AccountingMain />
      <AccountingSupport />
      <AccountingServicesAdvantages />
      <AccountingOffer />
      <ContactBlock />
    </div>
  );
};

export default AccountingServices;
