import React from 'react';
const founders = [

  {
    name: 'Why SkyHop',
    image: '/Image/logo.jpg',
    description: `We extend a very warm welcome with our prospectus, which is designed to give you a realistic, 
    sneak peek into the only SkyHOP Professional Dance Institute. 
    We value at the pedagogical coverage as the core values of - leading through Innovation, Pursuing Excellence, 
    Growing by Learning and Global Citizenship are imparted here by personnel who are handpicked and dexterously 
    trained in the best educational practices. The search for a Professional Dance Institute Will lead you to SkyHOP. 
    Parent Engagement forms an integral part of the ethos at SkyHop we keep interacting with parent.
    I sign off with the conviction that SkyHop Professional Dance Institute will be the preferred destination for 
    aspiring dancers and dedicated professionals of the education sector alike`,
  }, {
    name: 'AKASH RAJPOOT',
    title: '(Founder, Director)',
    image: '/Image/akash.jpg',
    description: `Mr. Akash Rajpoot is the visionary Director of SkyHop Professional Dance Institute, 
    with over a decade of experience in diverse dance styles. Trained at the Terence Lewis Professional 
    Dance Institute and in Bharatanatyam from Bhatkhande Vidyapeeth, he blends classical and contemporary expertise. 
    Akash is also a certified fitness and yoga instructor, known for his creative choreography and mentorship.
    He currently serves as Head of the Western Dance Committee, Uttar Pradesh (BDSA), actively promoting dance sports and nurturing young talent. With a passion for innovation and expression, he continues to empower the next generation of performers.`,
  },
  {
    name: 'DIVYA UPADHYAY',
    title: '(Program Director)',
    image: '/Image/divya.jpg',
    description: `Miss Divya Upadhyay is the Program Director at SkyHop Professional Dance Institute , 
    where she leads artistic vision and performance planning and passion for “Modern Classical” and “Movement Therapy,” 
    she has pioneered unique teaching methodologies that blend emotional expression with physical movement. 
    Her work emphasizes healing, creativity, and inclusivity. As a dedicated mentor and choreographer, 
    she brings both discipline and imagination to every production. Her commitment to the performing 
    arts continues to inspire the next generation of artists while fostering a culture of accessible and expressive dance education.`,
  },

];

export default function Aboutus() {
  return (
    <div className="relative mt-20 md:mt-45 w-full min-h-screen bg-rose-200 border-b border-cyan-50 overflow-y-auto py-10">

      {/* Heading */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-black text-4xl font-bold drop-shadow-lg">ABOUT US</h1>
      </div>

      {/* Founder Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 px-4">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="bg-blend-saturation rounded-xl shadow-2xl max-w-md w-full p-6"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-cyan-500"
            />
            <h2 className="text-2xl font-bold text-center text-black">{founder.name}</h2>
            <h3 className="text-lg text-center text-gray-600 mb-4">{founder.title}</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              {founder.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}