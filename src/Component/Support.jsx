// Donate.jsx
import React, { useState } from "react";

export default function Support() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex justify-center -mt-10 md:mt-20 items-center min-h-screen bg-gradient-to-b from-rose-100 to-rose-300 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 text-center">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-800 mb-4">
          Support Our Academy
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Your contribution helps us continue our mission of{" "}
          <span className="font-semibold text-rose-600">Awakening Minds</span>.
          Every donation, big or small, makes a difference!
        </p>

        {/* Buttons */}
        <div className="flex justify-center">
          <button
            
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
          >
            Donate
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6">
          100% of your donation goes directly towards our programs.

        </p>
        
      </div>

      
    </div>
  );
}