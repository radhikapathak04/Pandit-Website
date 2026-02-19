import Image from "next/image";

export default function Gallery() {

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 text-center">
        📸 पूजन की झलकियाँ
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md group"
          >
            <Image
              src={src}
              alt={`Puja Photo ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-44 md:h-48 object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
