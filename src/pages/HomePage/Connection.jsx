import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Connection = () => {
  return (
    <section className="w-full my-48 px-[450px] lat:px-28 tab:px-5 tel:px-2 tel:my-24">
      <h1 className="text-7xl text-center tab:text-4xl tel:text-3xl tel:text-left">
        Or you can contact with us
      </h1>
      <div className="flex justify-center gap-8 mt-20 tab:flex-col tab:mt-10 tel:flex-col tel:mt-10">
        <button className="w-[240px] h-20 bg-[#71CF5B] rounded-[64px] flex items-center justify-center tab:w-full tab:max-w-[580px] tel:w-full tel:max-w-[280px]">
          <BsWhatsapp color="white" size={36} />
          <p className="text-white text-[22px] ml-3">Whatsapp</p>
        </button>
        <button className="w-[240px] h-20 bg-[#53AAE3] rounded-[64px] flex items-center justify-center tab:w-full tab:max-w-[580px] tel:w-full tel:max-w-[280px]">
          <BsTelegram color="white" size={36} />
          <p className="text-white text-[22px] ml-3">Telegram</p>
        </button>
        <button className="w-[240px] h-20 bg-[#A0A8B5] rounded-[64px] flex items-center justify-center tab:w-full tab:max-w-[580px] tel:w-full tel:max-w-[280px]">
          <HiOutlineMail color="white" size={36} />
          <p className="text-white text-[22px] ml-3">E-mail</p>
        </button>
      </div>
      <p className="text-center text-[26px] mt-20 tab:text-[18px] tab:text-left tab:mt-10 tel:text-base tel:text-left tel:mt-10">
        Click for a free consultation and confidently achieve financial goals.
        Empower your business with our expert services. Act now!
      </p>
    </section>
  );
};

export default Connection;
