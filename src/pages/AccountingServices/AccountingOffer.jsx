import React from "react";
import image2 from "../../assets/AccountingServices/image2.png";
import image3 from "../../assets/AccountingServices/image3.png";
import { dataAccountingOfferBlock } from "../../utils/data";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AccountingOffer = () => {
  return (
    <section className="mt-28 px-24 lat:px-12 tab:px-5 tel:px-2">
      <div className="flex tab:flex-col tel:flex-col">
        <article className="px-14 py-8 lat:p-0 tab:p-0 tel:p-0">
          <h1 className="text-5xl tab:text-4xl tel:text-3xl">
            We offer solutions for your business
          </h1>
          <ul className="text-xl list-disc px-14 pt-14 flex flex-col gap-6 lat:pt-10 lat:px-0 tab:text-base tab:p-10 tel:text-base tel:p-4">
            {dataAccountingOfferBlock.map((e) => {
              return <li>{e.text}</li>;
            })}
          </ul>
        </article>
        <img src={image2} alt="" className="lat:w-[560px] lat:h-[390px]" />
      </div>
      <Link
        to="/freeconsultation"
        className="w-[305px] my-24 mx-auto h-20 btn__arrow bg-black text-white lat:my-20 tab:my-10 tab:w-full tel:w-full tel:my-5">
        <p className="text-xl">Get free сonsultations</p>
        <BsArrowRight size={32} className="ml-3" />
      </Link>
      <div className="mt-28 text-center px-[270px] lat:px-0 tab:px-0 tel:px-0">
        <h1 className="text-5xl p-14 lat:p-12 tab:p-10 tel:py-10 tel:px-0 tel:text-3xl">
          We close tasks faster than a full-time accountant
        </h1>
        <img src={image3} alt="" className="py-8 mx-auto" />
        <p className="text-[26px] py-14 tab:text-xl tel:text-xl">
          Turning to G&D Consulting specialists for outsourcing accounting
          services and tax consulting, you will receive high-quality business
          support and reduce costs
        </p>
      </div>
    </section>
  );
};

export default AccountingOffer;
