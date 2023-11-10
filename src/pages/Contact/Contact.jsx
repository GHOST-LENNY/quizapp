import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="pt-6 px-4 mx-auto bg-emerald-400 max-w-screen-md h-screen">
      <h2 className="font-bold text-4xl text-center mb-4">Contact Me</h2>
      <p className="font-medium mb-4 text-center text-gray-700 text-sm sm:text-xl">
        Got a job offer? Want to send feedback? Let me know 🙂
      </p>

      <form action="#" method="post">
        <div className="flex flex-row">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="firstName"
              className="block my-2 text-sm font-medium text-gray-700 "
            >
              First Name
            </label>
            <input
              className="block w-full rounded-lg shadow-lg text-sm p-2.5 bg-gray-50
               placeholder-gray-400 border-none outline-none
                ring-2 ring-gray-300 focus:ring-gray-400 focus:ring-2"
              type="text"
              placeholder="First Name"
              required
            />
          </div>

          <div className="w-1/2 pl-2">
            <label
              htmlFor="lastName"
              className="block my-2 text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              className="block w-full rounded-lg shadow-md text-sm p-2.5 bg-gray-50
               placeholder-gray-400 border-none outline-none ring-2 ring-gray-300
                focus:ring-gray-400 focus:ring-2"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block my-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            className="block w-full rounded-lg shadow-md text-sm p-2.5 bg-gray-50
          placeholder-gray-400 border-none outline-none ring-2 ring-gray-300
          focus:ring-2 focus:ring-gray-400"
            type="email"
            placeholder="abc@gmail.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block my-2 text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            name=""
            className="block w-full rounded-lg shadow-md text-sm p-2.5 bg-gray-50
          placeholder-gray-400 border-none outline-none ring-2 ring-gray-300
          focus:ring-2 focus:ring-gray-400"
            placeholder="Query/Suggestion..."
            id=""
            rows="8"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            onSubmit={(event) => event.preventDefault()}
            className="mt-4 p-2 text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="flex py-4 gap-4 justify-center text-2xl">
        <a href="tel:+2348138675766">
          <FaPhone className="text-blue-500" />
        </a>
        <a href="mailto:lennyddon@gmail.com">
          <BiLogoGmail />
        </a>
        <a href="http://wa.me?08138675766">
          <FaWhatsapp className="text-green-500 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
