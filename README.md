# Bengaluru Bhavan 🍛✨

**Bengaluru Bhavan** is a premium vegetarian restaurant based in Bhimavaram, Andhra Pradesh, bringing the authentic taste and nostalgia of Bengaluru's tiffin culture to town. 

This repository contains the front-end codebase for the official Bengaluru Bhavan website, designed to be lightning-fast, beautifully responsive, and SEO-optimized.

## 🌟 Features

- **Cinematic Hero Section:** Features a high-quality video background for an immersive first impression.
- **Dynamic Menu:** A tabbed, animated menu showcasing morning tiffins, curries, starters, and beverages with localized Telugu styling.
- **Masonry Gallery Lightbox:** A fluid masonry grid gallery with a swipe-enabled fullscreen lightbox to beautifully showcase the restaurant's ambiance and signature dishes.
- **Responsive Architecture:** Pixel-perfect adjustments across mobile, tablet, and desktop devices.
- **Delivery Integration:** Direct ordering links for Swiggy and Zomato.
- **Future-Proofed for Firebase:** Placeholder backend architecture for future contact form handling using Firebase Firestore.

## 📂 Project Structure

```text
bengaluru_bhavan/
│
├── index.html            # Main entry point, fully optimized for SEO.
├── style.css             # Vanilla CSS, neatly sectioned and optimized.
├── script.js             # Vanilla JS for DOM manipulation, lightbox, and tabs.
├── README.md             # Project documentation.
│
├── assets/               # All optimized static assets (images, videos, logos).
│   ├── images/
│   │   ├── gallery/
│   │   ├── hero/
│   │   ├── logos/
│   │   └── menu/
│   └── videos/
│
└── firebase/             # Placeholder configs for future Backend-as-a-Service integration.
    ├── firebase-config.js
    └── firestore.js
```

## 🚀 Deployment

This project is built using pure HTML, CSS, and JavaScript. It contains no server-side rendering logic or complex build steps, making it perfect for static hosting environments.

**Deploy with Netlify / Vercel / GitHub Pages:**
1. Connect this repository to your preferred static hosting provider.
2. Set the publish directory to the root `/`.
3. Deploy!

## 🛠️ Development & Maintenance

To run the project locally, simply clone the repository and open `index.html` in your browser, or use a local development server like VS Code's Live Server extension.

- **Images & Video:** All media assets are compressed for fast loading. When adding new items, ensure they are placed in their respective categorized folders in `assets/`.
- **Styling:** CSS is completely vanilla. Global variables are defined at the top of `style.css` to easily tweak brand colors and typography.
- **Telugu Fonts:** We utilize Google Fonts (`Ramabhadra`) for rendering native Telugu scripts beautifully. 

---
*Created with ❤️ for Bengaluru Bhavan.*
