"use client";
import Link from "next/link";

import Image from "next/image";

export default function PaymentPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-orange-50 p-6">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">

        <h1 className="text-2xl font-bold mb-4">
          💳 UPI Payment
        </h1>

        <p className="text-gray-600 mb-6">
          नीचे दिए गए QR को स्कैन करके भुगतान करें
        </p>

        <Image
          src="/upi-qr.png"
          alt="UPI QR"
          width={250}
          height={250}
          className="mx-auto rounded-lg"
        />

        <p className="mt-4 font-medium">
          UPI ID: yourupi@okaxis
        </p>

        <Link
  href="/payment"
  className="bg-orange-600 text-white px-6 py-3 rounded-lg text-center"
>
  💳 Payment करें
</Link>


      </div>

    </main>
  );
}
