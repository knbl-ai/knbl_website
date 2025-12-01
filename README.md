# KNBL Website

A modern, animated marketing website for KNBL - a strategy-driven creative collective.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React 19** for UI components

## Features

- ✨ Smooth scroll animations
- 🎨 Modern gradient design system
- 📱 Responsive design (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js
- 🎭 Interactive hover effects
- 🎬 Animated sections with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
knbl_web_site/
├── app/
│   ├── components/         # Page section components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Tag.tsx
│       └── ScrollIndicator.tsx
├── lib/
│   └── data/              # Data files (to be added)
├── public/
│   └── images/            # Image assets
└── tailwind.config.ts     # Tailwind configuration
```

## Design System

### Colors

- **Primary**: #4F39F6 (Purple) with variants
- **Neutral**: Grayscale from white to black
- **Accent**: Indigo shades

### Typography

- **Font**: Inter (Regular, Medium, Extra Light)
- **Sizes**: Responsive text scaling

## Sections

1. **Hero** - Full-screen hero with gradient background and floating badges
2. **About** - Company introduction
3. **Services Grid** - Four service cards with hover animations
4. **How We Do It** - Sticky sidebar with numbered cards
5. **Projects Portfolio** - Mixed grid layout of project cards
6. **Brands** - Logo grid of trusted partners
7. **Blog/Insights** - Three-column article grid
8. **Community** - Video section with glassmorphism card
9. **FAQ** - Accordion-style questions
10. **Footer** - Multi-column footer with links

## Next Steps

To complete the website:

1. **Add Real Images**:
   - Replace placeholder gradients with actual images
   - Download images from Figma API URLs
   - Optimize images (WebP format)
   - Place in `public/images/` directories

2. **Create Data Files**:
   - `lib/data/projects.ts` - Project data
   - `lib/data/blogs.ts` - Blog post data
   - `lib/data/faqs.ts` - FAQ data
   - `lib/data/brands.ts` - Brand logo data

3. **Add SVG Icons**:
   - Extract icons from Figma
   - Create icon components or SVG files

4. **Mobile Optimization**:
   - Test and refine responsive breakpoints
   - Add hamburger menu for mobile
   - Optimize touch interactions

5. **Performance**:
   - Add Next.js Image component for all images
   - Implement lazy loading
   - Add loading states

## License

© 2025 KNBL. All rights reserved.
