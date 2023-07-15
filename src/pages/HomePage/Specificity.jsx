import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { dataSpecifity } from "../../utils/data";
import SpecifityBlock from "../../utils/Blocks/SpecifityBlock";

const Specificity = () => {
  return (
    <section className="w-full flex items-center my-36 flex-col">
      <h1 className="text-7xl p-20 tab:text-4xl tab:p-10 tel:text-3xl tel:p-2 font-bold">
        What sets us apart
      </h1>
      <article className="flex tab:gap-10 tab:flex-col tel:flex-col">
        {dataSpecifity.map((data) => {
          return (
            <SpecifityBlock
              key={data.text}
              image={data.image}
              heading={data.heading}
              text={data.text}
            />
          );
        })}
      </article>
      <button className="btn__arrow mt-10 max-w-[335px] w-full h-[80px] lat:w-[336px] lat:mt-16 tab:max-w-[600px] tab:mt-6 tel:mt-4 tel:h-16">
        <p className="text-xl">Get free сonsultations</p>
        <BsArrowRight className="ml-3" size={35} />
      </button>
    </section>
  );
};

export default Specificity;
