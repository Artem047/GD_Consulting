import { Link } from "react-router-dom";
import ExperienceBlock from "../../utils/Blocks/ExperienceBlock";
import { dataExperience } from "../../utils/data";
import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
  return (
    <section className="my-24 px-24 lat:px-12 tab:px-5 tel:px-2">
      <h1 className="text-7xl p-12 tab:text-4xl tab:p-0 tel:text-4xl tel:p-0">
        Experience
      </h1>
      <article className="flex tab:flex-col tel:flex-col">
        {dataExperience.map((e) => {
          return (
            <ExperienceBlock
              key={e.text}
              image={e.image}
              heading={e.heading}
              text={e.text}
            />
          );
        })}
      </article>
      <Link
        to="freeconsultation"
        className="mt-10 mx-auto w-full max-w-[600px] h-20 btn__arrow tab:mx-0 tab:h-16 tel:h-16">
        <p className="text-xl">Get free сonsultations</p>
        <BsArrowRight size={30} className="ml-3" />
      </Link>
    </section>
  );
};

export default Experience;
