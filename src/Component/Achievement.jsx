import React from 'react';

const images = [
  { title: 'Honored to receive the Kala Ratna Award 2018 from the Film and Television Workers Association', image: '/Image/Certificate.jpg' },
  { title: 'Certificate of Merit awarded for outstanding performance and dedication during Republic Day Parade 2024', image: '/Image/Certificate1.jpg' },
  { title: 'Honored to serve as an Audition Judge at the Lucknow Talent Dance Competition', image: '/Image/Certificate2.jpg' },
  { title: 'Honored with the Certificate of Class Transformation (International Roundtable Confrence 2024) for creating a dynamic space of learning, collaboration, and growth', image: '/Image/Certificate3.jpg' },
];

export default function Achievement({ onBack }) {
  return (
    <div className="bg-emerald-200 mt-20 md:mt-45 text-white px-4 py-8 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8">
        <button
          onClick={onBack}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md w-full sm:w-50 text-center"
        >
          ← Back to Gallery
        </button>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-black text-center sm:text-center w-full">
          Achievements
        </h2>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            {/* ✅ Title below image */}
            <div className="p-3 text-center bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
