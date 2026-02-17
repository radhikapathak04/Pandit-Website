"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function AdminUpload() {

  const [files, setFiles] = useState<string[]>([]);
  const [password, setPassword] = useState("");

  const ADMIN_PASS = "pandit123";

  /* ✅ Load already saved images */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("adminMedia");

    if (saved) {
      try {
        const parsed: string[] = JSON.parse(saved);
        setFiles(parsed);
      } catch {
        console.log("Invalid saved media");
      }
    }
  }, []);

  /* ✅ Upload Handler */
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (password !== ADMIN_PASS) {
      alert("Wrong Password");
      return;
    }

    const selected = e.target.files;
    if (!selected) return;

    const readers: Promise<string>[] = [];

    for (let i = 0; i < selected.length; i++) {
      readers.push(
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(selected[i]);
        })
      );
    }

    Promise.all(readers).then((images) => {
      const updated = [...files, ...images];

      setFiles(updated);

      localStorage.setItem(
        "adminMedia",
        JSON.stringify(updated)
      );
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">

      <h2 className="text-2xl font-bold mb-4 text-center">
        🔐 Admin Upload Panel
      </h2>

      {/* Password */}
      <input
        type="password"
        placeholder="Admin Password"
        className="border p-3 mb-4 w-full rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Upload */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="w-full"
      />

      {/* Preview */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {files.map((file, index) => (
          <Image
  key={index}
  src={file}
  alt="Uploaded"
  width={200}
  height={100}
  className="w-full h-24 object-cover rounded"
/>

        ))}
      </div>

    </div>
  );
}
