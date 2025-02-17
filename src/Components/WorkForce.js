import React from "react";
import { testimonialsData } from "../assets/assets";

function WorkForce() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {testimonialsData.map((testimonial, index) => (
        <Card key={index} data={testimonial} />
      ))}
    </div>
  );
}

function Card({ data }) {
  const { name, title, image, alt, text } = data;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
      <img
        src={image}
        alt={alt || `Portrait of ${name}`}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
      />
      <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-3 text-gray-700 text-sm">{text}</p>
    </div>
  );
}

export default WorkForce;
