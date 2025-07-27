import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and backend integration here
    alert("Signup successful! (Demo only)");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black px-4">
      <div className="w-full max-w-md bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-900 animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-gold">Sign</span>
          <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>UP</span>
          </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-white/80">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-gold outline-none"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 text-white/80">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-gold outline-none"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 text-white/80">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-gold outline-none"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 text-white/80">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-gold outline-none"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-gold text-black font-bold rounded-lg hover:bg-yellow-400 transition"
          >
            Create Account
          </button>
        </form>
        <div className="text-center text-white/60 mt-4">
          Already have an account? <a href="/login" className="text-gold hover:underline">Login</a>
        </div>
      </div>
    </section>
  );
} 