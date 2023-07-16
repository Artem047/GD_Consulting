import React, { useState } from "react";
import { useForm } from "react-hook-form";
import modal2 from "../assets/modal2.png";

const FreeConsultation = () => {
  const [submit, setSubmit] = useState(false);
  const [modal, setModal] = useState(false);
  const [formError, setFormError] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleSubmitForm = (data) => {
    if (data.name && data.email && data.text) {
      setFormError(false);
      setSubmit(true);
      setModal(true);
    } else {
      setFormError(true);
    }
  };
  const closeModal = () => {
    setModal(false);
    reset();
  };

  return (
    <div className="w-full h-full text-center">
      {modal ? (
        <div className="w-full h-full flex flex-col items-center text-center tab:px-5 tel:px-2">
          <h1 className="text-7xl w-full text-center pt-16 tab:text-4xl tab:pt-20 tel:text-3xl">
            Application sent! <br /> We will contact you shortly!
          </h1>
          <article className="flex my-10 text-center justify-center tab:justify-center tel:justify-center">
            <img src={modal2} alt="" />
          </article>
          <button
            onClick={closeModal}
            type="submit"
            className="max-w-[700px] w-full my-10 h-20 bg-black text-white rounded-[40px] text-xl">
            Send request again
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-7xl py-10 tab:pt-24 tel:pt-24">
            Let's work together!
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="text-[22px] my-10 w-full max-w-[700px] flex flex-col mx-auto gap-8 tab:px-5 tel:gap-5 tel:text-base tel:px-2">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your name"
              className="w-full h-20 border-2 rounded-[40px] py-6 px-8 outline-none"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="w-full h-20 border-2 rounded-[40px] py-6 px-8 outline-none"
              required
            />
            <input
              {...register("text", { required: true })}
              type="text"
              placeholder="What is your request?"
              className="w-full h-20 border-2 rounded-[40px] py-6 px-8 outline-none"
              required
            />
            <textarea
              name="text"
              {...register("text", { required: true })}
              placeholder="Tell more about your request"
              className="w-full h-[200px] border-2 rounded-[40px] px-8 py-6 outline-none"
              cols="30"
              rows="10"
              required></textarea>
            <button
              type="submit"
              className="w-full h-20 bg-black text-white rounded-[40px] text-xl"
              disabled={formError}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FreeConsultation;
