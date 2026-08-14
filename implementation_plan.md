# NusaDagang Interactive Corporate & Product Website — Full Overhaul

## Overview

A complete reimagination of the NusaDagang website into an immersive, cinematic multi-section single-page experience. The site remains served by the existing **FastAPI + Jinja2** backend — no framework migration needed. All 7 sections described in the prompt will be implemented in the `index.html` template using vanilla HTML/CSS/JavaScript enriched with CDN-loaded GSAP, Lenis, and animation libraries (no React/Next.js — these are referenced in the prompt as options; given the existing FastAPI/Jinja2 stack, we implement the same cinematic interactions in pure JS with GSAP + CSS which are functionally identical for static single-page use).

The design system from `DESIGN.md` (dark theme: #131313 background, #f2ca50 gold primary, Playfair Display + Inter typography) will be fully adopted as a dark-mode luxury aesthetic — replacing the current green background.

---

## User Review Required

> [!IMPORTANT]
> **Architecture Decision**: The prompt lists React/Next.js as the stack. However, the existing codebase is FastAPI + Jinja2 with TailwindCSS CDN. Migrating to Next.js would require a complete rebuild and a separate dev server. I recommend **keeping the FastAPI backend** and implementing all animations (GSAP, Lenis, CSS) in the existing Jinja2 templates — this delivers the same visual result without architectural disruption. **Please confirm you agree before I proceed.**

> [!IMPORTANT]
> **Single-Page vs Multi-Page**: The 7 sections can be implemented either as (a) one long single-page scroll on `index.html`, with the existing `/about`, `/services`, `/contact` routes remaining as sub-pages, OR (b) all sections embedded in `index.html` as anchor sections and the sub-pages linking back. I will implement **Option A**: all 7 sections on the homepage `index.html` as a unified scroll journey, while keeping the existing sub-pages intact for deeper content.

> [!WARNING]
> **Dark Theme Migration**: The current site uses a green (`#5B805B`) background. The spec's DESIGN.md calls for `#131313` (near-black). This change will apply to `index.html` only (the main showcase page). Existing sub-pages will remain with their current styling unless requested.

> [!NOTE]
> **Shopfront Illustration (Section 1)**: The spec requires a "flat/vector 2D illustration of the NusaDagang Shopfront". Since no such illustration asset exists in the repo, I will generate one using the `generate_image` tool — a stylized vector-style illustration of a Malaysian shopfront with "NusaDagang" signage.

> [!NOTE]
> **Spices Hotspot Coordinates (Section 5)**: Hotspot coordinates for specific spices in `spices.png` will be estimated visually (the image exists at `static/images/spices.png`). The user can adjust percentages in the HTML if needed.

---

## Open Questions

> [!IMPORTANT]
> **Section 4 — RTC Wheel Items**: The wheel has 8 items (RTC1–RTC8). Should they show actual product images (RTC1.png through RTC8.png from `static/images/`) on the wheel, or just labels? The products are: Bawang Besar (Blended), Bawang Putih (Blended), Lengkuas, Halia, Serai, Bawang Besar (Chopped), Bawang Putih (Chopped), + 1 more. I'll use product images with labels.

> [!IMPORTANT]
> **Section 6 — Value Promises Content**: The current site has 5 value promises. The spec says 5 cards (01–05). I'll use the existing values: (01) Ready-to-Cook, (02) Frozen Fresh, (03) Consistent Excellence, (04) Cut Prep Time by 70%, (05) Kitchen-Ready.

---

## Proposed Changes

### Tech Stack (CDN-loaded, no npm install required)
- **GSAP 3 + ScrollTrigger** — scroll animations & horizontal scroll
- **Lenis** — smooth scroll physics
- **Vanilla CSS** — all styling
- **Tailwind CSS CDN** — utility classes (already present)

---

### Section 1: Hero Portal — Shopfront Entry

#### [MODIFY] [index.html](file:///c:/Users/Administrator/OneDrive/Desktop/SR%20degree/software%20testing/nusadagang/templates/index.html)

Replace the existing hero with a full-viewport storefront illustration scene:

- **Generated shopfront illustration** placed as a background image
- An SVG/div overlay layer positioned precisely over the door area as an interactive hotspot
- On hover: gold glow outline around door + subtle scale preview (`transform: scale(1.02)`)
- On click: CSS keyframe zoom (`transform: scale(15) translate(...)`) focused on door center, then `opacity: 0` fade → transitions to Section 2 content
- Custom cursor (pointer with gold ring) over door area
- Heading "NusaDagang" centered top, CTA "Click Shop Door to Enter" pulsating below
- After portal zoom completes: `#portal-overlay` becomes `display: none`, Section 2 slides up

---

### Section 2: Homepage Brand Showcase

- **Fixed glassmorphism navbar**: dark `rgba(19,19,19,0.85)` + `backdrop-filter: blur(20px)` → replaces green navbar
- **Hero background**: `bg.png` or the spices image with dark overlay
- **Headline**: "Discover Authentic Flavors & Solutions" — Playfair Display, 72px
- **Floating spice icons**: 3–4 small SVG/emoji spice icons with CSS `@keyframes float` loops
- **Entrance animation**: navbar slides from `y: -60px`, headline fades+scales in, staggered

---

### Section 3: About Us, Mission & Vision

- **Split layout**: Left column text (About, Mission, Vision), Right column 3 glassmorphism cards
- **Dark cards**: `background: rgba(30,28,28,0.8)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(242,202,80,0.15)`
- **Scroll entrance**: GSAP `ScrollTrigger` with `fromTo` y:60→0, opacity:0→1, stagger 0.2s per item
- **Parallax**: GSAP `scrub:true` applied to background decorative elements during vertical scroll

---

### Section 4: READY T O COOK — Interactive Product Wheel

- **Typography**: Giant display text — `READY T` + [Wheel] + `COOK` inline
- **The Wheel**: CSS conic-gradient circle with 8 product image slots positioned around perimeter using `transform: rotate(Ndeg) translateX(radius) rotate(-Ndeg)`
- **Idle rotation**: CSS `animation: spin 20s linear infinite` paused on hover
- **GSAP ScrollTrigger velocity tracking**: `ScrollTrigger.create({ onUpdate: self => wheel.style.animationDuration = ... })` — faster scroll = faster spin
- **Hover item focus**: `scale(1.2)` on hovered sector, tooltip card fades in above
- **Tooltip card**: glassmorphism popup with product name + price + brief description

---

### Section 5: Spices Showcase — Interactive Hotspots

- **Layout**: Dark-slate section, `spices.png` as main visual (75% viewport height)
- **Hotspot layer**: `position: absolute` divs with percentage-based coordinates overlaid on the image
- **Spice hotspots** (estimated from image):
  - Ginger / Halia: ~20%, 60%
  - Galangal / Lengkuas: ~40%, 50%
  - Lemongrass / Serai: ~65%, 55%
  - Onion / Bawang: ~80%, 40%
- **Glassmorphic popup**: `backdrop-filter: blur(20px)`, `background: rgba(19,19,19,0.75)`, gold border, Framer-Motion-like CSS spring via cubic-bezier transitions
- **Popup fields**: Spice Name, Origin, Aroma Profile, Best Pairings

---

### Section 6: Value Promises — GSAP Horizontal Scroll

- **Pinned section**: GSAP `ScrollTrigger` pins the section and translates `#value-track` horizontally `xPercent: -80%` (5 cards × full width)
- **Card design**: Dark minimalist `#1A1A1A` cards, large gold sequential numbers (01–05), serif body text
- **Card entrance**: Each card scales from `0.92` to `1.0` + opacity 0→1 as it enters the center viewport
- **Lenis integration**: Smooth scroll physics passed through to GSAP ticker

---

### Section 7: Contact + Custom Scroll Indicator

- **Layout reuse**: Existing contact layout with glassmorphism makeover (dark form on left, details on right)
- **Vertical Ruler Indicator**: Fixed right-edge thin line with 7 tick marks (one per section); active tick highlights in gold with JS scroll position tracking
- **Magnetic CTA**: "Send Message" button — JS `mousemove` event applies `translate(dx*0.3, dy*0.3)` to button tracking cursor proximity within 80px radius (magnetic pull), resets on `mouseleave`

---

### New Asset

#### [NEW] Shopfront Illustration
Generated via `generate_image` tool — Malaysian shopfront illustration styled as flat/vector art, saved to `static/images/shopfront.png`

---

### [MODIFY] [style.css](file:///c:/Users/Administrator/OneDrive/Desktop/SR%20degree/software%20testing/nusadagang/static/css/style.css)

Add new CSS classes for:
- Dark design tokens (CSS variables)
- Portal zoom animation keyframes
- RTC wheel layout
- Spice hotspot + glassmorphic popup
- Horizontal scroll track
- Vertical scroll indicator (ruler ticks)
- Magnetic button transform
- Custom cursor styles
- Lenis scroll body class

---

## Verification Plan

### Manual Verification
1. Open `http://127.0.0.1:8000/` — Section 1 portal scene loads full-screen
2. Hover door hotspot → gold glow appears, cursor changes
3. Click door → zoom animation triggers, transitions to Section 2
4. Scroll through Section 3 — staggered text reveals, parallax
5. Section 4 — wheel rotates idly; fast scroll accelerates it; hover items show tooltip
6. Section 5 — hover hotspot areas over spices image, glassmorphic cards appear
7. Section 6 — scroll pins section, horizontal card track slides
8. Section 7 — ruler indicator highlights active section; magnetic CTA pulls on hover
9. Sub-pages (`/about`, `/services`, `/contact`) still render correctly — unmodified
