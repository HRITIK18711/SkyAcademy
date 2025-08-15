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
    <div className="bg-emerald-200 text-white px-4 py-8 min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8">
        <button
          onClick={onBack}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md w-full sm:w-auto text-center"
        >
          ← Back to Shows
        </button>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-black text-center sm:text-right w-full">
          Ramaya Moments
        </h2>
      </div>

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