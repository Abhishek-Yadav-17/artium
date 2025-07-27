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
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-black via-blue-950 to-black">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span style={{ fontFamily: 'Cinzel Decorative, serif' }} className="text-gold">Artificial </span>
        <span style={{ fontFamily: 'Raleway, sans-serif' }} className="text-white">Intelligence</span>
      </h2>
      <p className="max-w-2xl mb-8 text-white/80" style={{ fontFamily: 'Lato, sans-serif' }}>
        Our AI-generated visuals push the boundaries of imagination. Discover how machine learning and creativity unite at Artium.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Mirrored robot image (taller) */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src="/Graident Ai Robot.png"
            alt="AI Robot"
            className="object-contain animate-floatY"
            style={{ maxWidth: '400px', maxHeight: '600px', height: '600px', objectFit: 'cover', transform: 'scaleX(-1)' }}
          />
        </div>
        {/* Right: Instagram-style cards (taller) */}
        <div className="w-full md:w-2/3 flex flex-row gap-8 justify-center items-center">
          {aiImages.map((src, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden w-64 h-96 flex flex-col justify-between">
              <img src={src} alt={`AI Creative ${i+1}`} className="w-full h-4/5 object-cover" />
              {/* Instagram-style footer */}
              <div className="px-4 py-2 flex flex-col gap-1">
                <div className="flex items-center gap-3 text-lg">
                  <span role="img" aria-label="like">❤️</span>
                  <span role="img" aria-label="comment">💬</span>
                  <span role="img" aria-label="share">🔗</span>
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