# BIZY BOTZ Landing Page

A modern, animated landing page for BIZY BOTZ - AI automation for Australian SMBs.

## Features

- 🎨 Modern SaaS design with glassmorphism effects
- ✨ Smooth scroll animations using Framer Motion
- 🎭 Animated gradient backgrounds
- 📱 Fully responsive mobile-first design
- ⚡ Built with Next.js 15 and Tailwind CSS
- 🔍 SEO optimized
- 🚀 Fast loading and performance optimized

## Tech Stack

- **Framework**: Next.js 15.0.0
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **Icons**: Lucide React
- **Language**: TypeScript

## Design System

### Colors

- **Primary**: #2D1B4E (Dark Purple)
- **Accent**: #FF6B35 (Orange)
- **Text**: #FFFFFF (White)

### Sections

1. **Hero** - Full-height section with animated gradient, headline, and CTAs
2. **Problem** - Three pain point cards that fade in on scroll
3. **Capabilities** - Eight glassmorphism cards showcasing AI features
4. **How It Works** - Three-step timeline with animated progression
5. **Results** - Split layout with animated stats and benefit checklist
6. **Testimonials** - Customer reviews with 5-star ratings
7. **Final CTA** - Large conversion section with animated background
8. **Footer** - Complete footer with links and social icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
bizy-botz-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles and Tailwind
│   └── components/
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── CapabilitiesSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── ResultsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FinalCTASection.tsx
│       └── Footer.tsx
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#2D1B4E",
    dark: "#1a0f2e",
    light: "#3d2b5e",
  },
  accent: {
    DEFAULT: "#FF6B35",
    light: "#ff8559",
    dark: "#e55520",
  },
}
```

### Content

All section content can be edited in the respective component files in `src/components/`.

## Performance

- Optimized animations with Framer Motion
- Lazy loading of sections with IntersectionObserver
- Minimal bundle size with tree-shaking
- Fast page loads with Next.js optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 BIZY BOTZ. All rights reserved.
