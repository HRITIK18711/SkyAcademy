import React from 'react';
import GradientText from './GradientText';

export default function Contactus() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      'https://script.google.com/macros/s/AKfycbzmKM8LfPYKhq2UkjRXbeqxybhRnlCOc99cOPF5cAh3aL3_wiyYu2OMzcHXYTJSGKjbSw/exec';

    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}&Message=${e.target.message.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert("Thank you for your interest, we will get back to you soon!!");
        e.target.reset(); // ✅ Reset the form
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="w-full mt-15 md:mt-45 min-h-screen bg-gradient-to-b from-cyan-100 to-white flex flex-col items-center py-10 px-4">
      <h1 className="text-black text-4xl font-bold mb-10 text-center drop-shadow-lg">CONTACT US</h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center gap-10">
        {/* Enquiry Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full lg:w-1/2 transition-transform duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-6 text-black">
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={1}
              showBorder={false}
            >
              Enquiry Form
            </GradientText>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border text-black border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border text-black border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full p-3 border text-black border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 text-black border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full lg:w-1/2 transition-transform duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-black">
            <GradientText
              colors={['#ff6e40', '#ff3d7f', '#ff8e53', '#ffc107', '#ff6e40']}
              animationSpeed={1}
              showBorder={false}
            >
              Founder's Message
            </GradientText>
          </h2>
          <p className="text-black font-bold leading-relaxed mb-6">
            When person fails to express
            When words comes to an end
            When the person feels down
            Dance becomes that ray of hope
            That gives body language of dance
            Where movement becomes words
            And person expresses its emotions.
          </p>
          <div className="text-black space-y-2">
            <p><strong>Email:</strong> skyhop22@gmail.com</p>
            <p><strong>Phone:</strong> +91 7985516210, +91 9219589420</p>
            <p><strong>Location:</strong> House No 1, Dev Nagar Apartment, Thana Rd, near Smileganj, Sector 8, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
          </div>
        </div>
      </div>
    </div>
  );
}