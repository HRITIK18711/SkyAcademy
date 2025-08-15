import React from 'react';

const images = [
  { image: `/Image/Extra/(1).jpg` },
  { image: `/Image/Extra/(2).jpg` },
  { image: `/Image/Extra/(3).jpg` },
  { image: `/Image/Extra/(4).jpg` },
  { image: `/Image/Extra/(5).jpg` },
  { image: `/Image/Extra/(6).jpg` },
  { image: `/Image/Extra/(7).jpg` },
  { image: `/Image/Extra/(8).jpg` },
  { image: `/Image/Extra/(9).jpg` },
  { image: `/Image/Extra/(10).jpg` },
  { image: `/Image/Extra/(11).jpg` }, 
];

export default function Holi_fest({ onBack }) {
  return (
    <div className="bg-emerald-200 text-white px-4 py-8 min-h-screen">

      {/* Header container */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md w-full sm:w-auto text-center"
        >
          ← Back to Shows
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center sm:text-right">
          Holi Fest
        </h2>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-3/4 h-80 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={`Holi ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}