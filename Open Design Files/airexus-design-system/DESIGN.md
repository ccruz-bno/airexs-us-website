# AirexUs - Design System

> Category: Custom
> Surface: web

Servicios de ingeniería y planos para compañias de HVAC en tema industrial / comercial.

## Source Context
- **GitHub Repository**: https://github.com/ccruz-bno/airexs-us-home-page
- **Local Code**: /Volumes/Carlos Cruz II/- · WORK II · -/Black-n-Orange/Clientes BnO/Airexs US/- Contenido Airexs US -/AirexsUS - Sitio Web
- **Figma**: Design System _ UI Kit - MD - Airexs US.fig

## 1. Visual Theme & Atmosphere

The design system projects a professional, industrial, and clean atmosphere, relying on a stark contrast between bright technical accents (yellow and cyan) and grounded structural neutrals (blacks, dark grays, slates). The mood is tailored to B2B audiences in HVAC and engineering.

## 2. Color

**Primary Colors:**
- **Primary Yellow:** `#FFE900` — High-visibility accent.
- **Primary Cyan:** `#2B99D1` — Action and secondary accent.
- **Primary Black:** `#0C1115` — Main text and deep contrast elements.
- **Primary White:** `#F1F1F1` — Main background canvas.

**Secondary/Structural Colors:**
- **Dark 1:** `#21242B` — Elevated dark surfaces.
- **Dark 2:** `#323641` — Interactive dark surfaces or borders.
- **Gray:** `#8C878D` — Muted text or secondary borders.
- **Slate:** `#597174` — Subtle accents and tertiary elements.

**Gradients:**
- **Yellow-Cyan:** `linear-gradient(90deg, #FFE900 0%, #2B99D1 100%)` — Used as an energetic brand flourish for text or backgrounds.

## 3. Typography

- **Font Family:** `Poppins` (Google Fonts), fallback to `sans-serif`.
- **Weights:** Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700).
- **Behavior:** Text balance (`text-wrap: balance`) is applied to headings and paragraphs to ensure readable line lengths.

## 4. Spacing & Radius

- **Spacing:** Uses Tailwind's default spacing scale (`0.25rem` increments). Fluid sections with clear horizontal padding (`px-4` to `px-8`).
- **Radius:** Defined tokens (`--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 12px`, `--radius-full: 9999px`) ensure consistent application of rounded corners.

## 5. Layout & Composition

- Centered content max-widths.
- Mobile-first approach with breakpoints typically targeting `1024px` for switching to full desktop backgrounds (e.g., Hero Background).

## 6. Components

- **Hero:** Employs responsive background images.
- **Cards & Features:** Uses outlined framing or subtle dark elevated backgrounds.
- **Navbar/Footer:** Features SVG brand logos with dark backgrounds.
- **Buttons:** Utilizes `--radius-sm` or `--radius-md` with either a solid Yellow-Cyan gradient or an outlined cyan border.

## 7. Motion & Interaction

- **Scroll Behavior:** Smooth scrolling is enabled globally (`scroll-behavior: smooth`).

## 8. Voice & Brand

- Professional, structural, engineering-focused tone.

## 9. Anti-patterns

- Avoid overly rounded playful corners; stick to `--radius-md`.
- Avoid generic pastel or warm beige backgrounds; stick to the `#F1F1F1` white or deep `#0C1115` black.
- Do not use more than one gradient type; stick to the Yellow-Cyan combo.
