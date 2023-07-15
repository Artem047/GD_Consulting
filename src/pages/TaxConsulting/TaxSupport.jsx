import React from "react";

const TaxSupport = () => {
  return (
    <section className="my-28 px-24 flex lat:px-12 tab:px-5 tab:flex-col tab:gap-7 tel:flex-col tel:px-2 tel:gap-7">
      <article className="w-full px-20 py-16 border rounded-[48px] border-black max-h-[300px] lat:px-7 lat:py-10 tab:h-[350px] tab:p-10 tel:h-full tel:p-7">
        <p className="text-xl lat:text-lg tab:text-base tel:text-base">
          <b> We are consulting on the new corporate tax in the UAE.</b> Our
          team combines understanding of clients' business, innovative solutions
          and extensive professional and industry knowledge. This allows us to
          provide the highest quality services
        </p>
      </article>
      <article className="w-full px-20 py-16 border border-black rounded-[48px] h-[300px] ml-12 lat:px-7 lat:py-10 lat:ml-7 tab:ml-0 tab:h-[350px] tab:p-10 tel:ml-0 tel:p-7">
        <p className="text-xl lat:text-lg tab:text-base tel:text-base">
          <b>
            We offer a wide range of consulting services in the field of
            taxation.
          </b>
          Our experts will help with tax registration, high-quality bookkeeping,
          preparation and submission of tax returns, as well as in auditing and
          tax monitoring.
        </p>
      </article>
    </section>
  );
};

export default TaxSupport;
