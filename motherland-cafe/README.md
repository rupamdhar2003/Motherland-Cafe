# Motherland Cafe

A React + Vite site for Motherland Cafe, Chowringhee — Kolkata's all-day cafe & coworking space.

## Component library

Every section is a reusable, prop-driven component. Swap the data file to reskin the same shell for another cafe.

```
src/
├── components/
│   ├── Navbar/          Sticky top nav + mobile drawer
│   ├── Hero/            Above-the-fold headline, rating, dual CTA
│   ├── About/           Story + amenity chips
│   ├── MenuHighlights/  Signature dishes grid
│   ├── PrimaryCTA/      Reservation form (varies per cafe)
│   ├── Reviews/         Google review testimonials
│   ├── Location/        Maps embed + hours
│   ├── Contact/         Phone / WhatsApp / email
│   └── Footer/          Credits + socials
└── data/
    └── motherland.js    All cafe content in one object
```

## Quick start

```bash
npm install
cp .env.example .env    # then paste your Web3Forms key
npm run dev             # http://localhost:5173
```

## Form → email → WhatsApp handshake

On successful reservation submit:
1. Form POSTs to Web3Forms — email lands in the owner's inbox.
2. Browser opens `wa.me/919748077790` in a new tab with the reservation details prefilled so the customer can send a WhatsApp confirmation with one tap.

Zero backend required.

## Images

Local photos live in `public/images/motherland/`. They were downloaded from the business's Google listing at build time so the demo never breaks when Google's URL tokens expire.

## Deploy

Vercel-ready. `npm run build` outputs `dist/`.
