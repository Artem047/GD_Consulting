import React from "react";

const ExperienceBlock = ({ image, heading, text }) => {
  return (
    <div className="px-20 py-12 lat:px-12 lat:py-8 tab:px-0 tab:py-5 tel:px-0">
      <img src={image} alt="" className="tab:w-24" />
      <h2 className="w-full text-[40px] mt-12 font-bold tab:text-[22px] tab:mt-5 tel:text-[22px]">
        {heading}
      </h2>
      <p className="text-[22px] pt-8 tab:pt-5 tab:text-[18px] tel:text-base tel:pt-4">
        {text}
      </p>
    </div>
  );
};

export default ExperienceBlock;
