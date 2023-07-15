import React from "react";

const AccountingSupport = () => {
  return (
    <section className="my-28 px-24 flex lat:px-12 tab:px-5 tab:flex-col tab:gap-7 tel:flex-col tel:px-2 tel:gap-7">
      <article className="w-full px-20 py-16 border rounded-[48px] border-black max-h-[420px] lat:px-7 lat:py-10 tab:h-[350px] tab:p-10 tel:h-full tel:p-7">
        <h1 className="text-4xl tab:text-3xl tel:text-3xl">
          Comprehensive business support in the UAE
        </h1>
        <p className="pt-8 text-xl tab:text-base tab:pt-6 tel:text-base tel:pt-5">
          Our team specializes in providing accounting and tax services in the
          UAE, providing financial advice tailored to your needs.
        </p>
      </article>
      <article className="w-full px-20 py-16 border border-black rounded-[48px] h-[420px] ml-12 lat:px-7 lat:py-10 lat:ml-7 tab:ml-0 tab:h-[350px] tab:p-10 tel:ml-0 tel:p-7">
        <h1 className="text-4xl tab:text-3xl tel:text-3xl">
          Combination of global and local experience
        </h1>
        <p className="pt-8 text-xl tab:text-base tab:pt-6 tel:text-base tel:pt-5">
          Combining international experience with in-depth knowledge of the
          local market, we provide our customers with exceptional service. We
          quickly and efficiently solve the problems and concerns of customers.
        </p>
      </article>
    </section>
  );
};

export default AccountingSupport;
