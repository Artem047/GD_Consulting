import React from "react";
import image1 from "../../assets/FinancialConsulting//image1.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const FinancialMain = () => {
  return (
    <section className="flex mt-28 px-24 lat:px-12 tab:px-5 tab:flex-col tel:px-2 tel:flex-col">
      <article className="p-14 lat:p-8 tab:p-0 tab:text-center tel:text-center tel:p-0">
        <h1 className="text-7xl lat:text-5xl tab:text-4xl tel:text-3xl">
          Financial Consulting
        </h1>
        <p className="text-xl w-full py-14 lat:py-10 tab:py-10 tel:text-base tel:py-7">
          We know how to succeed together with clients, no matter how difficult
          the situation may be. Our experts are happy to help entrepreneurs in
          all industries, from large corporations to small businesses, private
          investors and startups. <br /> <br /> We also provide services in
          opening and supporting a business in the UAE.
        </p>
        <Link
          to="/freeconsultation"
          className="btn__arrow w-[320px] h-16 text-xl tab:max-w-[590px] tab:w-full tel:w-full">
          Submit your application
          <BsArrowRight size={32} className="ml-3" />
        </Link>
      </article>
      <img
        src={image1}
        alt=""
        className="pl-6 w-full w-max-full lat:h-[420px] lat:pl-0"
      />
    </section>
  );
};

export default FinancialMain;
