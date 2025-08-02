import React from 'react';

const mediaData = [
  { title: 'Media 1', image: '/images/media1.jpg' },
  { title: 'Media 2', image: '/images/media2.jpg' },
  { title: 'Media 3', image: '/images/media3.jpg' },
  { title: 'Media 4', image: '/images/media4.jpg' },
  { title: 'Media 5', image: '/images/media5.jpg' },
  { title: 'Media 6', image: '/images/media6.jpg' },
  // Add more as needed up to 10
];

export default function Media({ onBack }) {
  return (
    <div className="w-full min-h-screen bg-neutral-200 py-12 px-4">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          ← Back to Gallery
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center text-black mb-10">Media Coverage</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {mediaData.slice(0, 10).map((media, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={media.image}
              alt={media.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center text-black">{media.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
