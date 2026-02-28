# Time Machine - Company Website

Corporate website for Time Machine, an engineering company specializing in industrial manufacturing equipment, PLC programming, HMI development, and digital solutions.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme colors and global styles
│   ├── layout.tsx        # Root layout with Header/Footer
│   └── page.tsx          # Homepage
└── components/
    ├── Header.tsx        # Navigation with mobile menu
    ├── Hero.tsx          # Hero/landing section
    ├── Services.tsx      # Services grid
    ├── About.tsx         # About + capabilities
    ├── Contact.tsx       # Contact form + info
    └── Footer.tsx        # Site footer
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Gold Light | `#D7C59A` | Accent, text on dark backgrounds |
| Gold Dark | `#8B814C` | Borders, subtle accents |
| Orange | `#CE7E00` | Primary CTA, highlights |
| Teal | `#00323E` | Primary dark, backgrounds |
