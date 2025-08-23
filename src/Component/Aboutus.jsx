import React, { useState } from "react";

const founders = [
  {
    name: "Why SkyHop",
    image: "/Image/logo.jpg",
    description: `We extend a very warm welcome with our prospectus, which is designed to give you a realistic, 
    sneak peek into the only SkyHOP Professional Dance Institute. 
    We value at the pedagogical coverage as the core values of - leading through Innovation, Pursuing Excellence, 
    Growing by Learning and Global Citizenship are imparted here by personnel who are handpicked and dexterously 
    trained in the best educational practices. The search for a Professional Dance Institute Will lead you to SkyHOP. 
    Parent Engagement forms an integral part of the ethos at SkyHop we keep interacting with parent.
    I sign off with the conviction that SkyHop Professional Dance Institute will be the preferred destination for 
    aspiring dancers and dedicated professionals of the education sector alike`,
  },
  {
    name: "AKASH RAJPOOT",
    title: "(Founder, Director)",
    image: "/Image/akash.jpg",
    description: `Mr. Akash Rajpoot is the visionary Director of SkyHop Professional Dance Institute, 
    with over a decade of experience in diverse dance styles. Trained at the Terence Lewis Professional 
    Dance Institute and in Bharatanatyam from Bhatkhande Vidyapeeth, he blends classical and contemporary expertise. 
    Akash is also a certified fitness and yoga instructor, known for his creative choreography and mentorship.
    He currently serves as Head of the Western Dance Committee, Uttar Pradesh (BDSA), actively promoting dance sports and nurturing young talent. With a passion for innovation and expression, he continues to empower the next generation of performers.`,
  },
  {
    name: "DIVYA UPADHYAY",
    title: "(Program Director)",
    image: "/Image/divya.jpg",
    description: `Miss Divya Upadhyay is the Program Director at SkyHop Professional Dance Institute , 
    where she leads artistic vision and performance planning and passion for “Modern Classical” and “Movement Therapy,” 
    she has pioneered unique teaching methodologies that blend emotional expression with physical movement. 
    Her work emphasizes healing, creativity, and inclusivity. As a dedicated mentor and choreographer, 
    she brings both discipline and imagination to every production. Her commitment to the performing 
    arts continues to inspire the next generation of artists while fostering a culture of accessible and expressive dance education.`,
  },
];

export default function Aboutus() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative mt-20 md:mt-45 w-full min-h-screen bg-rose-200 border-b border-cyan-50 overflow-y-auto py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-black text-4xl font-bold drop-shadow-lg">ABOUT US</h1>
      </div>

      {/* First Section: Logo + About Text */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 mb-12">
        <div className="flex justify-center">
          <img
            src="/Image/logo.jpg"
            alt="SkyHop Logo"
            className="w-64 h-64 rounded-full object-fill"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">About SkyHop</h2>
          <p className="text-black leading-relaxed text-justify">
            {founders[0].description}
          </p>
        </div>
      </div>

      {/* Founder Cards */}
      <div className="flex mt-25 flex-wrap justify-center gap-8 px-6">
        
        {founders.slice(1).map((founder, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 text-center relative"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-cyan-500 shadow-lg"
            />
            
            {/* Title Box with hover */}
            <div
              className="bg-cyan-100 py-2 px-4 rounded-lg cursor-pointer transition transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-xl font-semibold text-black">{founder.name}</h2>
              <h3 className="text-sm text-gray-600">{founder.title}</h3>
            </div>

            {/* Description appears on hover */}
            {hoveredIndex === index && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md text-justify">
                <p className="text-gray-700 text-sm">{founder.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}