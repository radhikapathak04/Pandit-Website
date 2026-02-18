"use client";

import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import BookingForm from "@/app/components/BookingForm";
import VideoSection from "@/app/components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";

export default function BhatPuja() {
  return (
    <main className="min-h-screen bg-orange-50 py-16 px-6">

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <Image
              src="/bhat.jpg"
              alt="Bhat Puja"
              width={450}
              height={350}
              className="rounded-lg shadow-lg object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🪔 भात पूजन
            </h1>

            <p className="text-gray-700 leading-relaxed text-lg">
              भात पूजन विवाह से पूर्व होने वाली एक महत्वपूर्ण वैदिक परंपरा है।
              यह पूजन परिवार की समृद्धि, मंगल कार्य की सफलता और
              नव दंपत्ति के सुखद वैवाहिक जीवन हेतु किया जाता है।
            </p>
          </div>

        </div>

        {/* Rituals */}
        <h2 className="text-2xl font-semibold mt-10 mb-6 text-gray-800">
          ✨ पूजन में शामिल विधियाँ
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "गणेश पूजन",
            "कुल देवता आह्वान",
            "मंगल पाठ एवं आशीर्वाद",
            "परिवार सुख-समृद्धि प्रार्थना",
            "विवाह मंगल सिद्धि अनुष्ठान",
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

        {/* ✅ Common Buttons */}
        <ActionButtons title="भात पूजन" />

        {/* Sections */}
        <Gallery />
        <BookingForm />

        <div className="mt-16">
          <VideoSection />
        </div>

      </div>
    </main>
  );
}
