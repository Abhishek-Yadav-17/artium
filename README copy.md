# 🌌 Artium Homepage

A cosmic-themed, full-stack creative agency website for **Artium** — Mumbai’s boutique design studio blending digital, print, and AI.

---

## ✨ Features
- **Cosmic hero section** with animated floating elements and custom background
- **Digital Portfolio**: Instagram-style cards, vertical/horizontal split grid, interactive overlays
- **Print Media**: Professional mockup layout, text-image split
- **AI Creatives**: Mirrored robot background, animated, with Instagram-style cards
- **About**: Beautiful, story-driven, cosmic-themed content
- **Login & Signup**: Modern, gold-accented forms
- **Custom Cursor**: Aircraft or spaceship cursor for a futuristic feel
- **Fully responsive** and mobile-friendly

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: (Pluggable, not included in this repo)
- **Assets**: All images in `/public/images/` and `/public/cursor/`

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. **Open in your browser:**
   [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
artium-homepage/
├── public/
│   ├── images/           # All creative assets (digital, print, ai)
│   ├── cursor/           # Custom cursor files (.cur, .ico, .png)
│   └── ...
├── src/
│   ├── components/
│   │   └── Home/
│   │       ├── DigitalPortfolio.jsx
│   │       ├── PrintMedia.jsx
│   │       └── AICreatives.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── ...
│   ├── App.js
│   └── index.css
├── tailwind.config.js
└── ...
```

---

## 🖱️ Custom Cursor
- Place your `.cur` or `.ico` file in `/public/cursor/`.
- The cursor is set in `public/index.html`:
  ```html
  <style>
    body { cursor: url('/cursor/aircraft1.cur'), url('/cursor/aircraft1.ico'), auto; }
  </style>
  ```

---

## 🖼️ Adding/Changing Images
- Place digital, print, and AI images in `/public/images/digital/`, `/print/`, `/ai/`.
- Update the image arrays in the respective components if you add new images.

---

## 📝 Customization
- **Colors, fonts, and layout** can be changed in `tailwind.config.js` and `index.css`.
- **Section content** is in `/src/pages/` and `/src/components/Home/`.
- **Animations** are in `index.css` (e.g., `.animate-floatY`).

---

## 💡 Tips
- For best custom cursor support, use `.cur` or `.ico` files, 32x32 or 48x48 px.
- To add more sections, create a new component in `/src/components/Home/` and import it in `Home.jsx`.
- To connect a backend, add API calls in the form handlers (Login, Signup, Request).

---

## 📣 Credits
- Design and code by [Your Name/Team].
- Inspired by the cosmos, built for creative brands.

---

## 📜 License
MIT 