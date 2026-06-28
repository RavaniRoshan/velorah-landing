# Velorah

A cinematic single-page landing site for **Velorah** — *"Where dreams rise through the silence."*

Built with **React 18 + Vite + TypeScript + Tailwind CSS v4**, with a dark navy theme, Instrument Serif display type, and a liquid-glass aesthetic.

## Sections

- **Hero** — fullscreen image background, glassmorphic navigation, cinematic serif headline
- **Feature cards** — glowing gradient-border cards animated with `motion/react`
- **Bento grid** — liquid-glass capability tiles
- **Stats** — key metrics strip
- **FAQ** — accordion (Radix UI)
- **CTA band** — closing call to action
- **Footer** — video card + navy glass card, capped by a giant flush-fit `VELORAH` wordmark sign

## Tech

- React 18, Vite 6, TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `motion`, `lucide-react`, Radix UI primitives (shadcn/ui)

## Getting started

```bash
pnpm install
pnpm dev
```

## Notes

- The hero background image (`src/imports/image.png`) is a large binary asset and may need to be added separately if missing.
