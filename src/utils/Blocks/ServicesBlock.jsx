import { BsArrowRight } from "react-icons/bs";
import calaculator from "../../assets/Services/calculator.png";
import laptop from "../../assets/Services/laptop.png";
import tax from "../../assets/Services/tax.png";
import { Link } from "react-router-dom";

const ServicesBlock = () => {
  return (
    <article className="text-center">
      <div className="flex w-full pt-20 lat:pt-12 tab:pt-0 tab:flex-col tab:items-center tel:pt-10 tel:flex-col">
        <img
          src={calaculator}
          className="h-full max-w-full lat:w-full tab:w-[230px] tel:w-[256px]"
        />
        <div className="px-6 lat:px-0">
          <h2 className="text-4xl font-bold tab:pt-7 tab:text-xl tel:text-xl">
            Accounting Services
          </h2>
          <ul className="pt-10 max-w-full w-full list-disc text-xl tab:text-base tel:text-base">
            <li>Managing full company’s accounting</li>
            <li className="pt-6 tab:pt-4">
              Partial accounting with “VAT”, “wage expenses” etc.
            </li>
            <li className="pt-6 tab:pt-4">Accounting outsourcing</li>
            <li className="pt-6 tab:pt-4">
              Financial statement analysis, interpretation, and evaluation
            </li>
            <li className="pt-6 tab:pt-4">Advising on emerging tax issues</li>
            <li className="pt-6 tab:pt-4">
              Assistance in resolving business disputes
            </li>
          </ul>
          <Link
            to="accountant"
            className="mt-12 btn__arrow w-full max-w-[600px] h-16">
            <p className="text-xl">More info</p>
            <BsArrowRight size={25} className="ml-3" />
          </Link>
        </div>
      </div>
      <div className="flex pt-20 lat:pt-12 tab:pt-14 tab:flex-col-reverse tab:items-center tel:pt-10 tel:flex-col-reverse">
        <div className="px-28 tab:px-6 lat:px-0 tel:px-6">
          <h2 className="text-4xl font-bold tab:pt-7 tab:text-xl tel:text-xl tel:pt-7">
            Tax Consulting
          </h2>
          <ul className="pt-10 list-disc text-xl tab:text-base tel:text-base">
            <li>VAT Registration, Filing, Amendment, Audit</li>
            <li className="pt-6  tab:pt-4">VAT Accounting & Consultancy</li>
            <li className="pt-6 tab:pt-4">
              Filing reconsideration form for VAT penalties
            </li>
            <li className="pt-6 tab:pt-4">Guidance with Tax Invoice</li>
            <li className="pt-6 tab:pt-4">
              Excise Tax Registration & Services
            </li>
            <li className="pt-6 tab:pt-4">Corporate tax consultancy</li>
          </ul>
          <Link to="tax" className="mt-12 w-full max-w-[600px] h-16 btn__arrow">
            <p className="text-xl">More info</p>
            <BsArrowRight size={25} className="ml-3" />
          </Link>
        </div>
        <img
          src={tax}
          className="h-full max-w-full lat:w-full tab:w-[230px] tel:w-[256px]"
        />
      </div>
      <div className="flex pt-20 lat:pt-12 tab:pt-14 tab:flex-col tab:items-center tel:pt-10 tel:flex-col ">
        <img
          src={laptop}
          className="h-full max-w-full lat:w-full tab:w-[230px] tel:w-[256px]"
        />
        <div className="px-28 tab:px-6 lat:px-0 tel:px-6">
          <h2 className="text-4xl tab:pt-7 font-bold tab:text-xl tel:text-xl">
            Financial Consulting
          </h2>
          <ul className="pt-10 list-disc text-xl tab:text-base tel:text-base">
            <li>Financial Modelling and Business Planning</li>
            <li className="pt-6 tab:pt-4">Business and Asset Valuation</li>
            <li className="pt-6 tab:pt-4">Mergers and Acquisitions (M&A)</li>
            <li className="pt-6 tab:pt-4">Due Diligence</li>
            <li className="pt-6 tab:pt-4">
              Risk management and internal control
            </li>
            <li className="pt-6 tab:pt-4">Internal & External audit</li>
          </ul>
          <Link
            to="finance"
            className="mt-12 w-full max-w-[600px] h-16 btn__arrow">
            <p className="text-xl">More Info</p>
            <BsArrowRight size={25} className="ml-3" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServicesBlock;
