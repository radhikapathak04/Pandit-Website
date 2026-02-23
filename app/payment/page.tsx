"use client";
import { useState } from "react";
import Image from "next/image";

export default function PaymentPage() {

  const [showApps, setShowApps] = useState(false);

  // ===== YOUR UPI DETAILS =====
  const upiId = "sharmapraful78@okicici"; // <-- apna UPI ID
  const name = "Pt Praful Sharma";
  const amount = ""; // optional amount

  // Universal UPI Link
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&am=${amount}&cu=INR`;

  // App specific intents
  const phonepe = `phonepe://pay?pa=${upiId}&pn=${name}&cu=INR`;
  const gpay = `tez://upi/pay?pa=${upiId}&pn=${name}&cu=INR`;
  const paytm = `paytmmp://pay?pa=${upiId}&pn=${name}&cu=INR`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6 text-center">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Payment करें
      </h1>

      {/* QR CODE */}
      <Image
        src="/upi-qr.png"   // apna QR image public folder me
        alt="UPI QR Code"
        width={280}
        height={280}
        className="rounded-xl shadow-lg"
      />

      {/* OPEN PAYMENT APP BUTTON */}
      <button
        onClick={() => setShowApps(!showApps)}
        className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
      >
        Open Payment App
      </button>

      {/* APP OPTIONS */}
      {showApps && (
        <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">

          <a
            href={phonepe}
            className="bg-purple-600 text-white py-3 rounded-lg font-semibold"
          >
            Open PhonePe
          </a>

          <a
            href={gpay}
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Open Google Pay
          </a>

          <a
            href={paytm}
            className="bg-sky-500 text-white py-3 rounded-lg font-semibold"
          >
            Open Paytm
          </a>

        </div>
      )}

      {/* BACKUP UNIVERSAL LINK */}
      <a
        href={upiLink}
        className="mt-8 text-blue-700 underline"
      >
        अगर app open न हो तो यहाँ क्लिक करें
      </a>

    </main>
  );
}
