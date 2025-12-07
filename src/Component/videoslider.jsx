// Latest_News.jsx
import React, { useState, useEffect, useRef } from "react";

const newsItems = [
  {
    img: "/Image/Ramaya_Banner.jpg",
    title: "✨ Ramayan: An Epic Retold through Dance ✨ #skyhop",
    link: "https://www.youtube.com/embed/kSAHctrAM_o",
  },
  {
    img: "/Image/dandiya.jpeg",
    title: "Navratri vibes | full swing | Skyhop Dance Professional.... ",
    link: "https://www.youtube.com/embed/fWMzX4yhtsc",
  },
  {
    img: "/Image/hip-hop.jpeg",
    title: "Tune Maari Entriyaan | Satyam Sharma | Yash Gupta...",
    link: "https://www.youtube.com/embed/Dr02s4Jjasw",
  },
  {
    img: "/Image/bharat.jpg",
    title: "Thillana 2.0 — Bharatanatyam | Akash Rajpoot | Saumya Verma",
    link: "https://www.youtube.com/embed/qv0Dzhwoh_Y",
  }
];

export default function Videoslider() {
  const [activeVideo, setActiveVideo] = useState(null);
  const sliderRef = useRef(null);

  // ⭐ CONTINUOUS INFINITE SCROLL LIKE NRITYARAAGA
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let speed = 1; // move speed
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        slider.scrollLeft += speed;

        // When reaching end → instantly reset (loop effect)
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }, 20);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <div className="w-full px-6 py-6 mt-10 bg-black">
        
        {/* AUTO MOVING INFINITE SLIDER */}
        <div
          ref={sliderRef}
          className="overflow-x-hidden select-none"
        >
          <div className="flex gap-6 w-max pb-4">
            
            {/* Duplicate items for infinite loop effect */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <div
                key={index}
                className="min-w-[380px] bg-black rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition"
                onClick={() => setActiveVideo(item)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-120 h-64 object-center"
                />

                <div className="p-3">
                  <p className="text-xl font-semibold text-white text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* FULLSCREEN POPUP */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 px-4">
          <div className="relative w-[95%] md:w-[70%] h-[80%] bg-black rounded-xl shadow-xl">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-4xl font-bold"
            >
              ✕
            </button>

            <iframe
              src={activeVideo.link}
              title={activeVideo.title}
              className="w-full h-full rounded-xl"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      )}
    </>
  );
}
