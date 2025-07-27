import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  // { to: "/request", label: "Request" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-3xl font-bold text-gold font-futuristic tracking-widest">
            <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>A</span>
            <span style={{ fontFamily: 'Quintessential, cursive' }}>rtiu</span>
            <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>M</span>
        </Link>
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-futuristic text-lg transition ${
                location.pathname === link.to
                  ? "text-gold underline"
                  : "text-white hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            to="/login"
            className="ml-4 px-4 py-1 border border-gold text-gold rounded-full font-futuristic hover:bg-gold hover:text-black transition"
          >
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
} 