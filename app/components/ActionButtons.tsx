"use client";

import Link from "next/link";

export default function ActionButtons({ title }: { title: string }) {

  const phone = "+917000503090";

  const message = `🙏 नमस्ते, मुझे ${title} के बारे में जानकारी चाहिए।`;

  const whatsappURL =
    `https://wa.me/917000503090?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

      {/* Direct Call */}
      <a
        href={`tel:${phone}`}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition text-center"
      >
        📞 सीधे कॉल करें
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappURL}
        target="_blank"
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition text-center"
      >
        💬 WhatsApp Message
      </a>

      {/* Book Now */}
      <Link
        href="/payment"
        className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition text-center"
      >
        🪔 अभी बुक करें
      </Link>

    </div>
  );
}
