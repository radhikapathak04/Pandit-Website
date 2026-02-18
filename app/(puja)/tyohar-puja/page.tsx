
import BookingForm from "../../components/BookingForm";
import Image from "next/image";
import Gallery from "../../components/Gallery";
import VideoSection from "../../components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";

export default function TyoharPuja() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 py-20 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-orange-200">

        {/* ===== Header ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              🎉 त्योहार विशेष पूजन
            </h1>

            <div className="h-1 w-32 bg-orange-500 mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              हर शुभ अवसर और त्योहार पर विशेष विधि-विधान से पूजन कराना
              घर में सुख-समृद्धि और सकारात्मक ऊर्जा लाता है।
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              हमारे अनुभवी पंडित जी द्वारा सभी प्रमुख त्योहारों पर
              विशेष पूजन, हवन और अनुष्ठान संपन्न कराए जाते हैं।
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/festival.jpg"
              alt="Tyohar Vishesh Puja"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl object-cover border-4 border-orange-200"
              priority
            />
          </div>

        </div>

        {/* ===== Festivals ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-orange-700 border-l-4 border-orange-500 pl-4">
          🪔 प्रमुख त्योहार पूजन
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "दीपावली लक्ष्मी पूजन",
            "गणेश चतुर्थी पूजन",
            "नवरात्रि दुर्गा पूजन",
            "सत्यनारायण कथा",
            "मकर संक्रांति पूजन",
            "होली विशेष हवन",
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

        <div className="bg-orange-50 p-6 rounded-xl shadow-md text-gray-700">
          ✔ घर पर ऑफलाइन पूजन <br />
          ✔ वीडियो कॉल द्वारा ऑनलाइन पूजन
        </div>

        {/* ===== Price ===== */}
        <h2 className="text-2xl font-bold mt-16 mb-2 text-orange-700 border-l-4 border-orange-500 pl-4">
          💰 प्रारंभिक दक्षिणा
        </h2>

        <div className="text-3xl font-bold text-orange-600 mt-4">
          ₹3,100 से प्रारंभ
        </div>

        <ActionButtons title="त्योहार विशेष पूजन" />


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
