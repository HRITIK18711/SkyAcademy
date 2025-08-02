import React, { useState } from 'react';
import Shows from './Shows';
import Media from './Media';
import Project from './Project'; // Import the Shows component

export default function Gallery() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    { title: 'Media', image: '/Image/media.png' },
    { title: 'Events', image: '/Image/event.png' },
    
    { title: 'Achievements', image: '/Image/achieve.png' },
  ];

  // When "Shows" is selected, render Shows component
  if (selectedCard === 'Events') {
    return <Shows onBack={() => setSelectedCard(null)} />;
  }
  else if (selectedCard === 'Media') {
    return <Media onBack={() => setSelectedCard(null)} />;
  }
  else if (selectedCard === 'Project') {
    return <Project onBack={() => setSelectedCard(null)} />;
  }

  return (
    <div className="bg-amber-50  min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">GALLERY</h1>

      <div className="mt-18 ml-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(card.title)}
            className="bg-white rounded-xl shadow-xl p-4 border-4 hover:scale-105 transition-all duration-500 cursor-pointer"
            style={{ width: '250px', textAlign: 'center' }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1rem',
              }}
            />
            <h2 className="text-xl font-semibold text-black">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
