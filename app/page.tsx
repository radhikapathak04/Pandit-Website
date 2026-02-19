import Link from "next/link";
import Reviews from "./components/Reviews";
import Image from "next/image";
import Gallery from "./components/Gallery";


export default function Home() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >

      {/* Hero Section */}
      <section className="relative text-center py-20 overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">

          <Image
            src="/pandit2.jpg"
            alt="Pt. Praful Sharma"
            width={160}
            height={160}
            className="mx-auto rounded-full object-cover shadow-xl border-4 border-white"
          />

          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900 leading-tight">
  वैदिक कर्मकांड विशेषज्ञ

  {/* English Name */}
  <span className="text-orange-600 block mt-2 text-3xl">
    Pt. Praful Sharma
  </span>

  {/* Hindi Name */}
  <span className="block text-2xl font-semibold text-gray-800 mt-2">
    प. प्रफुल्ल शर्मा
  </span>
</h1>
{/* ===== Quick Call Services ===== */}
<div className="mt-8 flex flex-wrap gap-4 justify-center">

  {[
    "काल सर्प दोष",
    "पितृ दोष",
    "मंगल दोष",
    "तंत्र क्रिया",
  ].map((item, index) => (
    <a
      key={index}
      href="tel:8878875554"
      className="bg-orange-100 hover:bg-orange-500 hover:text-white 
      text-orange-700 font-semibold px-5 py-2 rounded-full 
      transition duration-300 shadow-md"
    >
      {item}
    </a>
  ))}

</div>


{/* ✅ Phone Numbers */}
<div className="mt-4 flex flex-col items-center gap-2">

  <a
    href="tel:+917000503090"
    className="text-lg font-semibold text-blue-700 hover:underline"
  >
    📞 7000503090
  </a>

  <a
    href="tel:+918878875554"
    className="text-lg font-semibold text-blue-700 hover:underline"
  >
    📞 8878875554
  </a>

</div>


          <p className="mt-4 max-w-2xl mx-auto text-gray-800 text-lg font-medium">
            विवाह, गृह प्रवेश, दोष निवारण, हवन एवं सभी प्रकार की वैदिक पूजन सेवाएं।
            उज्जैन से पूरे भारत में एवं ऑनलाइन पूजा बुकिंग उपलब्ध।
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

            <a
              href="#services"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
            >
              हमारी पूजन सेवाएँ
            </a>

            <Link
              href="/payment"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
            >
              💳 Payment करें
            </Link>

            <a
              href="tel:+918878875554"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              📞 Direct Call
            </a>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          हमारी पूजन सेवाएँ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ServiceCard title="काल सर्प दोष निवारण एवं शांति" link="/dosh-nivaran" />
          <ServiceCard title="भात पूजन" link="/bhat-puja" />
          <ServiceCard title="मंगल दोष पूजन"link="/mangal-dosh-puja"/>
          <ServiceCard title="कुंडली विश्लेषण" link="/kundali-vishleshan" />
          <ServiceCard title="गृह प्रवेश एवं वास्तु पूजन" link="/griha-pravesh" />
          <ServiceCard title="बगलामुखी मिर्ची हवन" link="/baglamukhi-havan" />
          <ServiceCard title="विवाह पूजन" link="/vivah-puja" />
          <ServiceCard title="त्योहार विशेष पूजन" link="/tyohar-puja" />
          <ServiceCard title="संतान प्राप्ति एवं संस्कार पूजन" link="/santaan-puja" />
          <ServiceCard title="व्यापार एवं वाहन पूजन" link="/vyapar-vahan-puja" />

        </div>
      </section>
      <Gallery />

      {/* Reviews */}
      <Reviews />

    </main>
  );
}

function ServiceCard({ title, link }: { title: string; link: string }) {

  const whatsappNumber = "918878875554";
  const message = `🙏 नमस्ते, मुझे ${title} के बारे में जानकारी चाहिए।`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 text-center border border-orange-100">

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 mb-5 text-sm">
        Offline & Online Puja by Video Call Available
      </p>

      <div className="flex flex-col gap-3">

        <Link
          href={link}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          विवरण देखें
        </Link>

        <a
          href="tel:+918878875554"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          📞 Direct Call
        </a>

        <a
          href={whatsappURL}
          target="_blank"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          💬 WhatsApp Message
        </a>

      </div>
    </div>
  );

}
