import React, { useState } from 'react';
import Shows from './Shows';
import Media from './Media';
import Achievement from './Achievement';

export default function Gallery() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    { title: 'Media', image: '/Image/media.png' },
    { title: 'Events', image: '/Image/event.png' },
    { title: 'Achievements', image: '/Image/achieve.png' },
  ];

  // Conditional rendering
  if (selectedCard === 'Events') {
    return <Shows onBack={() => setSelectedCard(null)} />;
  } else if (selectedCard === 'Media') {
    return <Media onBack={() => setSelectedCard(null)} />;
  } else if (selectedCard === 'Achievements') {
    return <Achievement onBack={() => setSelectedCard(null)} />;
  }

  return (
    <div className="bg-amber-50 min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">GALLERY</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(card.title)}
            className="bg-white rounded-xl shadow-xl p-4 border-4 hover:scale-105 transition-all duration-500 cursor-pointer flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-black text-center">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}