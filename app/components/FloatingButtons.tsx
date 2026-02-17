"use client";

export default function FloatingButtons() {

  // ✅ Phone Number (without +)
  const phoneNumber = "917000503090";

  // ✅ Auto WhatsApp Message
  const message = encodeURIComponent(
    "🙏 नमस्ते, मुझे puja के बारे में जानकारी चाहिए।"
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* ✅ WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        💬
      </a>

      {/* ✅ Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        📞
      </a>

    </div>
  );
}
