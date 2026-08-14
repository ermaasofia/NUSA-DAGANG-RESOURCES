# 🚀 Master Technical Prompt for AntiGravity AI
**Project Title:** NusaDagang Interactive Corporate & Product Website  
**Tech Stack & Libraries:**
* **Framework / Styling:** React / Next.js, Tailwind CSS, Framer Motion
* **3D / 2.5D Canvas Engine:** Three.js / React Three Fiber (R3F) OR Framer Motion Image Portal
* **Interactive Tooltips / Hotspots:** @floating-ui/react OR Framer Motion Hover Hotspots
* **Scrolling & Physics:** GSAP (ScrollTrigger), Lenis Smooth Scroll

---

## 📑 Detailed Section-by-Section Storyline Specification

### SECTION 1: HERO / LANDING SCENE (2.5D Interactive Storefront Portal)
**Visual Structure:**
* **Storefront Illustration:** Full-screen layout featuring a flat/vector 2D illustration of the NusaDagang Shopfront (based on reference store design, with custom "NusaDagang" signage).
* **Interactive Hotspot:** The main entrance door is isolated as an interactive hotspot/overlay layer.
* **Text Overlay:** Centered heading "NusaDagang" with a pulsating CTA button below: *"Click Shop Door to Enter"*.

**Tech Implementation Options:**
* **Option A (Framer Motion / CSS):** Scale and zoom animation targeted at the door frame's coordinate (`transform-origin` focused on the door center), creating a rapid camera zoom into the entrance portal.
* **Option B (Three.js / React Three Fiber):** Map the 2D illustration onto a 3D Plane Mesh inside an R3F canvas, driving camera FOV and Z-position animation directly towards the door mesh on click.

**Interactions & Animations:**
* **Hover Effect:** Hovering over the shop door area highlights the door frame with an glowing accent outline and triggers a subtle scale/tilt preview effect (cursor changes to custom interactive pointer).
* **Click / Portal Zoom Transition:** Clicking the door triggers a rapid FOV/scale zoom effect penetrating through the door plane (simulating entering the physical shop).
* **Transition:** Smoothly fade out Section 1 as the camera passes through, transitioning seamlessly into Section 2.

---

### SECTION 2: HOMEPAGE (Brand Showcase)
**Visual Structure:**
* **Navigation Bar:** Fixed glassmorphism navbar (NusaDagang Logo on left, nav links on right).
* **Hero Media:** High-resolution hero background visual featuring spice elements or corporate hero imagery.
* **Headline:** Large bold typography reading *"Discover Authentic Flavors & Solutions"*.

**Interactions & Animations (Framer Motion):**
* **Entrance:** Navbar slides down smoothly (`y: -50` to `0`), headline text fades in and scales up (`scale: 0.9` to `1`).
* **Floating Elements:** Ambient floating spice icons in the background with continuous floating loops (`animate={{ y: [0, -10, 0] }}`).

---

### SECTION 3: ABOUT US, MISSION & VISION
**Visual Structure:**
* **Split Layout:** Typography ("About NusaDagang", "Mission", "Vision") on the left; interactive 3D/glassmorphism feature cards on the right.

**Interactions & Animations (Framer Motion + GSAP):**
* **Scroll Entrance:** Staggered text reveal (`staggerChildren: 0.2`) as elements enter viewport using `whileInView`.
* **Parallax Motion:** Subtle GSAP Parallax movement applied to background cards/decorations during vertical scroll.

---

### SECTION 4: OUR PRODUCTS - "READY T[O] COOK" (Interactive Wheel)
**Visual Structure:**
* **Giant Typography:** Display large text header: **"READY T O COOK"**.
* **The "O" Replacement:** The letter **"O"** in the word **"TO"** is replaced by an oversized interactive spinning product wheel.
* **Wheel Items:** The wheel contains 8 circular containers labeled RTC1, RTC2, RTC3, RTC4, RTC5, RTC6, RTC7, and RTC8.

**Interactions & Animations (GSAP + ScrollTrigger):**
* **Idle State:** The RTC product wheel rotates in a slow, continuous infinite loop.
* **Scroll Acceleration:** Linked via GSAP ScrollTrigger velocity tracking. Scrolling down faster increases the wheel's rotation speed proportionally.
* **Hover Focus:** Hovering over any RTC item (RTC1 to RTC8) pauses the rotation, scales up the hovered item (`scale: 1.2`), and triggers a floating tooltip preview card.

---

### SECTION 5: SPICES SHOWCASE (Interactive Hotspot Image & Floating Glass Cards)
**Visual Structure:**
* **Section Title:** Header reading **"SPICES"**.
* **Main Visual:** High-quality dark-slate hero showcase image of raw spices taking up ~3/4 of the viewport screen.

**Interactions & Animations (Framer Motion + Floating UI / CSS Hotspots):**
* **Invisible Hotspot Grids:** Invisible SVG/HTML coordinate overlays mapped directly over specific spices in the image (Cinnamon, Star Anise, Cloves, Cardamom, Cumin, Chili, etc.).
* **Hover Reaction (Glassmorphic Popups):** When hovering over a spice hotspot:
  * A translucent glassmorphism floating note card pops up smoothly directly above that spice.
  * Displays detail info: Spice Name, Origin, Aroma Profile, and Best Pairings.
  * Uses Framer Motion spring physics (`initial={{ opacity: 0, y: 15, scale: 0.95 }}`, `animate={{ opacity: 1, y: 0, scale: 1 }}`).

---

### SECTION 6: OUR VALUE PROMISES (Horizontal Scroll Section)
**Visual Structure:**
* **Horizontal Track:** Full-width container with 5 distinct Value Cards (01 to 05).
* **Card Design:** Dark minimalist cards displaying sequential numbers (01, 02, 03, 04, 05) and core company value statements.

**Interactions & Animations (GSAP + Lenis + Framer Motion):**
* **Horizontal Translation:** GSAP ScrollTrigger translates the track horizontally as the user scrolls vertically (`xPercent: -100 * (cards.length - 1)`).
* **Card Focus:** Cards scale up and reveal details via Framer Motion as they enter the center viewport focus point.

---

### SECTION 7: CONTACT US & CUSTOM SCROLL INDICATOR
**Visual Structure:**
* **Form & Details:** Modern glassmorphism contact form on the left, office details and location map on the right.
* **Custom UI Indicator:** Far-right edge features a vertical Ruler/Dash Scroll Indicator marking active sections.

**Interactions & Animations (GSAP + Framer Motion):**
* **Scrollbar Tracker:** Tick marks dynamically highlight with an accent color based on `window.scrollY` position.
* **Magnetic CTA:** "Send Message" button includes a magnetic cursor-pull interaction.