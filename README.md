<div align="center">

# Prathmesh Jadhav — Portfolio

**Full-Stack Developer | AI Automation Architect**

[Live Site](https://prathmesh-portfolio.vercel.app) · [Resume](https://prathmesh-portfolio.vercel.app/Prathmesh_Resume.pdf) · [LinkedIn](https://www.linkedin.com/in/prathmesh1222/)

---

</div>

A modern, animated portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features a glassmorphism design language, interactive bento-grid layout, and a fully responsive architecture across light and dark themes.

## Preview

| Dark Mode | Light Mode |
|-----------|------------|
| Frosted glass cards, violet accent system, dot-grid background | Clean whites with soft shadows, maintained contrast and readability |

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS v3, CSS Custom Properties |
| **Animation** | Framer Motion (spring physics, scroll-triggered, 3D tilt) |
| **Language** | TypeScript |
| **Deployment** | Vercel (automatic CI/CD from `main`) |
| **Fonts** | Inter, JetBrains Mono (via `next/font`) |

## Architecture

```
src/
├── app/
│   ├── page.tsx              # Home — Hero, Bento Grid, Projects, Skills
│   ├── cv/page.tsx           # Digital CV with downloadable PDF
│   ├── achievements/page.tsx # Certifications & Hackathons
│   ├── links/page.tsx        # Social Links
│   ├── guestbook/page.tsx    # Guestbook
│   ├── layout.tsx            # Root layout + ThemeProvider
│   └── globals.css           # Design tokens + frosted glass system
├── components/
│   ├── Navbar.tsx             # Floating glassmorphism nav
│   ├── HeroTitle.tsx          # Animated letter-by-letter reveal
│   ├── HeroChat.tsx           # AI chat input decoration
│   ├── BentoGrid.tsx          # 3D tilt cards, tech marquee, location
│   ├── ProjectsSection.tsx    # Expandable project cards with features
│   ├── FeaturedProject.tsx    # Highlighted project showcase
│   ├── SkillsSection.tsx      # Categorized skill pills
│   ├── ExploreSection.tsx     # Navigation cards to subpages
│   ├── ThemeProvider.tsx      # Dark/Light theme context
│   └── Footer.tsx             # Minimal footer
```

## Features

**Design System**
- Frosted glass cards with `backdrop-filter: blur()` over dot-grid backgrounds
- CSS custom properties for seamless dark/light theme switching
- Premium shadow cascades with cubic-bezier hover transitions
- Violet accent system with consistent gradient language

**Interactions**
- Letter-by-letter hero animation with hover glow effects
- 3D perspective tilt on bento grid cards (mouse-tracking)
- Spring-physics scroll animations via Framer Motion
- Expandable project feature tabs with animated detail panels

**Pages**
- **Home** — Hero, About (Bento Grid), Featured Projects, Skills
- **CV** — Digital resume with PDF download
- **Achievements** — Certifications (IIT Bombay, IIT Kharagpur, Google, IBM) and Hackathons
- **Links** — Social profiles and contact
- **Guestbook** — Interactive message board

**Performance**
- Optimized images (1.28MB → 49KB compression)
- Lazy-loaded below-fold components via `next/dynamic`
- Font display swap to prevent FOIT
- Static page generation for all routes

## Getting Started

```bash
# Clone
git clone https://github.com/Prathmesh1222/my-portfolio_.git
cd my-portfolio_

# Install
npm install

# Development
npm run dev

# Production build
npm run build && npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch. Every push triggers a production build.

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built by Prathmesh Jadhav**

[prathmeshjadhav3651@gmail.com](mailto:prathmeshjadhav3651@gmail.com)

</div>
