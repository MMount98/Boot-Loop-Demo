import { Input } from "react-daisyui";

export default function ContactUsCard() {
  const labelClass = "block mb-2 text-lg font-semibold";
  const inputClass = "w-full h-10 text-xl pl-2 rounded shadow-xl bg-white";

  return (
    <>
      <form className="space-y-4 bg-base-300 p-4 rounded-box">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Reach Out!</h2>
          <p className="text-lg text-gray-700">Send Me a Message!</p>
        </div>
        <div>
          <label htmlFor="from_name" className={labelClass}>
            Your Name
          </label>
          <Input
            id="from_name"
            name="from_name"
            type="text"
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="from_email" className={labelClass}>
            Your Email
          </label>
          <Input
            id="from_email"
            name="from_email"
            type="email"
            placeholder="Enter your email"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            What Can I help you with?
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={3}
            className="w-full text-xl rounded shadow-xl p-2"
          />
        </div>
        <div className="mt-6">
          <button className="btn btn-primary rounded-3xl w-full" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
}
