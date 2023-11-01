import React from "react";
import Heading from "../view/Heading";

import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Mailer = () => {
  const handleSendMail = async (e) => {
    e.preventDefault();
    const res = await emailjs.sendForm(
      "service_kjvervy",
      "template_7bzyx1q",
      e.target,
      "t3J5PCkrtk1pVuUSq"
    );

    if (res.status === 200) {
      toast.success("Mail Sent", { id: "sendSuccess" });
    } else {
      toast.error("Something Went Wrong", { id: "sendFailed" });
    }
  };
  return (
    <div className="h-full flex flex-col justify-around">
      <Heading label="Stay in Touch" text="text-[#1D3557]" />
      <h1 className="text-center md:text-xl text-[#457B9D] font-semibold w-full md:w-5/6 lg:w-2/3 mx-auto">
        Whether you have questions about giving job opportunities, ideas to
        propose, or want to reach out and say hello, please don't hesitate to do
        so.
      </h1>
      <div className="">
        <form
          onSubmit={handleSendMail}
          className="w-full md:w-5/6 lg:w-2/3 mx-auto"
        >
          <div className="md:grid md:grid-cols-2">
            <div className="md:mx-6">
              <label
                htmlFor="user_name"
                className="block mb-2 text-[#457B9D] text-sm md:text-base"
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="border-b border-[#457B9D] text-sm md:text-xl py-2 bg-[#f1faee] focus:outline-none text-[#457B9D] block w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="md:mx-6 mt-6 md:mt-0">
              <label
                htmlFor="user_email"
                className="block mb-2 text-[#457B9D] text-sm md:text-base"
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="border-b border-[#457B9D] text-sm md:text-xl py-2 bg-[#f1faee] focus:outline-none text-[#457B9D] block w-full "
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="md:mx-6 mt-6 md:mt-10">
            <label
              htmlFor="user_message"
              className="block mb-2 text-[#457B9D] text-sm md:text-base"
            >
              Your Message
            </label>
            <textarea
              type="text"
              name="user_message"
              id="user_message"
              className="border-b border-[#457B9D] text-sm md:text-xl  bg-[#f1faee] focus:outline-none text-[#457B9D] block w-full "
              placeholder="Hi there, it's my view that we should bring in a Web Developer to enhance our products at Company X. What's your availability like for a discussion on this matter?"
              required
            />
          </div>
          <div className="text-center mt-6 md:mt-10">
            <button
              type="submit"
              className="relative group inline-block transition-transform border border-[#1D3557] font-semibold uppercase py-1 text-[#1D3557] w-40 h-10 md:w-56 md:h-12 text-sm md:text-base"
            >
              <span className="z-10 group-hover:text-[#F1FAEE] relative">
                Send
              </span>
              <span className="absolute inset-0 bg-[#1D3557] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform z-0 duration-300 ease-out">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mailer;
