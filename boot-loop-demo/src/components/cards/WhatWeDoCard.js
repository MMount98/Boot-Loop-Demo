import { useState } from "react";

export default function WhatWeDoCard(props) {
  const content = props.content;

  return (
    <>
      {content.map((card) => (
        <div
          key={card.id}
          className="card w-full sm:w-72 sm:m-3 md:m-3 my-4 bg-base-100 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105"
        >
          <div className="p-4">
            <h2 className="text-xl sm:text-2xl card-title font-Oswald text-gray-900 mb-2">
              {card.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              {card.description}
            </p>
            <div className="card-actions justify-end mt-4">
              <label
                htmlFor={`my-modal-${card.id}`}
                className="btn text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-300"
              >
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
            <div className="modal-box relative p-4 rounded-lg bg-white">
              <label
                htmlFor={`my-modal-${card.id}`}
                className="btn btn-sm btn-circle absolute right-2 top-2 text-secondary"
              >
                ✕
              </label>
              <h3 className="text-2xl sm:text-3xl font-bold font-Oswald text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.details}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
