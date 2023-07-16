import React from "react";
import image4 from "../assets/AccountingServices/image4.png";
import { BsArrowRight, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const ContactBlock = () => {
  return (
    <section className="px-24 py-20 lat:px-12 tab:px-5 tel:px-2">
      <img src={image4} alt="" className="mx-auto tab:w-[300px]" />
      <Link
        to="/freeconsultation"
        className="max-w-[340px] w-full h-20 btn__arrow mx-auto mt-12 bg-black text-white tab:max-w-[596px]">
        <p className="text-xl">Get free сonsultations</p>
        <BsArrowRight size={32} className="ml-3" />
      </Link>
      <article className="mt-28 text-center">
        <h1 className="p-14 text-5xl tab:text-4xl tab:py-10 tab:px-0">
          Or you can contact with us
        </h1>
        <p className="text-2xl tab:text-lg">
          Get a free consultation and find out the cost of services
        </p>
        <div className="flex gap-8 pt-20 justify-center tab:pt-10 tab:flex-col tel:flex-col tel:pt-10">
          <Link
            target="_blank"
            to="https://www.whatsapp.com/"
            className="w-[240px] text-white flex items-center justify-center h-16 bg-[#71CF5B] rounded-[64px] tab:max-w-[600px] tab:w-full tel:w-full">
            <BsWhatsapp size={36} />
            <p className="text-xl ml-3">Whatsapp</p>
          </Link>
          <Link
            target="_blank"
            to="https://telegram.org/"
            className="w-[240px] text-white flex items-center justify-center h-16 bg-[#53AAE3] rounded-[64px] tab:max-w-[600px] tab:w-full tel:w-full">
            <BsTelegram size={36} />
            <p className="text-xl ml-3">Telegram</p>
          </Link>
          <Link
            target="_blank"
            to="email:consulting@gmail.com"
            className="w-[240px] text-white flex items-center justify-center h-16 bg-[#A0A8B5] rounded-[64px] tab:max-w-[600px] tab:w-full tel:w-full">
            <HiOutlineMail size={36} />
            <p className="text-xl ml-3">E-mail</p>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ContactBlock;
