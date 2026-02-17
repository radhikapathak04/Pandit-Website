"use client";

import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import BookingForm from "@/app/components/BookingForm";
import VideoSection from "@/app/components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";

export default function MangalDoshPuja() {
  return (
    <main className="min-h-screen bg-orange-50 py-16 px-6">

      <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-orange-200">

        {/* Top */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <Image
              src="/mangal.jpg"
              alt="Mangal Dosh Puja"
              width={450}
              height={350}
              className="rounded-xl shadow-xl object-cover border-4 border-orange-200"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-orange-700">
              🔱 मंगल दोष पूजन
            </h1>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              मंगल दोष विवाह में देरी, वैवाहिक जीवन में तनाव एवं
              ग्रह अशांति का कारण माना जाता है।
              वैदिक विधि से मंगल दोष शांति पूजन करने से
              जीवन में सुख, शांति और विवाह योग मजबूत होता है।
            </p>
          </div>

        </div>

        {/* Rituals */}
        <h2 className="text-2xl font-semibold mt-14 mb-6 text-gray-800">
          ✨ पूजन में शामिल विधियाँ
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "गणेश पूजन",
            "मंगल ग्रह शांति जाप",
            "विशेष हवन",
            "नवग्रह पूजन",
            "दोष निवारण अनुष्ठान",
            "पूर्णाहुति एवं आशीर्वाद",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-orange-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* ✅ Buttons */}
        <ActionButtons title="मंगल दोष पूजन" />

        {/* Gallery */}
        <div className="mt-16">
          <Gallery />
        </div>

        {/* Videos */}
        <div className="mt-16">
          <VideoSection />
        </div>

        {/* Booking */}
        <div className="mt-16">
          <BookingForm />
        </div>

      </div>
    </main>
  );
}
