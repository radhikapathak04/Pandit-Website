"use client";
import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import BookingForm from "@/app/components/BookingForm";
import VideoSection from "@/app/components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";


export default function GrihaPravesh() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 py-20 px-6 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-orange-200">

        {/* ===== Header ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              🏠 गृह प्रवेश एवं वास्तु पूजन
            </h1>

            <div className="h-1 w-32 bg-orange-500 mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              नए घर में प्रवेश से पहले विधि-विधान से पूजन करने से घर में
              सुख, शांति और समृद्धि का वास होता है।
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              वास्तु दोष निवारण द्वारा नकारात्मक ऊर्जा दूर कर
              सकारात्मक वातावरण स्थापित किया जाता है।
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/griha.jpg"
              alt="Griha Pravesh"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl object-cover border-4 border-orange-200"
              priority
            />
          </div>

        </div>

        {/* ===== Rituals ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-orange-700 border-l-4 border-orange-500 pl-4">
          🪔 पूजन में शामिल
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "शुभ मुहूर्त निर्धारण",
            "गणेश पूजन",
            "वास्तु शांति हवन",
            "नवग्रह पूजन",
            "कलश स्थापना",
            "पूर्णाहुति एवं आशीर्वाद",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        {/* ===== Mode ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-4 text-orange-700 border-l-4 border-orange-500 pl-4">
          📹 पूजन के तरीके
        </h2>

        <div className="bg-orange-50 p-6 rounded-xl shadow-md text-gray-700">
          ✔ घर पर ऑफलाइन पूजन <br />
          ✔ वीडियो कॉल द्वारा ऑनलाइन पूजन
        </div>

        {/* ===== Price ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-2 text-orange-700 border-l-4 border-orange-500 pl-4">
          💰 प्रारंभिक दक्षिणा
        </h2>

        <div className="text-3xl font-bold text-orange-600 mt-4">
          ₹7,100 से प्रारंभ
        </div>

        <ActionButtons title="गृह प्रवेश एवं वास्तु पूजन" />


        {/* ===== Gallery ===== */}
        <div className="mt-16">
          <Gallery />
        </div>

        {/* ===== Videos ===== */}
        <div className="mt-16">
          <VideoSection />
        </div>

        {/* ===== Booking Form ===== */}
        <div className="mt-16">
          <BookingForm />
        </div>

      </div>
    </main>
  );
}
