# BARYON — Website

Immersive, monochrome (black / white / grayscale) showcase website for Baryon, built from the MVP design document: glass panels, animated system diagrams, scroll reveals and object-based icon animations, fully responsive for desktop, tablet and mobile (Android & iOS).

## Files

- `index.html` — page structure and content
- `styles.css` — all styling, layout, responsive breakpoints and animations
- `script.js` — mobile menu, scroll-reveal, cursor glow, splash screen
- `assets/baryon-logo.png` — the Baryon Group wordmark (transparent-safe on black)

## Run it

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Mobile

- A hamburger menu replaces the desktop nav links under 780px.
- Layout, type scale, spacing and diagrams all have dedicated breakpoints for tablet and phone widths.
- Safe-area insets are respected for iOS notches / home indicators and Android gesture bars.
- Touch targets (buttons, links) are sized for comfortable tapping.
- `prefers-reduced-motion` is respected — all animation is disabled for users who request it.

## Customize

- Edit text directly in `index.html`.
- Colors, spacing and animation timing are all in `styles.css` (CSS variables at the top).
- Replace `assets/baryon-logo.png` to update the logo everywhere (nav, splash screen, footer).
- Update the contact email / location in the Contact section of `index.html`.

## Animated objects

- Hero: rotating orbital rings
- What We Do: floating layered windows, spinning sync arrows, growing bar chart, pulsing AI node network
- Approach: rotating gear, radar pulse, flickering spark, rising arrow, plus a line that draws in as you scroll
- Industries: icons draw themselves in on scroll and float on hover
- Platform: three capability nodes animate toward a shared center point
- Operations / AI / MIDE AI: a light packet travels along each flow diagram
