import DigitalPortfolio from "../components/Home/DigitalPortfolio";
import PrintMedia from "../components/Home/PrintMedia";
import AICreatives from "../components/Home/AICreatives";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Cosmic Hero Section with Earth at Top (fills screen) */}
      <section className="relative flex flex-col items-center justify-center min-h-screen h-screen bg-[#0a0a23] overflow-hidden pt-0 mt-0">
        {/* Earth at the top, perfectly centered, upside down */}
        <img
          src="/planet-earth-background.jpg"
          alt="Earth"
          className="absolute top-0 left-0 right-0 mx-auto w-full h-full object-cover rotate-180"
          style={{
            zIndex: 0,
            pointerEvents: 'none',
            filter: 'brightness(1.1) contrast(1.2) saturate(1.3)',
            objectPosition: 'center top',
            opacity: 0.5
          }}
        />
        {/* Gradient overlay for blending */}
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,35,0.2) 70%, rgba(10,10,35,1) 100%)',
            zIndex: 1
          }}
        />
        {/* Floating Asteroids/Planets/Spaceship */}
        <img src="/spaceship.png" alt="Spaceship" className="absolute left-8 top-8 w-32 animate-float-slow opacity-80 z-10" />
        <img src="/aircraft.png" alt="Aircraft" className="absolute left-1/4 bottom-8 w-32 animate-float-reverse opacity-60 z-10" />
        <img src="/multipleAstroids.png" alt="Asteroid" className="absolute right-8 top-24 w-48 animate-float opacity-70 z-10 rotate-45" />
        <img src="/astroid.png" alt="Astroid" className="absolute right-1/4 bottom-4 w-32 animate-float opacity-80 z-10" />
        <img src="/spaceship.png" alt="Spaceship" className="absolute left-8 top-8 w-32 animate-float-slow opacity-80 z-10" />
        {/* Centered Logo and Tagline */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <img
            src="/logoo.png"
            alt="Artium Logo"
            className="w-24 h-24 mt-16 mb-4 z-20"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
            }}
          />
          <h1 className="text-6xl md:text-8xl mb-4 drop-shadow-lg z-20 text-gold">
            <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>A</span>
            <span style={{ fontFamily: 'Quintessential, cursive' }}>rtiu</span>
            <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>M</span>
          </h1>
          <p className="max-w-2xl text-center text-md md:text-xl text-white/80 font-light mb-8 z-20">
          At <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#ffd700' }}>A</span>
            <span style={{ fontFamily: 'Quintessential, cursive', color: '#ffd700' }}>rtiu</span>
            <span style={{ fontFamily: 'Cinzel Decorative, serif', color: '#ffd700' }}>M</span>, 
            we believe creativity isn’t just a service — it’s an experience.
            Rooted in the timeless spirit of the arts and driven by the future of digital innovation, ArtiuM is a freelance digital service provider that brings meaningful ideas to life with elegance, emotion, and originality.
            <br/>
            Whether it's a bold visual identity, a compelling digital campaign, or an AI-assisted creative solution — everything we create is designed to make an impact. Our mission is simple yet powerful: to transform ideas into visually stunning, emotionally resonant experiences that speak louder than words. <br />
            From Mumbai to the cosmos, we blend digital, print, and AI to craft unforgettable stories.
          </p>
        </div>
      </section>
      <DigitalPortfolio />
      <PrintMedia />
      <AICreatives />
    </div>
  );
} 