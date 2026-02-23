import FloatingButtons from "./components/FloatingButtons";
import ClientOnly from "./components/ClientOnly";
//import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pandit in Ujjain | Pt Praful Sharma | Kal Sarp Dosh Puja Ujjain",
  description:
    "उज्जैन के अनुभवी पंडित द्वारा काल सर्प दोष पूजा, मंगल दोष, गृह प्रवेश, विवाह पूजा एवं सभी वैदिक अनुष्ठान। Online & Offline Puja Booking Available.",
  keywords: [
    "Pandit in Ujjain",
    "Kal Sarp Dosh Puja Ujjain",
    "Mangal Dosh Puja",
    "Ujjain Pandit Booking",
    "Grah Pravesh Puja Ujjain",
  ],
verification: {
    google: "zKnN4bIAU1B5aLdlyT2rH30eY5qdWZIv2mtUW3p91dA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ Floating Buttons FIX */}
        <ClientOnly>
          <FloatingButtons />
        </ClientOnly>

      </body>
    </html>
  );
}
