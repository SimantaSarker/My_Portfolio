import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0dhh8ev",
        "template_6fyw85w",
        form.current,
        "xOJKDuiTXedkN9dIu"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        ref={form}
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={sendEmail}
      >
        <div className="pb-8 text-gray-400">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 ">
            Contact
          </p>
          <p className="py-4 text-xl">
            Submit the Form or shoot me an email -- simantasarker0000@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd3d1]"
          type="text"
          placeholder="Name"
          name="from_name"
        />
        <input
          className="my-4 p-2 bg-[#c2c9c7]"
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <textarea
          className="bg-[#bfc6c4] p-2"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <input
          type="submit"
          className="btn mt-10 border-2 w-[40%] mx-auto hover:bg-pink-300"
          value="Submit"
        />
      </form>

      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </div>
  );
};

export default Contact;
