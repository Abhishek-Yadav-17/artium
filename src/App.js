import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Request from "./pages/Request";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import CustomCursor from "./components/CustomCursor";

const appStyle = {
  // backgroundColor: "#0a0a23", // Keep dark background via Tailwind or section classes
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  color: "#fff",
  cursor: "url('/cursor/aircraft1.cur'), url('/cursor/aircraft1.ico'), auto",
  fontFamily: "'Raleway', 'Lato', sans-serif",
};

function App() {
  return (
    <div style={appStyle}>
      <Router>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request" element={<Request />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
