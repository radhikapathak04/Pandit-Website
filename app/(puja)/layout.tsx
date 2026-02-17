import type { ReactNode } from "react";

export default function PujaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen">

      {/* ✅ Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/puja-bg.jpg')",
        }}
      />

      {/* ✅ Light overlay (readability) */}
      <div className="fixed inset-0 -z-10 bg-white/80 backdrop-blur-sm" />

      {/* Page Content */}
      {children}
    </div>
  );
}
