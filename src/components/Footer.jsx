import React from "react";
import CustomLink from "./CustomLink";
import { NavLink } from "react-router-dom";
import logoFooter from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 px-[100px] lat:px-12 lat:py-14 tab:py-10 tel:py-10 tel:px-7">
      <div className="flex items-center tab:flex-col tab:items-center tab:justify-center tel:flex-col tel:items-center tel:justify-center">
        <CustomLink to="/">
          <img
            src={logoFooter}
            alt="image"
            className="lat:w-[214px] tab:w-[260px] tel:w-[260px]"
          />
        </CustomLink>
        <nav className="ml-[215px] flex gap-10 text-xl lat:ml-24 lat:gap-7 lat:text-[18px] tab:flex-col tab:ml-0 tab:mt-10 tab:gap-7 tab:text-center tel:flex-col tel:ml-0 tel:mt-10 tel:gap-7 tel:text-center">
          <NavLink to="accountant">Accounting Services</NavLink>
          <NavLink to="tax">Tax Consulting</NavLink>
          <NavLink to="finance">Financial Consulting</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink to="contacts">Contact</NavLink>
        </nav>
      </div>
      <div className="bg-[#A0A8B5] border-b-2 max-w-[1655px] w-full mt-12 lat:w-full tab:w-full tel:w-full"></div>
      <div className="text-xl flex justify-between mt-7 tab:flex-col tab:justify-center tab:text-lg tab:gap-5 tel:flex-col tel:justify-center tel:gap-5">
        <p>© 2023 G&D Consulting</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
