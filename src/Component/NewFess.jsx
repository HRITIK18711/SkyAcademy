import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NewFess() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  // Handle if user comes without filling form
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          No registration data found.
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Go to Registration
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center md:mt-35  justify-center min-h-screen bg-amber-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Details</h1>

        <div className="text-left space-y-2 mb-6">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Course:</strong> {data.course}</p>
          <p><strong>Duration:</strong> {data.duration}</p>
          <p className="text-green-600 font-bold text-lg">
            Fees: ₹{Number(data.totalFees).toLocaleString("en-IN")}
          </p>
        </div>

        {/* QR Code */}
        {data.qrCodeUrl && (
          <div className="flex justify-center mb-6">
            <img
              src="/Image/QR.jpg"
              alt="QR Code"
              className="w-48 h-48 object-contain border p-2 rounded"
            />
          </div>
        )}
<h3 className="font-bold text-center mt-4">
  <span className="font-bold text-red-600">Note:-</span> After Payment Share the Screenshot to Whatsapp on:{" "}
  <span className="font-bold text-green-600">7985516210</span>
</h3>
        <button
          onClick={() => navigate("/booking")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
        Back to Registration
        </button>
      </div>
    </div>
  );
}