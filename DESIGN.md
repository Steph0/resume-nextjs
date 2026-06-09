---
name: Portfolio
description: Mobile-first portfolio website design system.
colors:
  primary:
    light: '#333366'
    dark: '#d6deff'
  secondary:
    light: '#097fa5'
    dark: '#0ba6d1'
  background:
    light: '#ededed'
    dark: '#121212'
  backgroundSecondary:
    light: '#c8dde3'
    dark: '#1b1b1b'
  textSecondary:
    light: '#3c3c3c'
    dark: '#bbbbbb'
  button:
    light: '#097fa5'
    dark: '#097fa5'
  buttonText:
    light: '#fff'
    dark: '#fff'
  buttonSecondary:
    light: '#e7e7e7'
    dark: '#1d1d1d'
  dropdown:
    light: '#e0f4ff'
    dark: '#2d2d2d'
  dropdownHover:
    light: '#b3e5ff'
    dark: '#454545'
  selected:
    light: '#9ec6ff'
    dark: '#324e70'
  logoShadow:
    light: '#053949'
    dark: '#0a2e36'
  logoBody:
    light: '#00d8fe'
    dark: '#097fa5'
  spanBg:
    light: 'linear-gradient(to right, #4e4e9e, #097fa5, #3e87ed)'
    dark: 'linear-gradient(to right, #8c00ff, #0fb4e1, #a1d930, #ae0000)'
typography:
  sans:
    fontFamily: Noto Sans JP
spacing:
  container-padding: 2rem
---

# Brand & Style

A minimalist, mobile-first portfolio website supporting full i18n (English/Japanese). The visual identity is built to be clean, accessible, and pleasant in both light and dark modes. It utilizes a simplistic but vibrant color scheme, prioritizing readable typography and smooth interactions.

## Colors

The application relies on semantic color tokens defined as CSS variables.

- **Light Theme**: Bright, clean backgrounds (`background`) with contrasting dark text (`primary`).
- **Dark Theme**: Deep, comfortable dark backgrounds (`background`) with soft, light text (`primary`).
  Gradients (`spanBg`) are used as energetic accents.

## Typography

- **Primary Font**: `Noto Sans JP`. Used as the global `font-sans` family for seamless English and Japanese legibility.
- **Links**: Displayed with medium weight and underlines that disappear on hover.

## Layout & Spacing

- **Approach**: Strictly mobile-first. Scales up cleanly for larger screens.
- **Container**: The main wrapper enforces a maximum width constraint and is centered horizontally.
- **Spacing Guidelines**: Primarily leverages Tailwind CSS default spacing utility scales.

## Elevation & Depth

- The UI primarily utilizes a flat design approach.
- Shadows are reserved strictly for overlapping floating elements (like dropdown menus or dialogs) using standard Tailwind drop shadows.

## Shapes

- UI elements generally rely on soft default Tailwind rounding.

## Components

- **General Interactions**: Interactive elements should have clearly defined hover and focus states (e.g., links losing underline on hover).
- **Icons**: Standard interactive target sizes are used to adhere to accessible touch-target requirements.

## Do's and Don'ts

### Do

- Always implement accessibility attributes (`aria-label` or `title`) on icon-only interactive elements for screen readers.
- Ensure all routing is built with `next-intl`'s `Link` component.
- Keep the user interface scalable, ensuring horizontal scrolling is avoided on small screens.

### Don't

- Don't use hardcoded color values in component files. Always use the mapped Tailwind variables (e.g., `text-primary`, `bg-background`).
- Don't mix different font families without a structural reason.
