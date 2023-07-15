const SpecifityBlock = ({ image, heading, text }) => {
  return (
    <div className="max-w-[570px] w-full h-full max-h-[681px] px-24 lat:px-12 tab:px-5 tel:px-2">
      <img src={image} alt="" />
      <h2 className="text-5xl w-full max-w-[450px] mt-12 lat:text-3xl tab:text-xl font-bold tab:mt-5 tel:text-xl tel:mt-5">
        {heading}
      </h2>
      <p className="text-xl mt-8 lat:text-lg tab:mt-0 tab:text-base tel:text-base tel:mt-5">
        {text}
      </p>
    </div>
  );
};

export default SpecifityBlock;
