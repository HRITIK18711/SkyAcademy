import React from 'react'
const images = [
      { image: `/Image/Mahabharat/01.jpg`  },
      { image: `/Image/Mahabharat/02.jpg`  },
      { image: `/Image/Mahabharat/03.jpg`  },
      { image: `/Image/Mahabharat/04.jpg`  },
      { image: `/Image/Mahabharat/05.jpg`  },
      { image: `/Image/Mahabharat/06.jpg`  },
      { image: `/Image/Mahabharat/07.jpg`  },
      { image: `/Image/Mahabharat/08.jpg`  },
      { image: `/Image/Mahabharat/09.jpg`  },
      { image: `/Image/Mahabharat/10.jpg`  },
      { image: `/Image/Mahabharat/12.jpg`  },
      { image: `/Image/Mahabharat/13.jpg`  }
    ]; 

export default function Mahabharat({ onBack }) {
  return (
      <div className="bg-emerald-200 text-white px-4 py-8 min-h-screen relative">

      {/* Back Button */}
      <button
        onClick={onBack}
        className=" bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md w-full sm:w-auto text-center"
      >
        ← Back to Shows
      </button>

      <h2 className="text-3xl md:text-4xl font-bold text-black text-center sm:text-right w-full">
        Mahabharat Moments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-3/4 h-80 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={`Holi ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    );
}
