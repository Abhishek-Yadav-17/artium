/**
 * AI Creatives Section
 * Displays AI-generated creative works in a responsive grid.
 */
const aiImages = [
  "/images/ai/01.jpeg",
  "/images/ai/02.jpeg",
  "/images/ai/03.jpeg"
];

export default function AICreatives() {
  return (
    <section className="py-12 px-2 sm:px-4 md:px-12 bg-gradient-to-b from-black via-blue-950 to-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span style={{ fontFamily: 'Cinzel Decorative, serif' }} className="text-gold">Artificial </span>
        <span style={{ fontFamily: 'Raleway, sans-serif' }} className="text-white">Intelligence</span>
      </h2>
      <p className="max-w-2xl mb-8 text-white/80 text-base sm:text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
        Our AI-generated visuals push the boundaries of imagination. Discover how machine learning and creativity unite at Artium.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Mirrored robot image (responsive) */}
        <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
          <img
            src="/Graident Ai Robot.png"
            alt="AI Robot"
            className="object-contain animate-floatY w-40 h-56 sm:w-56 sm:h-80 md:w-72 md:h-[400px]"
            style={{
              objectFit: 'cover',
              transform: 'scaleX(-1)'
            }}
          />
        </div>
        {/* Right: Instagram-style cards (responsive) */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-6 justify-center items-center">
          {aiImages.map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden w-64 h-80 sm:w-56 sm:h-80 md:w-64 md:h-96 flex flex-col justify-between mb-6 sm:mb-0"
            >
              <img src={src} alt={`AI Creative ${i+1}`} className="w-full h-4/5 object-cover" />
              {/* Instagram-style footer */}
              <div className="px-4 py-2 flex flex-col gap-1">
                <div className="flex items-center gap-3 text-lg">
                  <div className="flex gap-6 text-xl text-gray-700">
                    <i className="fas fa-heart text-red-500 cursor-pointer"></i>
                    <i className="far fa-comment text-blue-500 cursor-pointer transition duration-200"></i>
                    <i className="fas fa-paper-plane text-green-500 cursor-pointer transition duration-200"></i>
                  </div>
                </div>
                <div className="text-xs text-gray-500">2.1k likes</div>
                <div className="text-xs text-gray-500">View all 320 comments</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 