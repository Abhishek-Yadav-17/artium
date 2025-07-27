import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Dummy login page. Accepts any email/password.
 */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErr("Please enter both email and password.");
      return;
    }
    // Simulate login
    localStorage.setItem("artium_logged_in", "true");
    navigate("/request");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh]">
      <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-gold">Log</span>
          <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>IN</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-70 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-2 text-white">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-gold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-white">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-gold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {err && <div className="text-red-400 mb-4">{err}</div>}
        <button
          type="submit"
          className="w-full py-2 bg-gold text-black font-bold rounded hover:bg-yellow-400 transition"
        >
          Login
        </button>
        <div className="text-center text-white/60 mt-4">
          Don't have an account? <a href="/signup" className="text-gold hover:underline">Signup</a>
        </div>
      </form>
    </section>
  );
} 