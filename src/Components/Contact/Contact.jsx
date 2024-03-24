import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7l0lxg",
        "template_5s91ye7",
        form.current,
        "j6FR2oScObJI1OYdk"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully Send!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contact bg-red-">
      <div className="text-black max-w-[90%] md:max-w-[80%] bg-blue- mx-auto">
        <h1 className="text-[40px]">Contact Us</h1>
        <p className="text-justify py-2 text-[18px]">
          At the heart of every great production lies a team of dedicated
          professionals striving for excellence. As the Broadcast Producers
          Association, we are proud to bring together the brightest minds and
          most talented individuals in the industry to foster collaboration,
          innovation, and success. Whether you are a seasoned producer, aspiring
          filmmaker, or industry enthusiast, our association is your gateway to
          a world of opportunities. From networking events and workshops to
          resources and support, we provide the tools and connections you need
          to thrive in todays dynamic media landscape. Join us as we celebrate
          the art and craft of producing, champion creativity, and shape the
          future of broadcasting. Together, lets elevate the standard of
          excellence and inspire the next generation of storytellers. Explore
          the possibilities with the Broadcast Producers Association. Your
          journey starts here
        </p>

        <div className="Forms text-black">
          <form
            className="pt-4 w-12/12 md:w-8/12 h-11/12"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="w-full lg:w-11/12 my-5 ">
              <input
                id="fullName"
                className="w-full p-3 placeholder-black"
                placeholder="Name"
                name="user_name"
                required
              />
            </div>
            <div className="w-full lg:w-11/12 my-5 text-black">
              <input
                id="email_id"
                label="Your Email"
                className="w-full p-3 placeholder-black"
                placeholder="Your Email"
                name="user_email"
                required
              />
            </div>
            <div className="w-full lg:w-11/12 my-5 ">
              <textarea
                id="message"
                label="Message"
                className="w-full p-3 placeholder-black"
                placeholder="Message"
                name="message"
                required
              />
            </div>
            <div className="w-full lg:w-11/12 my-3 inter">
              <button
                className="bg-[#2ecc71] hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
