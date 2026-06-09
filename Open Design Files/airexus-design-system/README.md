# AirexUs - Design System

## Product Overview
AirexUs - Design System provides a professional, structural, and clean aesthetic tailored for B2B audiences, specifically HVAC companies in the industrial and commercial sectors. The primary UI surfaces include marketing landing pages and technical engineering dashboards. The core capabilities, evidenced by the preserved styling configurations and branding assets, focus on robust structural planning, high-visibility actions, and clear information hierarchy suited for detailed technical consultations. This product platform features robust interaction tools built to elevate any HVAC application.

## Source Evidence
- **GitHub Repository**: `ccruz-bno/airexs-us-home-page` under `context/files`
- **Local Code**: `/Volumes/Carlos Cruz II/- · WORK II · -/Black-n-Orange/Clientes BnO/Airexs US/- Contenido Airexs US -/AirexsUS - Sitio Web`
- **Figma**: `Design System _ UI Kit - MD - Airexs US.fig`

## Package Contents
- `DESIGN.md`: The canonical source of truth for the design system's visual rules and components.
- `SKILL.md`: The discoverable skill package definition for this system.
- `colors_and_type.css`: Extracted CSS custom properties for colors, gradients, typography, radius, and spacing.
- `assets/files`: Preserved source logos (Imagotipo, Isotipo) and brand marks.
- `build/files`: Reserved for preserved runtime or compiled binary assets.
- `source_examples/files`: High-signal original code (`style.css`, `tailwind.config.js`).
- `preview/files`: Focused HTML cards demonstrating the system tokens.
- `ui_kits/app`: Applied React/JSX component workspace.

## Preview Manifest
- `preview/brand-assets.html`: Visibly loads the preserved SVGs and binary assets from the `assets/files` directory. Reviewers should inspect this to see the authentic brand identity.
- `preview/colors-primary.html`: Demonstrates the technical accents (Yellow, Cyan) and gradients.
- `preview/colors-secondary.html`: Demonstrates the structural neutral palette (Darks, Grays).
- `preview/typography-specimens.html`: Shows the typography scale using the Poppins font family.
- `preview/spacing-tokens.html`: Displays the standard gap spacing and radius tokens.
- `preview/components-buttons.html`: Shows component examples based on the design system rules.

## Preserved Assets, Fonts, and Build Artifacts
- **Assets**: Authentic source logos and SVG icons are preserved in the `assets/files` directory.
- **Build Artifacts**: Any discovered runtime or build binaries are preserved.
- **Source Examples**: High-signal original styling and configuration files are captured byte-for-byte in `source_examples/files` for deep reference.

## ui_kits/app
This directory contains a complete React/JSX implementation of a structural workspace interface. It demonstrates how to compose the system's structural neutrals and technical accents into a functional application shell, including sidebars, chat areas, and interactive lists.

## Reuse Workflow
1. Start by reading `DESIGN.md` for core design principles, voice, and anti-patterns.
2. Link `colors_and_type.css` in your HTML to bind the system's CSS variables.
3. Review the cards listed in the `preview/files` directory to understand token behavior and brand presentation.
4. Browse `source_examples/files` to see how styling was originally applied in the source codebase.
5. Copy or reference the component patterns from `ui_kits/app/components` when building application layouts.
6. Utilize the authentic preserved graphics from the `assets/files` directory for branding.