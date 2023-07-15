import React from "react";
import image1 from "../../assets/TaxConsulting//image1.png";
import { BsArrowRight } from "react-icons/bs";

const TaxMain = () => {
  return (
    <section className="flex mt-28 px-24 lat:px-12 tab:px-5 tab:flex-col tel:px-2 tel:flex-col">
      <article className="p-14 lat:p-8 tab:p-0 tab:text-center tel:text-center tel:p-0">
        <h1 className="text-7xl lat:text-5xl tab:text-4xl tel:text-3xl">
          Tax Consulting
        </h1>
        <p className="text-xl w-full py-14 lat:py-10 tab:py-10 tel:text-base tel:py-7">
          Many companies in the UAE face difficulties and misunderstandings of
          local tax laws, which lead to fines and more serious consequences.
          Knowing all the features of the UAE market is the key to your
          success.The experience and knowledge of G&D Consulting experts will
          ensure high-quality accounting and tax accounting.
        </p>
        <button className="btn__arrow w-[320px] h-16 text-xl tab:max-w-[590px] tab:w-full tel:w-full">
          Submit your application
          <BsArrowRight size={32} className="ml-3" />
        </button>
      </article>
      <img
        src={image1}
        alt=""
        className="pl-6 w-full w-max-full lat:h-[420px] lat:pl-0"
      />
    </section>
  );
};

export default TaxMain;
