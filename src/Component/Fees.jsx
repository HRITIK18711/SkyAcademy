import React from 'react';
import { useNavigate } from 'react-router-dom';

const feeData = [
    {
        title: 'KalaPeeth: Regular Package',
        subtitle: 'Dance Form',
        details:
            'Monthly Fee: ₹2500\nBatch Days: Mon-Fri\n\n\n\n',
    },
    {
        title: 'KalaPeeth: Program Package',
        subtitle: 'Dance Form',
        details:
            '3 Month Fee: ₹7500\n6 Month Fee: ₹15000\n1 Year Fee: ₹30000\nEarly Bird Discount Available...',
    },
    {
        title: 'KalaPeeth: Weekend Package',
        subtitle: 'Dance Form',
        details:
            'Per Session Fee: ₹1000\nEarly Bird Discount Available...',
    },
    {
        title: 'KalaPeeth: Walk-In Package',
        subtitle: 'Dance Form',
        details:
            '1.5 Hours Fee: ₹600\n3 Hours Fee: ₹1100 \n Early Bird Discount Available...',
    },
];

export default function Fees() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full min-h-screen bg-lime-100 py-12">
            {/* Heading */}
            <h1 className="text-center text-4xl font-bold text-black mb-12">
                Fees <span className="text-orange-500">Structure</span>
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
                {feeData.map((fee, index) => {
                    const detailsLines = fee.details.split('\n').map((line, i) =>
                        line.toLowerCase().includes('early bird') ? (
                            <p key={i} className="text-orange-600 font-semibold">
                                {line}
                            </p>
                        ) : (
                            <p key={i} className="text-sm text-gray-600">
                                {line}
                            </p>
                        )
                    );

                    return (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 rounded-lg shadow-md text-center p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[320px]"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-1">{fee.title}</h2>
                            {/* <h3 className="text-sm text-gray-500 mb-4 font-medium">{fee.subtitle}</h3> */}
                            <div className="mb-6 flex-grow">{detailsLines}</div>
                            <button
                                onClick={() => navigate('/booking')}
                                className="mt-auto bg-emerald-700 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
                            >
                                Join Now
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}