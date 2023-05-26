import About from "../content/About";
import WhatWeDo from "../content/WhatWeDo";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col md:flex-row items-start justify-around p-4 md:px-48  ">
          <About />
        </div>
        <div className="divider divider-vertical before:bg-base-100 after:bg-base-100 mx-20"></div>
        <h2 className="text-center text-6xl m-6">What We Do</h2>
        <div className="flex justify-around px-44 py-4">
          <WhatWeDo />
        </div>
      </div>
    </>
  );
}
