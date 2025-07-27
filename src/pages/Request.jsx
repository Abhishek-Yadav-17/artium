import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Request form for logged-in users.
 */
export default function Request() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Design",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("artium_logged_in") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form to backend
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-3xl font-futuristic text-gold mb-6">Request a Design or Video</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-70 p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 text-white">Name</label>
          <input
            name="name"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Email</label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Type of Request</label>
          <select
            name="type"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
            value={form.type}
            onChange={handleChange}
          >
            <option>Design</option>
            <option>Video</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-white">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-gold text-black font-bold rounded hover:bg-yellow-400 transition"
        >
          Submit Request
        </button>
        {submitted && (
          <div className="text-green-400 mt-4">
            Request submitted! (This is a demo, no backend yet.)
          </div>
        )}
      </form>
    </section>
  );
} 