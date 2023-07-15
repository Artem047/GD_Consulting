import React, { useState } from "react";
import CustomLink from "./CustomLink";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlinePhone, HiMail } from "react-icons/hi";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="flex w-full z-40 justify-between px-28 items-center bg-white lat:px-12 tab:px-5 tab:top-0 tab:fixed tab:h-20 tel:fixed tel:top-0 tel:px-3">
      <CustomLink
        to="/"
        className="my-12 lat:w-[214px] lat:h-[30px] tab:my-5 tel:my-4 tel:w-[140px] tel:h-5">
        <img src={logo} alt="image" />
      </CustomLink>
      <div className="flex text-xl gap-10 lat:ml-24 lat:gap-7 tab:hidden tel:hidden">
        <NavLink to="accountant">Accounting Services</NavLink>
        <NavLink to="tax">Tax Consulting</NavLink>
        <NavLink to="finance">Financial Consulting</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink to="contacts">Contact</NavLink>
      </div>
      <div
        className={
          showModal
            ? "fixed left-0 top-0 w-full h-full bg-[#fff] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        <div className="hidden tab:block tel:block">
          <CustomLink onClick={closeModal} to="/">
            <img
              src={logo}
              alt=""
              className="w-[220px] h-7 m-5 tel:w-[140px] tel:h-5"
            />
          </CustomLink>
          <div className="flex flex-col items-center tel:pl-2">
            <div className="flex flex-col text-xl gap-10 p-5">
              <NavLink onClick={closeModal} to="accountant">
                Accounting Services
              </NavLink>
              <NavLink onClick={closeModal} to="tax">
                Tax Consulting
              </NavLink>
              <NavLink onClick={closeModal} to="finance">
                Financial Consulting
              </NavLink>
              <NavLink onClick={closeModal} to="about">
                About Us
              </NavLink>
              <NavLink onClick={closeModal} to="contacts">
                Contact
              </NavLink>
            </div>
            <div className="w-full flex flex-col p-5 tel:p-2">
              <Link className="flex items-center p-5 tel:p-2">
                <HiOutlinePhone size={30} />
                <p className="text-xl">+971 56 840 0795</p>
              </Link>
              <Link className="flex items-center p-5 tel:p-2">
                <HiMail size={30} />
                <p className="text-xl">consulting@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden tab:block z-20 m-5 ml-auto tel:block">
        {showModal ? (
          <AiOutlineClose
            onClick={closeModal}
            size={30}
            className="cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={handleClickModal}
            size={30}
            className="cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
