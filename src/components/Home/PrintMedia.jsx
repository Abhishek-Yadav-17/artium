export default function PrintMedia() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-black via-blue-950 to-black h-full">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Text */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ fontFamily: 'Cinzel Decorative, serif' }} className="text-gold">Print </span>
            <span style={{ fontFamily: 'Raleway, sans-serif' }} className="text-white">Media</span>
          </h2>
          <p className="max-w-xl text-white/80" style={{ fontFamily: 'Lato, sans-serif' }}>
            At ArtiuM, we believe print is more than ink on paper — it’s presence, permanence, and personality. Whether it’s a bold poster, a letterhead, or a perfectly bound brand book, print makes design tangible.<br /><br />
            We craft every printed piece to echo your identity — clean, sophisticated, and unforgettable. Because in a digital world, what you can touch still makes the strongest impact.
          </p>
        </div>
        {/* Right: Mockup group (single image, smaller) */}
        <div>
          <div
            style={{
              maxWidth: '100%',
              width: '100%'
            }}
          >
            <img
              src="/images/print/print.jpg"
              alt="Print Media Mockup"
              className="object-contain w-full h-full rounded-2xl"
              style={{
                background: 'transparent',
                maxHeight: '100%',
                maxWidth: 'auto',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 