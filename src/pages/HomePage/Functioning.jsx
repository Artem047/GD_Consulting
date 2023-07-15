import medicine from "../../assets/medicine.png";
import FunctioningBlock from "../../utils/Blocks/FunctioningBlock";
import { dataFunctioning } from "../../utils/data";

const Functioning = () => {
  return (
    <section className="my-28 w-full px-24 lat:px-12 tab:px-2 tel:px-2">
      <img
        src={medicine}
        className="pt-20 pl-10 tab:hidden tel:hidden"
        alt=""
      />
      <article className="grid grid-cols-3 gap-x-0 gap-y-0 grid-rows-2 tab:flex tab:flex-col tel:flex tel:flex-col">
        <h2 className="text-[72px] w-full p-12 lat:p-8 tab:text-4xl tab:p-10 tel:text-4xl tel:p-6">
          Our principles
        </h2>
        {dataFunctioning.map((data) => {
          return (
            <FunctioningBlock
              text={data.text}
              color={data.color}
              key={data.text}
            />
          );
        })}
      </article>
    </section>
  );
};

export default Functioning;
