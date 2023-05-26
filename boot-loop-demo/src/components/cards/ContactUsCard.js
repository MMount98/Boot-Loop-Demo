import { Input } from "react-daisyui";

export default function ContactUs() {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-center text-4xl font-Oswald text-primary mb-6">
          Email Us
        </h2>
        <form className="mx-auto lg:w-1/2">
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="grid-email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-neutral border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                id="grid-message"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-primary hover:bg-accent focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
