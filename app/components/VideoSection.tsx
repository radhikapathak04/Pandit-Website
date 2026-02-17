export default function VideoSection() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        पूजा की झलकियां (वीडियो)
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Video 1 */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition"></div>

          <video
            controls
            preload="metadata"
            className="relative w-full rounded-2xl shadow-2xl"
          >
            <source src="/vyapar1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Video 2 */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition"></div>

          <video
            controls
            preload="metadata"
            className="relative w-full rounded-2xl shadow-2xl"
          >
            <source src="/vyapar2.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  );
}
