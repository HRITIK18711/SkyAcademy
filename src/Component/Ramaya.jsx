import React from 'react';

const images = [
  { image: `/Image/Ramaya/01.jpg` },
  { image: `/Image/Ramaya/02.jpg` },
  { image: `/Image/Ramaya/03.jpg` },
  { image: `/Image/Ramaya/04.jpg` },
  { image: `/Image/Ramaya/05.jpg` },
  { image: `/Image/Ramaya/06.jpg` },
  { image: `/Image/Ramaya/07.jpg` },
  { image: `/Image/Ramaya/08.jpg` },
  { image: `/Image/Ramaya/09.jpg` },
  { image: `/Image/Ramaya/10.jpg` }
];

export default function Ramaya({ onBack }) {
  return (
    <div className="bg-emerald-200 text-white px-4 py-8 min-h-screen relative">
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-5 left-5 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md z-10"
      >
        ← Back to Shows
      </button>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-10">
        Ramaya Moments
      </h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={`Ramaya ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}