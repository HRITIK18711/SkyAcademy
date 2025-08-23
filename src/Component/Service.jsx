import React from 'react';

const servicedata = [
  { title: 'Event choreography'},
  { title: 'Wedding choreography' },
  { title: 'Corporate shows' },
  { title: 'College fest'},
  { title: 'Threatre dance' },
  { title: 'School event' },
  // Add more as needed up to 10
];

export default function Service() {
  return (
    <div className="w-full min-h-screen bg-amber-100 mt-10 py-12 px-4">
      {/* Back Button */}
      

      <h1 className="text-4xl font-bold text-center text-black mb-10">Our <span className="text-orange-500">Services</span></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {servicedata.slice(0, 10).map((media, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center text-black">{media.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
