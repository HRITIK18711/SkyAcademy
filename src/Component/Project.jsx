import React from 'react';

const projectData = [
  { title: 'RAMAYA', image: '/images/holi.jpg' },
  { title: 'jai jawan jai kisan', image: '/images/ram_utsav.jpg' },
  { title: 'Save Girl child', image: '/images/togetherness.jpg' },
  { title: 'Mahabharat', image: '/images/dandiya.jpg' },
  { title: 'Shiv Sati', image: '/images/shivsati.jpg' },
  { title: 'Save Environment', image: '/images/virranga.jpg' },
];

export default function Project({ onBack }) {
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

      <h1 className="text-4xl font-bold text-center text-black mb-10">Our Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center text-black">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
