import disk from "../../assets/WorksWe/disk.png";
import stars from "../../assets/WorksWe/stars.png";

const WorksWe = () => {
  return (
    <section className="w-full flex flex-col my-24 items-center">
      <div className="absolute left-0 lat:w-[235px] lat:h-[275px] tab:hidden tel:hidden">
        <img src={disk} alt="" />
      </div>
      <div className="absolute right-20">
        <img src={stars} alt="" />
      </div>
      <article className="mt-[196px] w-full px-[390px] text-center lat:px-12 tab:px-5 tel:px-2">
        <h1 className="text-[120px] text-center lat:text-[80px] tab:text-6xl tel:text-5xl">
          What we do
        </h1>
        <p className="text-3xl text-center mt-16 lat:text-[26px] tab:text-xl tel:w-full tel:text-base">
          We provide accounting services, tax consultancy and financial
          solutions to help you stay ahead of the game from all key sectors of
          the economy. <br /> <br />
          Relying on our unrivalled multi-year experience, you will be able to
          discover new ways of development and find winning opportunities.
        </p>
        <button className="w-full h-16 mt-16 btn tab:max-w-[600px]">
          More about us
        </button>
      </article>
    </section>
  );
};

export default WorksWe;
