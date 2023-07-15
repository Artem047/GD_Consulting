import React from "react";
import star from "../assets/WorksWe/stars.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import { BsArrowRight } from "react-icons/bs";
import { AboutBrands } from "../utils/data";
import ContactBlock from "../components/ContactBlock";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-full px-24 my-24 lat:px-12 tab:px-5 tel:px-2">
        <img
          src={star}
          alt=""
          className="absolute right-40 top-28 tab:hidden tel:hidden"
        />
        <section className="text-center">
          <h1 className="text-7xl px-14 tab:px-0 tab:text-4xl tel:text-3xl tel:px-0">
            A team of experts in taxes, accounting and financial consulting
          </h1>
          <p className="text-2xl px-14 pt-16 tab:pt-7 tab:px-0 tel:text-base tel:px-0 tel:pt-7">
            Growth and Development Consulting (G&D Consulting) is a goal-driven
            and innovative finance leader with a proven track record
            of performance improvement in highly competitive markets.
          </p>
        </section>
        <section className="flex mt-28 py-20 items-center lat:py-12 tab:flex-col tel:flex-col">
          <img
            src={about1}
            alt=""
            className="px-20 py-12 max-w-full lat:p-0 lat:w-[520px] tab:w-full tab:p-0 tel:p-0"
          />
          <div className="lat:px-7">
            <h2 className="text-5xl lat:text-4xl tab:pt-10 tab:text-4xl tel:text-3xl">
              A reliable consulting company is the key to a successful business
            </h2>
            <p className="text-xl pt-14 lat:pt-10 tab:text-lg tab:pt-7 tel:pt-6 tel:text-base">
              With over 10 years of experience in industries such as accounting,
              audit, IT, automotive, engineering and construction, our strong
              analytical and leadership skills make us the ideal partner for
              businesses seeking success in the UAE.
            </p>
          </div>
        </section>
        <section className="my-28 flex items-center tab:flex-col-reverse tel:flex-col-reverse">
          <div className="px-16 py-10 tab:p-0 tel:p-0">
            <h2 className="text-5xl lat:text-4xl tab:text-4xl tel:text-3xl">
              We implement your business ideas and plans with the help of G&D
              Consulting
            </h2>
            <p className="text-xl py-14 lat:py-10 tab:py-7 tel:py-5 tel:text-base">
              We offer a full range of professional services, including
              accounting, consulting, tax and audit support, as well as legal
              advice.We specialize in advising on business creation and
              corporate tax regulations, drawing on a deep understanding of the
              local market and industry insights.
            </p>
            <button className="btn__arrow w-[320px] h-16 text-xl tab:max-w-[590px] tab:w-full tel:w-full">
              <p>Submit your application</p>
              <BsArrowRight size={32} className="ml-3" />
            </button>
          </div>
          <img src={about2} alt="" className="max-w-full lat:w-[470px]" />
        </section>
        <section className="flex gap-12 my-28 lat:gap-7 tab:flex-col tab:gap-7 tel:flex-col">
          <article className="h-[425px] w-full border rounded-[48px] border-black px-20 py-16 lat:h-[450px] lat:px-7 lat:py-10 tab:h-[350px] tab:p-7 tel:h-[420px] tel:p-5">
            <h1 className="text-5xl lat:text-4xl tab:text-3xl tel:text-2xl">
              Strategic Business support in the UAE
            </h1>
            <p className="pt-4 text-xl tab:text-lg tel:text-base">
              Our team specializes in providing accounting and tax services in
              the UAE, providing financial advice tailored to your needs.
            </p>
          </article>
          <article className="h-[425px] w-full border rounded-[48px] border-black px-20 py-16 lat:h-[420px] lat:px-7 lat:py-10 tab:h-[350px] tab:p-7 tel:h-[420px] tel:p-5">
            <h1 className="text-5xl lat:text-4xl tab:text-3xl tel:text-2xl">
              Combination of global and local experience
            </h1>
            <p className="pt-4 text-xl tab:text-lg tel:text-base">
              Combining global expertise with local market knowledge, we provide
              exceptional service, promptly and efficiently addressing customer
              issues and concerns.
            </p>
          </article>
        </section>
        <section>
          <h1 className="text-5xl py-14">We are trusted</h1>
          <div className="flex gap-12 my-10 px-14 tab:flex-col tel:flex-col tab:p-0 tel:p-0">
            <article className="w-full h-[230px] border border-black bg-[#EBF3FF] rounded-[48px] px-20 py-16 lat:p-10 lat:h-[300px] tab:p-7 tel:p-7">
              <p className="text-xl tab:text-lg tel:text-base">
                We are committed to providing high quality consistent services
                with integrity and reliability, helping clients seize
                opportunities and minimize risks.
              </p>
            </article>
            <article className="w-full h-[230px] border border-black bg-[#F6F6F6] rounded-[48px] px-20 py-16 lat:p-10 lat:h-[300px] tab:p-7 tel:p-7">
              <p className="text-xl tab:text-lg tel:text-base">
                We believe that effective communication and proactive,
                results-driven approaches are integral to success for
                entrepreneurial leaders.
              </p>
            </article>
          </div>
          <article className="flex items-center gap-6 justify-center py-24 tab:flex-col tel:flex-col">
            {AboutBrands.map((e) => {
              return (
                <div className="w-[210px] h-[105px] border rounded-3xl flex items-center justify-center border-black tab:w-full tel:w-full">
                  <img src={e.image} alt="" />
                </div>
              );
            })}
          </article>
        </section>
      </div>
      <ContactBlock />
    </>
  );
};

export default AboutUs;
