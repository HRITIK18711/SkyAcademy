import React from "react";
import { Link } from 'react-router-dom';
const danceForms = [
  {
    title: "CONTEMPORARY",
    description: `Contemporary dance is a fluid and expressive style that blends elements of modern, ballet, and jazz. It focuses on freedom of movement and authentic expression.`,
    image: "/Image/contemporary.png",
  },
  {
    title: "BHARATANATYAM",
    description: `Bharatanatyam is a classical Indian dance form known for its intricate footwork, expressive gestures, and spiritual themes. It's one of the eight recognized Indian classical dance forms.`,
    image: "/Image/bharat.jpg",
  },
  {
    title: "KATHAK",
    description: `Kathak is a classical Indian dance known for its footwork, fast spins, and expressive storytelling, originating in North India.`,
    image: "/Image/Kathak.png",
  },
  {
    title: "NEO-CLASSICAL",
    description: `Bollywood dance combines classical Indian, folk, and Western styles. It’s colorful, expressive, and inspired by Indian cinema.`,
    image: "/Image/neo.png",
  },
];

const Card = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-lime-100 border-b border-cyan-50 py-12">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-black mb-12 relative z-10">
        Courses <span className="text-orange-500">Offered</span>
      </h1>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
        {danceForms.map((form, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-md shadow-md p-6 hover:shadow-xl transition-shadow duration-300 min-h-[430px]"
          >
            <img
              src={form.image}
              alt={form.title}
              className="mx-auto w-80 h-80 mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center">
              {form.title}
            </h2>
            {/* <h3 className="text-sm text-gray-500 mb-4 font-medium text-center">Dance Form</h3>
            <p className="text-sm text-gray-600 flex-grow text-center mb-6">
              {form.description}
            </p> */}
            <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition-colors w-full">
              <Link to="/fees">View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;