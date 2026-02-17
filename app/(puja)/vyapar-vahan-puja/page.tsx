"use client";
import BookingForm from "../../components/BookingForm";
import Image from "next/image";
import Gallery from "../../components/Gallery";
import VideoSection from "../../components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";
export default function VyaparVahanPuja() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 py-20 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-20 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-orange-200">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              🚗 व्यापार एवं वाहन पूजन
            </h1>

            <div className="h-1 w-32 bg-orange-500 mt-4 rounded-full" />

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              नए व्यापार की शुरुआत या नए वाहन के शुभारंभ से पहले
              विधि-विधान से पूजन कराने से सफलता, उन्नति और सुरक्षा प्राप्त होती है।
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              अनुभवी पंडित जी द्वारा मंत्रोच्चार, हवन और विशेष अनुष्ठान के साथ
              व्यापार वृद्धि एवं वाहन सुरक्षा हेतु पूजन संपन्न कराया जाता है।
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/vyapar.jpg"
              alt="Vyapar Vahan Puja"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl object-cover border-4 border-orange-200"
              priority
            />
          </div>

        </div>

        {/* Rituals */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-orange-700 border-l-4 border-orange-500 pl-4">
          🪔 पूजन में शामिल
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "गणेश पूजन",
            "लक्ष्मी पूजन",
            "व्यापार वृद्धि मंत्र जाप",
            "वाहन शांति पूजन",
            "हवन एवं पूर्णाहुति",
            "आशीर्वाद एवं प्रसाद",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mode */}
        <h2 className="text-2xl font-bold mt-16 mb-4 text-orange-700 border-l-4 border-orange-500 pl-4">
          📹 पूजन के तरीके
        </h2>

        <div className="bg-orange-50 p-6 rounded-xl shadow-md">
          ✔ दुकान / ऑफिस / शोरूम पर ऑफलाइन पूजन <br />
          ✔ वीडियो कॉल द्वारा ऑनलाइन पूजन
        </div>

        {/* Price */}
        <h2 className="text-2xl font-bold mt-16 mb-2 text-orange-700 border-l-4 border-orange-500 pl-4">
          💰 प्रारंभिक दक्षिणा
        </h2>

        <div className="text-3xl font-bold text-orange-600 mt-4">
          ₹4,100 से प्रारंभ
        </div>

        <ActionButtons title="व्यापार एवं वाहन पूजन" />

        {/* Gallery */}
        <div className="mt-16">
          <Gallery />
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <VideoSection />
        </div>

        {/* Booking Form */}
        <div className="mt-16">
          <BookingForm />
        </div>

      </div>
    </main>
  );
}
