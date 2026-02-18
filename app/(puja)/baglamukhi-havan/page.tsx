"use client";
import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import BookingForm from "@/app/components/BookingForm";
import VideoSection from "@/app/components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";


export default function BaglamukhiHavan() {
  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 py-16 px-6">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-orange-200">

        {/* ===== Header Section ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/baglamukhi.jpg"
              alt="Baglamukhi Havan"
              width={450}
              height={350}
              priority
              className="rounded-2xl shadow-xl object-cover border-4 border-orange-200"
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              🔱 बगलामुखी मिर्ची हवन
            </h1>

            <div className="h-1 w-32 bg-orange-500 mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              माँ बगलामुखी साधना शत्रु बाधा, कोर्ट केस, नज़र दोष,
              बुरी शक्तियों से रक्षा और विजय प्राप्ति के लिए अत्यंत प्रभावशाली मानी जाती है।
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              अनुभवी पंडित जी द्वारा विशेष मिर्ची हवन एवं मंत्रोच्चार के साथ
              यह अनुष्ठान संपन्न कराया जाता है।
            </p>
          </div>

        </div>

        {/* ===== Ritual Section ===== */}
        {/* ===== Ritual Section ===== */}
<h2 className="text-2xl font-bold mt-16 mb-6 text-orange-700 border-l-4 border-orange-500 pl-4">
  🪔 हवन में शामिल विधियाँ
</h2>

<ul className="grid md:grid-cols-2 gap-4">
  {[
    "माँ बगलामुखी पूजन",
    "विशेष मिर्ची हवन",
    "शत्रु बाधा निवारण मंत्र जाप",
    "नजर दोष शांति",
    "सुरक्षा एवं विजय आशीर्वाद",
    "पूर्णाहुति एवं प्रसाद",
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
