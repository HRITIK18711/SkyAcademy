import React from 'react';

const images = [
  { image: `/Image/Virangna/(1).jpg` },
  { image: `/Image/Virangna/(2).jpg` },
  { image: `/Image/Virangna/(3).jpg` },
  { image: `/Image/Virangna/(4).jpg` },
  { image: `/Image/Virangna/(5).jpg` },
  { image: `/Image/Virangna/(6).jpg` },
  { image: `/Image/Virangna/(7).jpg` },
  { image: `/Image/Virangna/(8).jpg` },
  { image: `/Image/Virangna/(9).jpg` },
  { image: `/Image/Virangna/(10).jpg` }
];

export default function Virangna({ onBack }) {
  return (
    <div className="bg-emerald-200 text-white px-4 py-8 min-h-screen">

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8">
        <button
          onClick={onBack}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md w-full sm:w-auto text-center"
        >
          ← Back to Shows
        </button>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-black text-center sm:text-right w-full">
          Virangna Moments
        </h2>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-4/5 md:w-3/4 aspect-[4/3] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={`Virangna ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}