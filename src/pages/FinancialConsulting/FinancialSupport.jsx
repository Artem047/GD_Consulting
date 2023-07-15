import React from "react";

const FinancialSupport = () => {
  return (
    <section className="my-28 px-24 flex lat:px-12 tab:px-5 tab:flex-col tab:gap-7 tel:flex-col tel:px-2 tel:gap-7">
      <article className="w-full px-20 py-16 border rounded-[48px] border-black max-h-[480px] lat:px-7 lat:py-10 tab:h-[400px] tab:p-10 tel:h-full tel:p-7">
        <h1 className="text-5xl lat:text-4xl tab:text-3xl tel:text-3xl">
          Financial Planning and Analysis
        </h1>
        <ul className="pt-8 list-disc text-xl tab:text-base tab:pt-6 tel:text-base tel:pt-5">
          <li>
            Creating financial plans and budgets for managing
            a company’s finances
          </li>
          <li>
            Analyzing financial statements, identifying problem areas, and
            developing recommendations to improve financial performance
          </li>
        </ul>
      </article>
      <article className="w-full px-20 py-16 border border-black rounded-[48px] h-[480px] ml-12 lat:px-7 lat:py-10 lat:ml-7 tab:ml-0 tab:h-[400px] tab:p-10 tel:ml-0 tel:p-7">
        <h1 className="text-5xl lat:text-4xl tab:text-3xl tel:text-3xl">
          Financial Management and Investment
        </h1>
        <ul className="pt-8 list-disc text-xl tab:text-base tab:pt-6 tel:text-base tel:pt-5">
          <li>Managing a company's cash flows and investment portfolios</li>
          <li>
            Assisting in the selection and evaluation of investment projects and
            financial instruments to achieve a company's financial goals.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default FinancialSupport;
