import React from "react";
import { BiMap, BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import Maps from "../components/Maps";

const Contact = () => {
  return (
    <section className="w-full h-full my-24 text-center px-[240px] lat:px-12 tab:px-5 tel:px-2">
      <h1 className="text-7xl py-20 tab:text-4xl tab:py-10 tel:text-3xl tel:py-10">
        Contact
      </h1>
      <div className="flex justify-center">
        <BiMap size={42} />
        <p className="text-2xl text-left ml-5 tab:text-xl tel:text-lg">
          19th floor The Exchange Tower, Business <br /> Bay, Dubai, United Arab
          Emirates
        </p>
      </div>
      <div className="flex justify-center mt-10 tab:mt-6">
        <BiPhone size={42} />
        <p className="text-2xl text-left ml-5 tab:text-xl tel:text-lg">
          +971 56 840 0795
        </p>
      </div>
      <div className="flex justify-center mt-10 tab:mt-6">
        <HiOutlineMail size={42} />
        <p className="text-2xl text-left ml-5 tab:text-xl tel:text-lg">
          consulting@gmail.com
        </p>
      </div>
      <div className="my-24 ">
        <Maps />
      </div>
      <article className="mt-28 text-center">
        <h1 className="p-14 text-5xl tab:text-4xl tab:py-10 tab:px-0">
          Or you can contact with us
        </h1>
        <p className="text-2xl tab:text-lg">
          Get a free consultation and find out the cost of services
        </p>
        <div className="flex gap-8 pt-20 justify-center tab:pt-10 tab:flex-col tel:flex-col tel:pt-10">
          <button className="w-[240px] text-white flex items-center justify-center h-16 bg-[#71CF5B] rounded-[64px] tab:max-w-[600px] tab:w-full tel:w-full">
            <BsWhatsapp size={36} />
            <p className="text-xl ml-3">Whatsapp</p>
          </button>
          <button className="w-[240px] text-white flex items-center justify-center h-16 bg-[#53AAE3] rounded-[64px] tab:max-w-[600px] tab:w-full tel:w-full">
            <BsTelegram size={36} />
            <p className="text-xl ml-3">Telegram</p>
          </button>
          <button className="w-[240px] text-white flex items-center justify-center h-16 bg-[#A0A8B5] rounded-[64px] tab:max-w-[600px] tab:w-full tel:w-full">
            <HiOutlineMail size={36} />
            <p className="text-xl ml-3">E-mail</p>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Contact;
