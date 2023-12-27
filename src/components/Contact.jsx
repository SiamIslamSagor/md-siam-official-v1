import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uxamm9f",
        "template_lsmgkoh",
        form.current,
        "HaVmkjWSRynCubcTj"
      )
      .then(
        result => {
          console.log(result.text);
          e.target.reset();
          Swal.fire({
            title: "Good job!",
            text: "Successfully send email!",
            icon: "success",
          });
        },
        error => {
          console.log(error.text);
          Swal.fire({
            title: "Bad news!",
            text: "Failed to send email!",
            icon: "error",
          });
        }
      );
  };

  return (
    <div id="contact">
      <p className="text-center mb-20">
        <span className="px-5 font-medium py-1 rounded-full bg-base-300 inline mb-10">
          Contact with me
        </span>
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="w-full  flex flex-col lg:flex-row mb-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="lg:mr-5 input input-bordered input-md lg:w-1/2 mb-2 "
          />
          <input
            type="text"
            name="user_email"
            placeholder="Your Email"
            className=" input input-bordered input-md lg:w-1/2  lg:ml-5"
          />
        </div>

        <textarea
          className="textarea textarea-bordered w-full h-32"
          placeholder="Type Message Here"
          name="message"
        ></textarea>

        <div className="text-center my-10">
          <button
            type="submit"
            className="btn text-lg btn-neutral max-sm:btn-sm max-sm:text-sm"
          >
            submit
          </button>
        </div>
        {/* 
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" /> */}
      </form>
    </div>
  );
};

export default Contact;
