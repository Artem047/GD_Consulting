import { useState } from "react";
import modal1 from "../../assets/modal1.png";
import modal2 from "../../assets/modal2.png";
import { useForm } from "react-hook-form";

const ContactHome = () => {
  const [submit, setSubmit] = useState(false);
  const [modal, setModal] = useState(false);
  const [formError, setFormError] = useState(false);

  const { register, handleSubmit } = useForm();

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
  };
  return (
    <section className="w-full my-[180px] tel:my-0">
      {modal ? (
        <div className="w-full h-full text-center tab:px-5 tel:px-2">
          <h1 className="text-7xl w-full text-center pt-16 tab:text-4xl tel:text-3xl">
            Application sent! <br />
            We will contact you shortly!
          </h1>
          <article className="mt-20 flex text-center items-center justify-between tab:justify-center tel:justify-center">
            <img src={modal1} alt="" className="tab:hidden tel:hidden" />
            <img src={modal2} alt="" className="w-[150px] h-[150px]" />
            <div></div>
          </article>
          <button
            onClick={closeModal}
            type="submit"
            className="max-w-[700px] w-full mt-20 h-20 bg-black text-white rounded-[40px] text-xl">
            Send request again
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-7xl pt-14 text-center tab:text-4xl tel:text-3xl">
            Let’s work together!
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="text-[22px] w-full max-w-[700px] mt-20 flex flex-col mx-auto gap-8 tab:px-5 tab:mt-10 tel:gap-5 tel:text-base tel:mt-10 tel:px-2">
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
    </section>
  );
};

export default ContactHome;
