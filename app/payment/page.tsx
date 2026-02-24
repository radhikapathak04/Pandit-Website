"use client";
import { useState } from "react";
import Image from "next/image";

export default function PaymentPage() 
{
  const [showApps, setShowApps] = useState(false);

  // ===== YOUR UPI DETAILS =====
  const upiId = "sharmapraful78@okicici";
  const name = "Pt Praful Sharma";
// ✅ Universal UPI Link (NO LIMIT)
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&cu=INR`;

  // ✅ App specific links (proper encoding)
  const phonepe = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&cu=INR`;

  const gpay = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&cu=INR`;

  const paytm = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&cu=INR`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6 text-center">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        सुरक्षित UPI Payment करें
      </h1>

      {/* QR CODE */}
      <Image
        src="/upi-qr.png"
        alt="UPI QR Code Payment Pandit Praful Sharma"
        width={280}
        height={280}
        priority
        className="rounded-xl shadow-lg"
      />

      <p className="mt-3 text-gray-700">
        Scan करें या Payment App खोलें
      </p>

      {/* OPEN APP BUTTON */}
      <button
        onClick={() => setShowApps(!showApps)}
        className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
      >
        📲 Open Payment App
      </button>

      {/* APP OPTIONS */}
      {showApps && (
        <div className="mt-6 flex flex-col gap-3 w-full max-w-xs animate-fadeIn">

          <a
            href={phonepe}
            className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Open PhonePe
          </a>

          <a
            href={gpay}
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Open Google Pay
          </a>

          <a
            href={paytm}
            className="bg-sky-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Open Paytm
          </a>

        </div>
      )}

      {/* FALLBACK */}
      <a
        href={upiLink}
        className="mt-8 text-blue-700 underline font-medium"
      >
        App open न हो तो यहाँ क्लिक करें
      </a>

      {/* TRUST TEXT */}
      <p className="text-sm text-gray-500 mt-6">
        Supported Apps: PhonePe • Google Pay • Paytm • BHIM • Any UPI App
      </p>

    </main>
  );
}
