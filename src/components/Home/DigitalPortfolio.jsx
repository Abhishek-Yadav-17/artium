/**
 * Digital Portfolio Section
 * Displays digital creative works in a responsive grid.
 */
const digitalImagesTop = [
  "/images/digital5/01.jpeg",
  "/images/digital5/02.jpeg",
  "/images/digital5/03.jpeg",
  "/images/digital5/04.jpeg",
  "/images/digital5/05.jpeg",
  "/images/digital5/06.jpeg"
];

const digitalImagesBottomLeft = [
  "/images/digital/01.jpeg",
  "/images/digital/02.jpeg",
  "/images/digital/03.jpeg",
  "/images/digital/04.jpeg",
  "/images/digital/05.jpeg",
  "/images/digital/06.jpeg",
  "/images/digital/07.jpeg",
  "/images/digital/08.jpeg",
  "/images/digital/09.jpeg",
  "/images/digital/10.jpeg",
  "/images/digital/11.jpeg",
  "/images/digital/12.jpeg",
  "/images/digital/13.jpeg",
  "/images/digital/14.jpeg",
  "/images/digital/15.jpeg",
  "/images/digital/16.jpeg",
];

const videosBottomRight = [
  "/videos/A coffee bean bursting ROASTEA_V2.mp4",
  "/videos/CHAVA.mp4",
  "/videos/Sugee_04.mp4",
  "/videos/Vinsmera AI Video_V4.mp4",
  "/videos/adidas.mp4",
];

export default function DigitalPortfolio() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-black via-blue-950 to-black">
      {/* Top 30%: Text left, 4 overlapping images right (scattered collage, bigger, much less overlap) */}
      <div className="flex flex-col md:flex-row mb-8" style={{ minHeight: "30vh" }}>
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ fontFamily: 'Cinzel Decorative, serif' }} className="text-gold">Digital </span>
            <span style={{ fontFamily: 'Raleway, sans-serif' }} className="text-white">Portfolio</span>
          </h2>
          <p className="max-w-xl text-white/80" style={{ fontFamily: 'Lato, sans-serif' }}>
            Explore our digital campaigns, social media creatives, and more. Each piece is a blend of art and technology, designed to inspire and engage.
          </p>
        </div>
        {/* 4 Overlapping images (scattered collage, bigger, much less overlap) */}
        <div className="flex-1 relative flex items-center justify-center min-h-[420px] md:min-h-[520px] w-full md:w-[700px]">
          {/* Center image */}
          <img
            src={digitalImagesTop[2]}
            alt="Featured 3"
            className="rounded-xl shadow-lg w-40 h-60 object-cover absolute"
            style={{
              top: '140px',
              left: '180px',
              zIndex: 12,
              transform: 'rotate(-2deg)'
            }}
          />
          {/* Top left - farther and higher */}
          <img
            src={digitalImagesTop[0]}
            alt="Featured 1"
            className="rounded-xl shadow-lg w-32 h-48 object-cover absolute"
            style={{
              top: '20px',
              left: '60px',
              zIndex: 11,
              transform: 'rotate(-10deg)'
            }}
          />
          {/* Top right - farther and higher */}
          <img
            src={digitalImagesTop[1]}
            alt="Featured 2"
            className="rounded-xl shadow-lg w-32 h-48 object-cover absolute"
            style={{
              top: '10px',
              left: '320px',
              zIndex: 11,
              transform: 'rotate(8deg)'
            }}
          />
          {/* Bottom left - farther and lower */}
          <img
            src={digitalImagesTop[4]}
            alt="Featured 5"
            className="rounded-xl shadow-lg w-32 h-48 object-cover absolute"
            style={{
              top: '300px',
              left: '80px',
              zIndex: 10,
              transform: 'rotate(7deg)'
            }}
          />
          {/* Bottom right - farther and lower */}
          <img
            src={digitalImagesTop[3]}
            alt="Featured 4"
            className="rounded-xl shadow-lg w-32 h-48 object-cover absolute"
            style={{
              top: '320px',
              left: '300px',
              zIndex: 10,
              transform: 'rotate(-7deg)'
            }}
          />
        </div>
      </div>
      {/* Bottom 70%: Grid of images */}
      {/* Lower Grid: Masonry (Pinterest-style) layout */}
      <div className="relative py-8">
        {/* Futuristic blue glow background */}
        <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] bg-blue-700 opacity-20 blur-3xl rounded-full" />
        {/* Masonry grid using CSS columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {/* Combine images and videos into a single array for mixed display */}
          {[
            ...digitalImagesBottomLeft.map((src, i) => ({ type: 'image', src, key: `img-${i}` })),
            ...videosBottomRight.map((src, i) => ({ type: 'video', src, key: `vid-${i}` }))
          ]
            // Shuffle for a more natural masonry look
            .sort(() => Math.random() - 0.5)
            .map((item, idx) => (
              <div
                key={item.key}
                className="mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-900 bg-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold"
                style={{
                  boxShadow: "0 4px 32px 0 rgba(0, 255, 255, 0.15), 0 0px 0px 1px #1e3a8a",
                }}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Digital Portfolio ${idx+1}`}
                    className="w-full object-cover rounded-2xl"
                    style={{ height: `${220 + (idx % 3) * 60}px` }}
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full object-cover rounded-2xl"
                    style={{ height: `${220 + (idx % 2) * 80}px` }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                  />
                )}
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/10 to-transparent px-4 py-2">
                  <span className="text-gold font-bold">@artium_creative</span>
                  <span className="block text-xs text-white/70">Project {idx+1}</span>
                </div>
                {/* Futuristic border glow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_24px_4px_rgba(0,255,255,0.4)] transition" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
} 