"use client";

import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import BookingForm from "@/app/components/BookingForm";
import VideoSection from "@/app/components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";
export default function KundaliVishleshan() {
  return (
    <main className="min-h-screen bg-orange-50 py-16 px-6">

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        {/* Top */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <Image
              src="/kundali.jpg"
              alt="Kundali Vishleshan"
              width={450}
              height={350}
              className="rounded-lg shadow-lg object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🔮 कुंडली विश्लेषण
            </h1>

            <p className="text-gray-700 leading-relaxed text-lg">
              जन्म कुंडली विश्लेषण द्वारा जीवन के विभिन्न पहलुओं —
              विवाह, करियर, स्वास्थ्य, धन एवं ग्रह दोषों का
              विस्तृत अध्ययन किया जाता है।
            </p>
          </div>

        </div>

        {/* Includes */}
        <h2 className="text-2xl font-semibold mt-10 mb-6 text-gray-800">
          ⭐ विश्लेषण में शामिल
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "जन्म कुंडली अध्ययन",
            "ग्रह स्थिति विश्लेषण",
            "विवाह एवं करियर मार्गदर्शन",
            "दोष एवं उपाय सुझाव",
            "भविष्य फल एवं समाधान",
          ].map((item, index) => (
    <li
      key={index}
      className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl shadow-sm hover:shadow-lg transition"
    >
      {/* Number Circle */}
      <span className="bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
        {index + 1}
      </span>

      {/* Text */}
      <span className="text-gray-900 font-semibold text-lg">
        {item}
      </span>
    </li>
  ))}
</ul>

        <ActionButtons title="कुंडली विश्लेषण" />


        <Gallery />
        <BookingForm />

        <div className="mt-16">
          <VideoSection />
        </div>

      </div>
    </main>
  );
}
