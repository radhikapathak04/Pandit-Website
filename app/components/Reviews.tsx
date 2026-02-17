"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";

/* ✅ Review Type */
type Review = {
  name: string;
  text: string;
};

export default function Reviews() {

  /* ✅ Default Reviews */
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Rohit Sharma",
      text: "बहुत ही शुद्ध विधि से पूजा करवाई। बहुत संतुष्ट हूँ 🙏",
    },
    {
      name: "Anjali Verma",
      text: "ऑनलाइन विवाह पूजन बहुत अच्छे से करवाया। धन्यवाद पंडित जी।",
    },
  ]);

  const [form, setForm] = useState({ name: "", text: "" });

  /* ✅ Load from localStorage */
  useEffect(() => {
  const saved = localStorage.getItem("pujaReviews");

  if (!saved) return;

  try {
    const parsed = JSON.parse(saved) as Review[];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReviews(parsed);
  } catch {
    console.log("Invalid review data");
  }
}, []);


  /* ✅ Save to localStorage */
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pujaReviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  /* ✅ Submit Review */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.text.trim()) {
      alert("कृपया नाम और अनुभव भरें");
      return;
    }

    const newReview: Review = {
      name: form.name,
      text: form.text,
    };

    setReviews([newReview, ...reviews]);
    setForm({ name: "", text: "" });
  };

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        ⭐ श्रद्धालुओं के अनुभव
      </h2>

      {/* Review Form */}
      <div className="max-w-2xl mx-auto mb-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-orange-50 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="आपका नाम"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            placeholder="अपना अनुभव लिखें..."
            value={form.text}
            onChange={(e) =>
              setForm({ ...form, text: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Review Submit करें
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <p className="text-gray-700 italic leading-relaxed">
              “{r.text}”
            </p>
            <p className="mt-4 font-semibold text-orange-600">
              — {r.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
