import { SlArrowRight } from "react-icons/sl";

const FunctioningBlock = ({ text, color }) => {
  const blockClassName = `max-w-[575px] w-full h-[400px] px-[56px] rounded-[48px] border-2 border-black lat:px-10 lat:h-[410px] tab:h-[225px] tel:h-[310px] ${color}`;

  return (
    <div>
      <div className={blockClassName}>
        <p className="py-[64px] text-[26px] lat:text-xl lat:py-10 tab:text-base tab:py-7 tel:text-base tel:py-7">
          {text}
        </p>
        <button className="bg-white rounded-[64px] w-[112px] flex justify-center pointer-events-none items-center h-20 tab:w-20 tab:h-14 tel:w-20 tel:h-14">
          <SlArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default FunctioningBlock;
