import FloatingButtons from "./components/FloatingButtons";

import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ujjain Pandit Ji | Online & Offline Puja Services",
  description:
    "Ujjain ke anubhavi Pandit Ji dwara Vivah, Griha Pravesh, Dosh Nivaran aur sabhi prakar ki puja online aur offline uplabdh.",
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

        {/* ✅ Floating Buttons (ONLY HERE) */}
        <FloatingButtons />

      </body>
    </html>
  );
}
