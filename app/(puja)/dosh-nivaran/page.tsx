"use client";
import Image from "next/image";
import BookingForm from "../../components/BookingForm";
import Gallery from "../../components/Gallery";
import VideoSection from "../../components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";

export default function DoshNivaran() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 py-20 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-orange-200">

        {/* ===== Header ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              🔱काल सर्प दोष निवारण एवं शांति पूजन
            </h1>

            <div className="h-1 w-32 bg-orange-500 mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              जीवन में आने वाली बाधाएं, ग्रह दोष, पितृ दोष,
              कालसर्प दोष या अन्य नकारात्मक प्रभावों को दूर करने हेतु
              विशेष वैदिक विधि से शांति पूजन किया जाता है।
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              अनुभवी पंडित जी द्वारा संपूर्ण मंत्रोच्चार और हवन के साथ
              यह अनुष्ठान संपन्न कराया जाता है जिससे जीवन में
              शांति, सफलता और सकारात्मक ऊर्जा आती है।
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/dosh.jpg"
              alt="Dosh Nivaran Puja"
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

        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "ग्रह दोष निवारण पूजन",
            "पितृ दोष शांति",
            "कालसर्प दोष शांति",
            "नवग्रह हवन",
            "रुद्राभिषेक",
            "पूर्णाहुति एवं आशीर्वाद",
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

        {/* ===== Mode ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-4 text-orange-700 border-l-4 border-orange-500 pl-4">
          📹 पूजन के तरीके
        </h2>

        <div className="bg-orange-50 p-6 rounded-xl shadow-md text-gray-700 leading-relaxed">
          ✔ घर पर ऑफलाइन पूजन <br />
          ✔ वीडियो कॉल द्वारा ऑनलाइन पूजन
        </div>

        {/* ===== Price ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-2 text-orange-700 border-l-4 border-orange-500 pl-4">
          💰 प्रारंभिक दक्षिणा
        </h2>

        <div className="text-3xl font-bold text-orange-600 mt-4">
          ₹5,100 से प्रारंभ
        </div>
        <ActionButtons title="काल सर्प दोष निवारण एवं शांति" />


        {/* ===== Gallery ===== */}
        <div className="mt-16">
          <Gallery />
        </div>

        {/* ===== Videos ===== */}
        <div className="mt-16">
          <VideoSection />
        </div>

        {/* ===== Booking ===== */}
        <div className="mt-16">
          <BookingForm />
        </div>

      </div>
    </main>
  );
}
