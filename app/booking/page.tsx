"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    puja: "",
    date: "",
    mode: "",
  });

  // ✅ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Submit
  const handleSubmit = () => {
    // Validation
    if (
      !form.name ||
      !form.phone ||
      !form.puja ||
      !form.date ||
      !form.mode
    ) {
      alert("⚠️ कृपया सभी जानकारी भरें");
      return;
    }

    // ✅ Save booking for payment page
    localStorage.setItem("latestBooking", JSON.stringify(form));

    // ✅ Go to payment page
    router.push("/payment");
  };

  return (
    <main className="min-h-screen bg-orange-50 py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📝 Puja Booking Form
        </h1>

        <div className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          {/* Puja */}
          <select
            name="puja"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          >
            <option value="">Select Puja</option>
            <option>विवाह पूजन</option>
            <option>गृह प्रवेश</option>
            <option>दोष निवारण</option>
            <option>संतान प्राप्ति</option>
            <option>त्योहार विशेष</option>
            <option>व्यापार एवं वाहन पूजन</option>
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          {/* Mode */}
          <select
            name="mode"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          >
            <option value="">Puja Mode</option>
            <option>Offline (Ghar / Mandir)</option>
            <option>Online (Video Call)</option>
          </select>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
          >
            💳 Payment करें
          </button>

        </div>
      </div>
    </main>
  );
}
