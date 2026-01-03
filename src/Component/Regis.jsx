import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

export default function Regis() {
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const navigate = useNavigate();

  // Academy open days
  const availability = [
    { day: "Monday", status: "Open" },
    { day: "Tuesday", status: "Open" },
    { day: "Wednesday", status: "Open" },
    { day: "Thursday", status: "Open" },
    { day: "Friday", status: "Open" },
    { day: "Saturday", status: "Close" },
    { day: "Sunday", status: "Close" },
  ];

  // ✅ Packages and durations aligned with Fees.jsx
  const packageDurations = {
    "Regular Batch – Kala Peeth Program": ["1 Month"],
    "Kala Peeth Program – Package Options": ["3 Months", "6 Months", "1 Year"],
    "Short-Term Courses": ["3 Months", "6 Months", "1 Year"],
    "Weekend Classes": ["Per Session"],
    "Walk-in Plan": ["1.5 Hours", "3 Hours"],
  };

  // ✅ Fees synced from your feeData structure
  const packageFees = {
    "Regular Batch – Kala Peeth Program": { "1 Month": "₹2,500" },
    "Kala Peeth Program – Package Options": {
      "3 Months": "₹7,500 (₹1,000 off)",
      "6 Months": "₹15,000 (₹2,000 off)",
      "1 Year": "₹30,000 (₹4,000 off)",
    },
    "Short-Term Courses": {
      "3 Months": "₹9,000",
      "6 Months": "₹18,000",
      "1 Year": "₹36,000",
    },
    "Weekend Classes": { "Per Session": "₹850" },
    "Walk-in Plan": { "1.5 Hours": "₹500", "3 Hours": "₹1,000" },
  };

  const getFees = () => {
    return packageFees[selectedPackage]?.[selectedDuration] || "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const mode = e.target.mode.value.trim();
    const course = e.target.course.value.trim();
    const duration = e.target.duration.value.trim();

    if (!name || !email || !phone || mode === "Select Type" || !course || !duration) {
      alert("Please fill in all required fields (*) before submitting.");
      return;
    }

    const formData = new URLSearchParams({
      Name: name,
      Email: email,
      Phone: phone,
      Mode: mode,
      Course: course,
      Duration: duration,
    });

    const url =
      "https://script.google.com/macros/s/AKfycbyL9U1PKs23uaBRhrCTtzFo7-qwwFa0K3-RN4mQrekZoaVL_MZv31I5JDWLW4jbbKkJ/exec?" +
      formData.toString();

    fetch(url, { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not OK");
        return res.text();
      })
      .then(() => {
        alert("Thank you for your interest! Proceed to pay your fees.");

        navigate("/newfess", {
          state: {
            name,
            course,
            duration,
            totalFees: getFees(),
            qrCodeUrl: "/images/sample-qr.png", // Replace with your actual QR image path
          },
        });

        e.target.reset();
        setSelectedDuration("");
        setSelectedPackage("");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="bg-slate-500 mt-20 min-h-screen p-4 flex flex-col lg:flex-row justify-center items-start gap-6">
      {/* Left: Availability */}
      <div className="bg-slate-600 rounded-xl shadow-md p-6 w-full lg:w-[350px]">
        <h2 className="text-xl text-white font-bold mb-4">
          Opening Days for Academy Visit
        </h2>
        <ul className="space-y-3">
          {availability.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-lg">
              {item.status === "Open" ? (
                <FaCheckCircle className="text-green-400" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
              <span className="text-white">{item.day}</span>
              <span
                className={`ml-2 font-medium ${
                  item.status === "Open" ? "text-green-300" : "text-red-400"
                }`}
              >
                ({item.status})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Registration Form */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full lg:flex-1">
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <FaCalendarAlt className="text-2xl text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-800">Book Your Classes</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <div>
            <label className="block font-medium mb-1">
              Classes Mode <span className="text-red-500">*</span>
            </label>
            <select
              name="mode"
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Select Type</option>
              <option>Offline</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Course Opt For <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={selectedPackage}
              onChange={(e) => {
                setSelectedPackage(e.target.value);
                setSelectedDuration("");
              }}
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Course</option>
              {Object.keys(packageDurations).map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Duration <span className="text-red-500">*</span>
            </label>
            <select
              name="duration"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Duration</option>
              {packageDurations[selectedPackage]?.map((duration, index) => (
                <option key={index} value={duration}>
                  {duration}
                </option>
              ))}
            </select>

            {getFees() && (
              <p className="mt-2 text-green-700 font-semibold">Fee: {getFees()}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
