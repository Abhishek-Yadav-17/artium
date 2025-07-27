export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-blue-950 to-black text-center py-8 border-t border-blue-900 overflow-hidden">
      {/* Cosmic stars background (optional, subtle) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-black opacity-40" />
        {/* Add more decorative stars if desired */}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4 gap-4">
        {/* Left: Address & tagline */}
        <div className="text-left md:text-left flex-1">
          <div className="text-gold font-futuristic text-lg mb-1">Artium, Mumbai</div>
          <div className="text-white/70 text-sm mb-1">Cosmic Creativity Unleashed</div>
          <div className="text-white/50 text-xs">Mumbai, Maharashtra, India</div>
        </div>
        {/* Center: Social icons */}
        <div className="flex flex-row items-center gap-6 justify-center flex-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition text-white text-2xl" aria-label="Instagram">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition text-white text-2xl" aria-label="LinkedIn">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="mailto:hello@artium.com" className="hover:text-gold transition text-white text-2xl" aria-label="Email">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h23.98v-14zm11.99-8.065h-23.98l11.99 7.065z"/></svg>
          </a>
        </div>
        {/* Right: Copyright */}
        <div className="text-right md:text-right flex-1">
          <div className="text-white/60 text-sm mb-1">© {new Date().getFullYear()} Artium</div>
          <div className="text-gold text-xs">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
} 