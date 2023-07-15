import React from "react";
import image1 from "../../assets/AccountingServices/image1.png";
import { BsArrowRight } from "react-icons/bs";

const AccountingMain = () => {
  return (
    <section className="flex mt-28 px-24 lat:px-12 tab:px-5 tab:flex-col tel:px-2 tel:flex-col">
      <article className="p-14 lat:p-8 tab:p-0 tab:text-center tel:text-center tel:p-0">
        <h1 className="text-7xl lat:text-5xl tab:text-4xl tel:text-3xl">
          Accounting services
        </h1>
        <p className="text-xl w-full py-14 lat:py-10 tab:py-10 tel:text-base tel:py-7">
          We will provide your business with full support in accordance with the
          requirements of the UAE legislation. <br /> <br />
          Our experts will provide tax registration, high-quality accounting,
          preparation and submission of tax returns, help in passing an audit
          and analyze taxes according to settlement schemes and commercial
          transactions.
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

export default AccountingMain;
