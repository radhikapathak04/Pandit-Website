"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    puja: "",
    date: "",
    message: "",
  });

  // ✅ Input Change Handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 booking data save (payment page use karega)
    localStorage.setItem("latestBooking", JSON.stringify(form));

    // 👉 Payment page par redirect
    router.push("/payment");
  };

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        📅 पूजन बुकिंग फॉर्म
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-2xl mx-auto"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="आपका नाम"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="मोबाइल नंबर"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        {/* Puja Select */}
        <select
          name="puja"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          required
        >
          <option value="">कौन सा पूजन?</option>
          <option>विवाह पूजन</option>
          <option>गृह प्रवेश पूजन</option>
          <option>दोष निवारण पूजन</option>
          <option>बगलामुखी मिर्ची हवन</option>
          <option>संतान प्राप्ति पूजन</option>
          <option>व्यापार एवं वाहन पूजन</option>
        </select>

        {/* Date */}
        <input
          type="date"
          name="date"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="विशेष जानकारी (स्थान, समय आदि)"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
        >
          💳 Payment पर जाएँ
        </button>
      </form>
    </section>
  );
}
