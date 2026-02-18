"use client";
import BookingForm from "../../components/BookingForm";
import Image from "next/image";
import Gallery from "../../components/Gallery";
import VideoSection from "../../components/VideoSection";
import ActionButtons from "@/app/components/ActionButtons";

export default function VivahPuja() {
  return (
    <main className="min-h-screen bg-orange-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
              💍 विवाह पूजन
              <span className="block text-orange-600 text-xl font-medium mt-1">
                वैदिक परंपरा अनुसार पूर्ण विवाह संस्कार
              </span>
            </h1>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              वैदिक परंपराओं के अनुसार संपन्न कराया जाने वाला विवाह पूजन
              जीवन के सबसे पवित्र और महत्वपूर्ण संस्कारों में से एक है।
              इसमें वर-वधू के मंगलमय भविष्य, सुख-समृद्धि और अटूट दांपत्य जीवन के लिए
              शुद्ध वैदिक मंत्रों के साथ सम्पूर्ण विधि-विधान से अनुष्ठान कराया जाता है।
            </p>

            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              अनुभवी पंडित जी द्वारा कन्‍यादान, सप्तपदी (सात फेरे),
              हवन, आशीर्वाद एवं अन्य सभी परंपरागत विधियाँ पूर्ण श्रद्धा
              और शास्त्रसम्मत तरीके से करवाई जाती हैं।
              ऑनलाइन वीडियो कॉल द्वारा भी यह पूजन उपलब्ध है।
            </p>
          </div>

          <div>
            <Image
              src="/vivah.jpg"
              alt="Vivah Puja"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>

        </div>

        {/* ===== RITUALS ===== */}
        <h2 className="text-2xl font-semibold mt-10 mb-6 text-gray-800">
          🪔 विवाह पूजन में शामिल
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
  {[
    "शुभ मुहूर्त निर्धारण",
    "गणेश पूजन",
    "कन्यादान विधि",
    "सात फेरे",
    "हवन",
    "आशीर्वाद एवं पूर्णाहुति",
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


        {/* ===== MODE ===== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          📹 पूजन के तरीके
        </h2>

        <p className="text-gray-700">
          ✔ घर या मंडप में ऑफलाइन पूजन
          <br />
          ✔ वीडियो कॉल के माध्यम से ऑनलाइन पूजन
        </p>

        {/* ===== PRICE ===== */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-800">
          💰 प्रारंभिक दक्षिणा
        </h2>

        <p className="text-xl font-medium text-gray-800">
          ₹11,000 से प्रारंभ (स्थान व सामग्री अनुसार बदल सकती है)
        </p>

    <ActionButtons title="विवाह पूजन" />

        {/* ===== GALLERY ===== */}
        <div className="mt-14">
          <Gallery />
        </div>

        {/* ===== VIDEOS ===== */}
        <div className="mt-16">
          <VideoSection />
        </div>

        {/* ===== FAQ ===== */}
        <h2 className="text-2xl font-semibold mt-14 mb-4 text-gray-800">
          ❓ सामान्य प्रश्न
        </h2>

        <div className="space-y-3 text-gray-700">
          <p>
            <strong>प्रश्न:</strong> क्या ऑनलाइन विवाह पूजन संभव है?
            <br />
            <strong>उत्तर:</strong> हाँ, वीडियो कॉल के माध्यम से पूरी विधि करवाई जाती है।
          </p>

          <p>
            <strong>प्रश्न:</strong> पूजन सामग्री कौन लाता है?
            <br />
            <strong>उत्तर:</strong> ग्राहक या पंडित जी दोनों मिलकर व्यवस्था कर सकते हैं।
          </p>

          <p>
            <strong>प्रश्न:</strong> क्या एडवांस बुकिंग ज़रूरी है?
            <br />
            <strong>उत्तर:</strong> हाँ, शुभ मुहूर्त सुरक्षित करने के लिए।
          </p>
        </div>

        {/* ===== BOOKING FORM ===== */}
        <div className="mt-16">
          <BookingForm />
        </div>

      </div>
    </main>
  );
}
