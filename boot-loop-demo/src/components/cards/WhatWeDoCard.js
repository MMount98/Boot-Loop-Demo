import { useState } from "react";

export default function WhatWeDoCard(props) {
  const content = props.content;

  return (
    <>
      {content.map((card) => (
        <div key={card.id} className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-Oswald text-white">{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-actions justify-end">
              <label htmlFor={`my-modal-${card.id}`} className="btn">
                Learn More
              </label>
            </div>
          </div>
          <input
            type="checkbox"
            id={`my-modal-${card.id}`}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor={`my-modal-${card.id}`}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-3xl font-bold font-Oswald text-white">
                {card.title}
              </h3>
              {card.details}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
