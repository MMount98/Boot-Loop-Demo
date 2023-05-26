import About from "../content/About";
import ContactUs from "../content/ContactUs";
import WhatWeDo from "../content/WhatWeDo";

export default function Home() {
  return (
    <div className="bg-base-200">
      <div className="flex flex-col md:flex-row items-start justify-around p-4 md:px-48">
        <About />
      </div>
      <div className="divider divider-vertical before:bg-neutral after:bg-neutral mx-20"></div>
      <h2 className="text-center text-6xl m-6 font-Oswald text-primary">
        What We Do
      </h2>
      <div className="flex flex-col sm:flex-row justify-around px-4 sm:px-8 md:px-44 py-4">
        <WhatWeDo />
      </div>
      <div className="divider divider-vertical before:bg-neutral after:bg-neutral mx-20"></div>
      <h2 className="text-center text-6xl m-6 font-Oswald text-primary">
        Contact Us
      </h2>
      <ContactUs />
    </div>
  );
}
