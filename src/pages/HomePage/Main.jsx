import React from "react";
import Man from "../../assets/man.png";
import Trust from "../../assets/Trust.png";
import whatsapp from "../../assets/whatsapp.png";

const Main = () => {
  return (
    <section className="flex px-24 lat:px-12 tab:px-0 tab:flex-col tel:flex-col tel:px-0">
      <article className="flex items-end tab:flex-col tab:items-center tab:justify-end bg-[#F6F6F6] max-w-[1284px] w-full max-h-[730px] rounded-3xl lat:h-[645px] tab:w-full tab:h-[640px] tab:mt-20 tel:mt-20 tel:h-[715px] tel:w-full tel:flex-col tel:items-center tel:justify-end">
        <div className="pl-14 lat:text-center tab:pl-0 tab:text-center tel:pl-0">
          <h1 className="text-4xl lat:w-[575px] tab:text-4xl tab:text-center tab:mt-10 tel:text-3xl tel:text-center">
            Take сontrol of your finances with our reliable services
          </h1>
          <p className="text-xl pt-6 tab:text-[18px] tab:text-center tel:text-base tel:text-center">
            Financial planning, tax consultancy and accounting solutions
          </p>
          <button className="w-[220px] h-[64px] mt-[340px] mb-12 btn lat:mt-[219px] tab:w-[300px] tab:mt-7 tel:mt-9 tel:w-[300px] tel:ml-0">
            <p>Learn more</p>
          </button>
        </div>
        <img
          src={Man}
          alt=""
          className="max-h-[630px] w-full h-full lat:hidden tab:w-[310px] tab:h-[300px] tel:h-[300px]"
        />
      </article>
      <article className="flex flex-col pl-6 tab:flex-col-reverse tab:p-5 tab:ml-0 tel:flex-col tel:pl-0 tel:p-2">
        <div className="bg-[#EBF3FF] flex items-center max-w-[580px] w-full h-[177px] border-2 border-black rounded-tr-[100px] rounded-t-none lat:w-[306px] tab:w-full tel:w-full tel:px-6">
          <img
            src={Trust}
            alt=""
            className="pl-10 lat:pl-0 tab:pl-0 lat:w-[120px] lat:h-[85px] tel:w-[107px] tel:h-[87px] tel:pl-0"
          />
          <p className="w-full text-xl p-4 font-bold">Trusted by Companies</p>
        </div>
        <div className="bg-[#fff] flex items-center px-12 max-w-[580px] w-full h-[177px] border-2 border-black rounded-tr-[100px] rounded-t-none lat:w-[306px] tab:mt-6 tab:w-full tel:w-full tel:px-6">
          <h1 className="text-5xl font-bold">100+</h1>
          <p className="w-full text-xl p-4 font-bold">Satisfied Clients</p>
        </div>
        <div className="max-w-[580px] w-full h-[353px] p-10 bg-[#465976] mt-6 rounded-t-[48px] rounded-br-[48px] lat:w-[306px] lat:h-[270px] tab:px-5 tab:h-36 tab:rounded-[28px] tab:flex tab:justify-between tab:items-center tel:w-full tel:h-[230px] tel:p-7">
          <h1 className="text-[44px] text-white lat:pt-7 lat:text-3xl tab:pt-0 tab:text-2xl tab:w-48 tel:text-3xl tel:pt-0">
            Get quick free сonsultations
          </h1>
          <button className="flex items-center mt-10 justify-center rounded-[32px] w-full bg-white max-w-[283px] h-[64px] lat:w-[215px] tab:mt-0 tel:mt-7 tel:w-[215px]">
            <img src={whatsapp} alt="" />
            <p className="text-base p-3">Contact Us</p>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Main;
