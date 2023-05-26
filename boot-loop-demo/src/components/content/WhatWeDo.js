import { useState } from "react";
import WhatWeDoCard from "../cards/WhatWeDoCard";

export default function WhatWeDo() {
  const [content, setContent] = useState([
    {
      id: 1,
      title: "Tv Repair",
      description:
        "Don't Throw Away Broken Tv, We Can Repair Mulitple Brands of Tv",
      details: (
        <ul className="py-4 pl-5">
          <li>Knowledgeable on Multiple Brands</li>
          <li>Repair on Site</li>
          <li>At Home Repair</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Tech Recyling",
      description:
        "We can take care of any of your old and broken down Hardware for safe Deposting",
      details: (
        <ul className="py-4 pl-5">
          <li>We offer responsible and eco-friendly tech recycling services.</li>
          <li>Drop off Bins For Recyling Tech</li>
          
        </ul>
      ),
    },
    {
      id: 3,
      title: "Tech Repair",
      description: "We can reapir your old and broken hardwar",
      details: (
        <ul className="py-4 pl-5">
          <li>Knowledgeable on Multiple Brands</li>
          <li>Repair on Site</li>
          <li>At Home Repair</li>
        </ul>
      ),
    },
  ]);

  return (
    <>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <WhatWeDoCard content={content} />
      </div>
    </>
  );
}
