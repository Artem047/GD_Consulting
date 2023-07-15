import React from "react";
import Client from "../../assets/clients.png";
import stars from "../../assets/WorksWe/stars.png";

const Clients = () => {
  return (
    <section className="w-full my-44 px-[390px] lat:px-20 tab:px-5 tel:px-2">
      <h1 className="text-7xl text-center tab:text-4xl tel:text-3xl">
        100+ Satisfied Clients
      </h1>
      <article>
        <img
          src={Client}
          alt=""
          className="mt-28 mx-auto tab:w-[135px] tab:mt-10 tel:w-[135px] tel:mt-10"
        />
        <p className="text-[26px] mt-16 mx-auto tab:text-xl tab:mt-10 tel:text-base tel:mt-10">
          At G&D Consulting, we have successfully helped numerous clients in
          overcoming financial, tax, and accounting challenges. With a growing
          base of over 100 satisfied clients, our team of experts is
          well-equipped with the essential knowledge and expertise to prevent
          errors, ensure compliance, and capitalize on opportunities that others
          might overlook. By efficiently managing time-consuming tasks, we
          enable our clients to focus on their core business objectives and
          personal endeavors. <br /> <br /> Our commitment to cost-effectiveness
          and security has earned us the trust of a wide range of clients. We
          provide top-notch services without compromising on quality or the
          safeguarding of your confidential information. Our transparent and
          prompt communication guarantees clients remain well-informed and
          supported throughout our collaboration.
        </p>
      </article>
      <img src={stars} alt="" className="absolute right-10 mt-16" />
    </section>
  );
};

export default Clients;
