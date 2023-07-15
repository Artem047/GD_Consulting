import React from "react";
import { dataAdvantagesFinancial } from "../../utils/data";

const FinancialAdvantages = () => {
  return (
    <section className="mt-28 px-24 py-20 lat:px-12 tab:px-5 tel:px-2">
      <article className="flex tab:flex-col tel:flex-col">
        <div className="p-12 w-full lat:p-0 lat:w-[732px] lat:px-7 lat:py-12 tab:p-0 tel:p-0">
          <h1 className="text-7xl lat:text-5xl tab:text-4xl tel:text-3xl">
            Advantages
          </h1>
          <p className="text-xl pt-8 tab:py-10 tel:py-7 tel:text-base">
            {dataAdvantagesFinancial.map((e) => {
              return e.heading;
            })}
          </p>
        </div>
        <div className="max-w-[575px] border border-black w-full h-[400px] bg-[#F6F6F6] rounded-[48px] lat:w-[370px] lat:h-[350px] tab:h-[240px] tel:h-[270px]">
          <p className="px-16 text-xl py-14 lat:p-10 lat:text-lg tab:p-7 tab:text-lg tel:text-base tel:p-7">
            {dataAdvantagesFinancial.map((e) => {
              return e.text1;
            })}
          </p>
        </div>
      </article>
      <article className="flex tab:flex-col tel:flex-col">
        <div className="max-w-[575px] border border-black w-full h-[400px] bg-[#EBF3FF] rounded-[48px] lat:w-[370px] lat:h-[350px] tab:h-[240px] tel:h-[270px]">
          <p className="px-16 text-xl py-14 lat:p-10 lat:text-lg tab:p-7 tab:text-lg tel:text-base tel:p-7">
            {dataAdvantagesFinancial.map((e) => {
              return e.text2;
            })}
          </p>
        </div>
        <div className="max-w-[575px] border border-black w-full h-[400px] bg-[#F6F6F6] rounded-[48px] lat:w-[370px] lat:h-[350px] tab:h-[240px] tel:h-[270px]">
          <p className="px-16 text-xl py-14 lat:p-10 lat:text-lg tab:p-7 tab:text-lg tel:text-base tel:p-7">
            {dataAdvantagesFinancial.map((e) => {
              return e.text3;
            })}
          </p>
        </div>
        <div className="max-w-[575px] border border-black w-full h-[400px] bg-[#EBF3FF] rounded-[48px] lat:w-[370px] lat:h-[350px] tab:h-[240px] tel:h-[270px]">
          <p className="px-16 text-xl py-14 lat:p-10 lat:text-lg tab:p-7 tab:text-lg tel:text-base tel:p-7">
            {dataAdvantagesFinancial.map((e) => {
              return e.text4;
            })}
          </p>
        </div>
      </article>
    </section>
  );
};

export default FinancialAdvantages;
