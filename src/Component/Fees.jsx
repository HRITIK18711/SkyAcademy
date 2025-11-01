import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, Clock, Star } from 'lucide-react';

const feeData = [
  {
    title: 'Regular Batch – Kala Peeth Program',
    icon: <CalendarDays className="w-8 h-8 text-emerald-600 mb-3" />,
    details: [
      'Days: Monday to Friday',
      'Fee: ₹2,500/- per month',
    ],
    highlight: 'Best for Regular Learners',
  },
  {
    title: 'Kala Peeth Program – Package Options',
    icon: <Star className="w-8 h-8 text-yellow-500 mb-3" />,
    details: [
      '3 Months: Basic ₹7,500 | Advanced ₹6,500 | ₹1,000 off',
      '6 Months: Basic ₹15,000 | Advanced ₹13,000 | ₹2,000 off',
      '1 Year: Basic ₹30,000 | Advanced ₹26,000 | ₹4,000 off',
    ],
    highlight: 'Save more with longer plans!',
  },
  {
    title: 'Short-Term Courses',
    icon: <GraduationCap className="w-8 h-8 text-indigo-600 mb-3" />,
    details: [
      '3 Months: ₹9,000/-',
      '6 Months: ₹18,000/-',
      '1 Year: ₹36,000/-',
    ],
    highlight: 'Perfect for Quick Skill Boost!',
  },
  {
    title: 'Weekend Classes',
    icon: <Clock className="w-8 h-8 text-pink-500 mb-3" />,
    details: ['₹850/- per session'],
    highlight: 'Ideal for Working Professionals',
  },
  {
    title: 'Walk-in Plan',
    icon: <Clock className="w-8 h-8 text-blue-500 mb-3" />,
    details: ['1.5 Hours: ₹500/-', '3 Hours: ₹1,000/-'],
    highlight: 'Pay-as-you-go Flexibility',
  },
  {
    title: 'Special Offers',
    icon: <Star className="w-8 h-8 text-orange-500 mb-3" />,
    details: ['Flexible payment plans upon request.'],
    highlight: 'Ask for Custom Deals!',
  },
];

export default function Fees() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen mt-20 md:mt-32 bg-gradient-to-b from-lime-100 via-white to-emerald-50 py-16">
      {/* Heading */}
      <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-12">
        SkyHop Academy
        <span className="block text-emerald-700 text-3xl mt-2">
          Fees & Program Structure
        </span>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {feeData.map((fee, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between"
          >
            <div className="text-center">
              {fee.icon}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{fee.title}</h2>
              <p className="text-sm text-emerald-600 font-medium mb-4">{fee.highlight}</p>
              <div className="space-y-2">
                {fee.details.map((line, i) => (
                  <p
                    key={i}
                    className={`text-gray-700 ${
                      line.includes('off') || line.includes('Flexible')
                        ? 'text-orange-600 font-semibold'
                        : ''
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/booking')}
              className="mt-6 bg-emerald-700 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors shadow-md"
            >
              Join Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
