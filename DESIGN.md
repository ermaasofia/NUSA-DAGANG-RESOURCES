---
name: Nusa Dagang Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  section-tag:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for a high-end B2B culinary and trade audience, evoking the exclusivity of a private members' club and the precision of fine dining. The aesthetic marries **Luxury Minimalism** with **Editorial Sophistication**, prioritizing atmospheric depth over traditional interface chrome. 

The emotional response is one of quiet confidence, authority, and premium quality. By utilizing an intentional lack of structural borders and leaning into generous negative space, the interface feels less like software and more like a high-production digital monograph. Motion is used sparingly but purposefully to reinforce the tactile nature of the luxury experience.

## Colors

The palette is anchored in a monochromatic dark spectrum to establish a "low-key" lighting environment typical of luxury environments.

- **Primary (Metallic Gold):** Used exclusively for high-level branding, active states, and call-to-action highlights. It should be treated as a rare metal—precious and used with restraint.
- **Secondary (Muted Cream):** The primary typographic color. It provides a softer, more sophisticated contrast against the dark background than pure white.
- **Tertiary (Deep Grey):** Used for surface-on-surface separation, creating subtle depth without the need for borders.
- **Neutral (Charcoal Black):** The canvas. A solid, deep #121212 that serves as the foundation for the entire experience.

## Typography

Typography is the primary architecture of this design system. 

- **Headlines:** Use **Playfair Display** for all primary headings. The high contrast between thick and thin strokes provides the "Editorial" feel. 
- **Section Tags:** Use the Italic variant of Playfair Display for section labels or introductory flourishes. *Note: For the script-like appearance requested, use the most decorative italic sets available within the font family to maintain professional readability.*
- **Body:** **Inter** is utilized for its supreme legibility and neutral character, ensuring that dense B2B data or descriptions do not compete with the elegance of the headings.
- **Hierarchy:** Maintain large scale differences between display text and body copy to emphasize the luxury aesthetic.

## Layout & Spacing

The layout philosophy is based on **Intentional Asymmetry** and **Generous Breathing Room**. 

- **Grid:** Use a 12-column fixed grid for desktop, but frequently break the grid by offsetting images or text blocks to create a dynamic, editorial flow. 
- **Borders:** Strictly zero borders. Separation between elements must be achieved through tonal shifts in background colors or whitespace.
- **Negative Space:** Increase standard vertical padding by 1.5x. Section transitions should feel expansive, allowing the user's eye to rest on individual items of importance.
- **Responsive:** On mobile, collapse to a single column but maintain wide 24px side margins to preserve the feeling of a high-end magazine layout.

## Elevation & Depth

Depth in this design system is created through **Tonal Layering** and **Atmospheric Shadows** rather than structural lines.

- **Surface Tiers:** Background is #121212. Elevated cards or surfaces should use #1A1A1A or #222222.
- **Shadows:** Use ultra-diffused, large-radius shadows (e.g., `box-shadow: 0 30px 60px rgba(0,0,0,0.5)`). Shadows should feel like ambient occlusion in a dimly lit room, not like a drop-shadow on a piece of paper.
- **Glass Effects:** For navigation bars or floating menus, use a subtle backdrop blur (20px) with a 5% opacity cream tint to simulate dark obsidian glass.

## Shapes

To maintain a "Corporate / Sharp" aesthetic, this design system utilizes **Sharp (0px)** corners for all primary containers, buttons, and image assets. Sharp corners convey precision, discipline, and a modern architectural feel that aligns with high-end B2B resource management. 

Small UI icons and decorative elements may use minimal rounding if necessary for legibility, but the structural language remains strictly orthogonal.

## Components

- **Buttons:** 
  - *Primary:* Solid Gold background with black Inter Bold (uppercase) text. No border. Sharp corners.
  - *Ghost:* No background, Cream text with a bottom-aligned 1px "underline" that expands from the center on hover.
- **Cards:** Background color #1A1A1A. No borders. Content should have at least 40px of internal padding.
- **Inputs:** Simple underline fields (1px Gold/Cream) rather than boxed inputs. The label sits above in the uppercase Inter style.
- **Interactive States:** 
  - **Scale Lifts:** Images should subtly scale (1.05x) over a 400ms ease-out transition when hovered.
  - **Fade-In-Up:** Upon scroll, content blocks should emerge from 20px below their final position with a subtle opacity fade to create a "revealing" effect.
- **Lists:** High spacing between items. Use Gold-tinted bullet points or small, elegant serif numbers (Playfair Display) for ordered lists.