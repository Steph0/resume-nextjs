# Design System

Mobile first portfolio website. Full i18n support (English/Japanese).

## Stack

- **Framework:** Next.js App Router + React + TypeScript
- **i18n:** `next-intl`, routing in `src/i18n/`
- **Styling:** Tailwind CSS v3. See `src/app/globals.css`
- **Fonts:** See `src/app/[locale]/layout.tsx`
- **Dark mode:** `next-themes`, class-based, light default. See `src/app/[locale]/components/Header/ThemeProvider.tsx`
- **Utilities:** See `src/app/lib`

## Visual Direction

- Always mobile first. Scale up for large screens.
- Visually pleasant in light + dark mode.

## Accessibility

- Strictly follow a11y web standards
