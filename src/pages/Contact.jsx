import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);
    try {
      const res = await fetch("https://artium-backend.onrender.com/api/test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "theartbyartium@gmail.com, mrunmaiglakras@gmail.com",
          subject: `Contact Form Submission from ${form.name}`,
          body: `Email: ${form.email}\nMessage: ${form.message}`
        })
      });
      if (!res.ok) throw new Error("Failed to send email");
      setSent(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] px-4">
      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-gold">Contact </span>
        <span style={{ fontFamily: 'Cinzel Decorative, serif' }}>US</span>
      </h2>
      <div className="max-w-2xl w-full bg-black bg-opacity-70 p-8 rounded-xl shadow-lg mb-8">
        <div className="mb-4">
          <b>Address:</b> Mumbai, Maharashtra, India
        </div>
        <div className="mb-4">
          <b>Email:</b> <a href="mailto:theartbyartium@gmail.com" className="text-gold">theartbyartium@gmail.com</a>
        </div>
        <div className="mb-4">
          <b>Phone:</b> <a href="tel:+911234567890" className="text-gold">+91 1234567890</a>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
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
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && (
            <div className="text-green-400 mt-4">
              Message sent! Thank you for contacting us.
            </div>
          )}
          {error && (
            <div className="text-red-400 mt-4">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
} 