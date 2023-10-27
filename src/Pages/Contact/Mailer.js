import React from "react";
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
    <div className="hero bg-base-200 py-12 lg:px-6 mt-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Get in Touch
          </h1>
        </div>
        <div className="card w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleSendMail}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  name="user_message"
                  className="textarea textarea-bordered h-20"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mailer;
