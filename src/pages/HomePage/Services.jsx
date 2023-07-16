import ServicesBlock from "../../utils/Blocks/ServicesBlock";

const Services = () => {
  return (
    <section className="my-7 px-24 lat:px-6 tab:px-5 tel:px-2">
      <h1
        id="services"
        className="text-7xl p-12 tab:text-4xl tab:p-10 font-bold tel:text-3xl tel:p-0">
        Services we provide
      </h1>
      <ServicesBlock />
    </section>
  );
};

export default Services;
