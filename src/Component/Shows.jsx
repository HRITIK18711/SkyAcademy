import React, { useState } from 'react';
import Ramaya from './Ramaya';
import Mahabharat from './Mahabharat';
import Holi_fest from './Holi_fest';
import Jai_Jawan from './Jai_Jawan';
import Virangna from './Virangna';
const shows = [
  { title: 'Ramaya', image: '/Image/Ramaya_Banner.jpg' },
  { title: 'Mahabharat', image: '/Image/Mahabharat/13.jpg' },
  { title: 'Jai Jawan Jai Kisan', image: '/Image/Jai_Jawan/11.jpg' },
  { title: 'Virranga', image: '/Image/Virangna/(1).jpg' },
  { title: 'Holi Fest', image: '/Image/Extra/(5).jpg' },
];

export default function Shows({ onBack }) {
  const [selectedCard, setSelectedCard] = useState(null);

  // Conditional rendering for RAMAYA
  if (selectedCard === 'Ramaya') {
    return <Ramaya onBack={() => setSelectedCard(null)} />;
  }

  if (selectedCard === 'Mahabharat') {
    return <Mahabharat onBack={() => setSelectedCard(null)} />;
  }

  if (selectedCard === 'Jai Jawan Jai Kisan') {
    return <Jai_Jawan onBack={() => setSelectedCard(null)} />;
  }

  if (selectedCard === 'Virranga') {
    return <Virangna onBack={() => setSelectedCard(null)} />;
  }

  if (selectedCard === 'Holi Fest') {
    return <Holi_fest onBack={() => setSelectedCard(null)} />;
  }

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

      <h1 className="text-4xl font-bold text-center text-black mb-10">Our Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {shows.map((show, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(show.title)}
            className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={show.image}
              alt={show.title}
              className="mx-auto w-80 h-80 mb-4 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center text-black">{show.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
