---
name: Curri Architect
description: Architectural site boards with photographic scale and restrained orange identity.
colors:
  accent: "#ff6600"
  base: "#fafafa"
  raised: "#ededed"
  bone: "#222222"
  line: "#d7d7d7"
  dark-base: "#242424"
  dark-raised: "#303030"
  dark-bone: "#f4f4f4"
  dark-line: "#565656"
  focus: "#ac3900"
  dark-focus: "#ff8c40"
  error: "#a33300"
  dark-error: "#ff9b61"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  board: "0"
  theme-control: "9999px"
spacing:
  compact: "8px"
  small: "16px"
  mobile-gutter: "24px"
  medium: "28px"
  group: "32px"
  desktop-gutter: "36px"
  large: "48px"
  section: "64px"
components:
  button-contact:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.board}"
    padding: "13px 22px"
  button-contact-hover:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.base}"
  button-send:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.board}"
    padding: "16px 24px"
    width: "100%"
  text-action:
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.board}"
  input:
    textColor: "{colors.bone}"
    rounded: "{rounded.board}"
    padding: "14px 0"
    width: "100%"
  project-type:
    textColor: "{colors.bone}"
    rounded: "{rounded.board}"
    padding: "12px 16px"
  project-type-selected:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.base}"
  navigation:
    backgroundColor: "{colors.base}"
    textColor: "{colors.bone}"
    height: "88px"
    padding: "0 36px"
  archive-project:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.bone}"
    rounded: "{rounded.board}"
  service-disclosure:
    textColor: "{colors.bone}"
    typography: "{typography.title}"
    padding: "24px 0"
---

# Design System: Curri Architect

## Overview

**Creative North Star: "Orange site boards"**

Architectural site boards pair full-scale photography with condensed signage lettering and quiet paper information rails. The identity is direct and recognizable; generous photographs carry the atmosphere while the interface stays precise, flat, and easy to navigate.

Orange remains the studio signature, not the material of every surface. The confirmed correction reserves the substantial orange content field for the home hero signature band; contact and the compact footer are neutral. Small identity and action accents connect the rest of the site. This is a reusable visual world, not a requirement that every route repeat the home composition.

**Key Characteristics:**

- Panoramic photography and paper information rails.
- Condensed architectural signage with clear sans-serif reading text.
- Exact original drawn logo and restrained signature orange.
- Flat, square-edged surfaces with fine structural rules.
- Accessible static alternatives to authored desktop scroll motion.

Implementation authority is `src/app/globals.css`, `src/app/layout.tsx`, and the current shared components. `PRODUCT.md` carries durable brand commitments; `.impeccable/board-contract.md` carries the approved home expression and the subsequent orange correction.

## Colors

One vivid identity color sits against paper, ink, and muted structural surfaces. Frontmatter values are normative; CSS custom properties are the live source.

### Primary

- **Signature Orange** (`accent`): original brand color for the logo mark, home signature band, active indicators, and compact actions. Orange fields keep fixed dark ink text in both themes.

**The Orange Restraint Rule.** Keep contact and the compact footer neutral; the home hero signature band is the substantial orange content field, with orange elsewhere used for small identity and action accents. The existing mobile navigation uses a transient orange overlay, not an additional content section.

### Neutral

- **Paper** (`base`): light-theme page canvas, fixed navigation, footer, and form panel.
- **Information Paper** (`raised`): project copy rails, services, and contact introduction.
- **Architectural Ink** (`bone`): reading text and dark selected controls.
- **Structural Rule** (`line`): fine divisions between sections, metadata, navigation, and fields.
- **Charcoal Canvas / Light Ink / Information Surface / Rule** (`dark-base`, `dark-bone`, `dark-raised`, `dark-line`): pure neutral dark-theme surfaces and dividers, with lighter charcoal instead of green-black. Orange is preserved.
- **Burnt Focus / Light Focus** (`focus`, `dark-focus`): visible keyboard outline; orange fields use ink instead.
- **Error Ink / Light Error** (`error`, `dark-error`): readable validation feedback for each theme.

Tonal ramps in the sidecar are synthesized display metadata, not additional shipped UI colors.

## Typography

**Display Font:** Barlow Condensed, sans-serif; loaded through `--font-board`.
**Body Font:** Manrope, sans-serif; loaded through `--font-manrope`.

Condensed titles behave like site signage, with tight spacing and decisive scale. Manrope carries navigation, labels, project facts, and prose. The original logo wordmark is drawn vector geometry, not either typeface.

### Hierarchy

- **Display:** the frontmatter role records the home signature scale. Project headings use the same size clamp with a unit line-height; archive and contact headings have route-specific sizes.
- **Headline:** the frontmatter role records section rails. Practice headings use a fluid larger scale; compact footer invitations use a smaller fluid scale.
- **Title:** disclosure headings; project chapter and archive titles have larger photographic-board scales.
- **Body:** project chapter and service reading text; chapter descriptions are constrained to 35ch on desktop, expanding to 65ch on narrow screens. Longer practice and project stories use 17px text and up to 70ch.
- **Label:** navigation and direct actions. Labels remain sentence case.
- **Metadata:** location, year, caption, and technical facts. Numeric metadata uses tabular numerals where implemented.

**The Drawn Wordmark Rule.** Preserve every original icon and wordmark path in `src/components/LogoMark.tsx`; never typeset, redraw, distort, or substitute the Curri letterforms.

## Layout

The spatial model is an edge-to-edge board with inset information, not a centered card dashboard. Repeated desktop horizontal gutters use the desktop-gutter token; narrow-screen content uses mobile-gutter. At 1800px and wider, the listed main board sections increase their horizontal inset to 4vw. The fixed header is 88px high, with matching main offset and scroll padding.

Desktop photographic chapters use a 68/32 image-to-information split, adjusting to 62/38 at 1100px and below. Archive projects use 65/35; the contact board uses 46/54. These are observed component proportions, not a mandatory global column ratio.

At 899px and below, navigation becomes mobile, the header and offsets become 72px, board layouts stack, and galleries become one column. At 480px and below, paired form fields stack; the header gutter becomes 16px. Contact panels step from 60px 48px to 48px 32px, then 40px 24px. The desktop footer invitation/body/bottom use compact 36px/32px/16px vertical bands.

### Motion and responsive safety

Photographs use a restrained scroll translation (-4% to 4%) and scale (1.04 to 1). The selected-work sequence uses sticky chapters and a vertical aperture reveal on suitable desktop devices. At 899px and below, with a coarse pointer, or with reduced motion, chapters are non-sticky; the aperture is removed and the prior-photo underlay is hidden. Reduced motion also removes photograph transforms and overscan.

Every full pathname, including transitions between two project slugs, opens through a 650ms neutral shutter. Layout ancestors are never transformed, preserving native sticky positioning. `MotionHeading` reveals masked words over 760ms with 45ms stagger capped at 280ms. `MotionSurface` brings text and panels in over 680ms with 24px movement; photograph masks open over 850ms. Entrances run once per route visit at 6% viewport intersection, with group delays capped at 350ms. Focus reveals content immediately. Animations cancel on unmount and preference changes. Server/no-JavaScript content stays visible, and reduced-motion visitors receive no entrance effects. Neutral light and charcoal palettes contain no green undertone; original orange and vector logo are unchanged. Mobile exposes the same theme control as desktop.

Smooth scrolling is disabled for coarse pointers and reduced motion. The mobile menu reveal becomes immediate under reduced motion. Theme switching uses a 600ms circular reveal only where supported and motion is permitted; otherwise it changes directly. Global reduced-motion CSS reduces transition and animation durations to 0.01ms.

The original logo paths draw their outlines and then resolve to their exact solid artwork: mark paths over 900ms, letter paths over 800ms with at most 220ms stagger. Each visible logo animates once per pathname visit, including the header, contact mark and footer wordmark. A first-load centered original full lockup introduces the studio for 1.05s, then opens away over 500ms; it never intercepts input and is removed after completion. The startup cover is server-rendered, preventing a flash of page content before hydration. Initial visible page/logo arrivals wait behind this cover; subsequent scroll entries have no extra delay. Reduced-motion CSS hides the cover immediately, and a noscript rule preserves instant no-JavaScript readability. A four-second safety fallback uncovers the page if scripts fail. Original path geometry and letterforms remain unchanged; ordinary server-rendered logos are solid and complete.

## Elevation & Depth

No box-shadow vocabulary is used in the current shared system. Depth comes from photographic scale, ink-versus-paper contrast, raised tonal information rails, and thin rules. Motion reveals the photograph rather than lifting UI panels.

**The Flat Board Rule.** Use tonal separation and fine structural rules instead of adding decorative drop shadows to boards, forms, navigation, or the footer.

## Shapes

Boards, photographs, buttons, fields, and project-type controls are square-edged. Borders are principally single-pixel structural lines; selected navigation and archive filters use a two-pixel underline. The circular theme button is an explicit small-control exception, not a rounded-card language. Photographs are clipped to rectangular apertures.

## Components

### Buttons and direct actions

Orange contact and email-preparation buttons use dark ink, no corner rounding, and label typography. Hover inverts to the current theme's ink/paper pair. The text action is transparent with a bottom rule, a minimum 48px height, and a 25px arrow; hover underlines its text. Arrow geometry is the shared inline SVG in `BoardElements.tsx`.

All keyboard-operable controls retain the global three-pixel outline with five-pixel offset. Do not replace this with color-only feedback.

### Inputs / Fields

The contact form remains neutral. Labels are 13px; inputs are transparent, square, 15px text with an underline and six-pixel label separation. Textareas resize vertically and have a 120px minimum. Placeholder text uses the theme ink at reduced opacity. Project-type buttons use a fine outlined rectangle and a minimum 44px height; selected controls invert ink and paper.

Validation feedback uses an alert; completion uses a status region. The action prepares a message in the visitor's email application, not an automatic delivery. Keep the visible explanatory note and direct email fallback.

### Navigation

A fixed paper header pairs the original orange icon with the original drawn wordmark. Navigation text is 14px, weight 600; the current route has an orange underline and hover uses ink. English/Albanian controls remain available on desktop and mobile.

The mobile menu is a modal overlay with large condensed route links. It traps focus, makes page content inert, supports Escape, restores trigger focus, and closes on route selection. Preserve these behaviors when changing its appearance.

### Photographic project boards

Archive projects are linked image-and-copy boards, not detached rounded cards. Their raised copy panel contains location/year, a display title, description, and a bottom action. Hover underlines the bottom action and emphasizes the arrow. The selected-work chapter is the signature animated variation; it shares the same honest metadata and direct project route.

### Service disclosures

Native details/summary rows use thin dividers, condensed titles, and a line-built plus that becomes a minus when open. Keep native keyboard behavior and visible focus.

### Compact footer

The footer is neutral, structurally divided, and deliberately compact. Its invitation is omitted on the contact route. Preserve the original vector wordmark, direct email, and route links; do not turn it into an oversized orange closing panel.

### Asset source truth

Project image URLs and their existing sample descriptions live in `src/data/projects.ts`; the images are Unsplash illustrative material, not verified photographs of Curri's completed buildings. Keep the visible illustrative-material notes. The existing local portrait is `public/images/curri-pic.png`, inherited from the portfolio; its original authorship is not independently verified here. No shipping raster was generated or downloaded during this rebuild. Review screenshots are not product imagery. Embedded provenance automation did not complete on Windows; do not claim that these files carry verified embedded provenance.

## Do's and Don'ts

### Do:

- **Do** preserve the exact original vector icon and drawn wordmark.
- **Do** use neutral contact and compact footer surfaces with restrained orange accents.
- **Do** let photographs lead while keeping project facts and actions readable.
- **Do** maintain the English/Albanian controls and all project routes.
- **Do** preserve visible focus, modal keyboard behavior, and static reduced-motion alternatives.
- **Do** label existing sample imagery honestly and preserve its source records.

### Don't:

- **Don't** replace the wordmark with font-based text or alter its letterforms.
- **Don't** introduce additional large orange content panels or an oversized orange footer.
- **Don't** turn the home-specific hero or chapter sequence into a required layout for every route.
- **Don't** add rounded floating cards or decorative shadows to the flat board system.
- **Don't** imply illustrative Unsplash images are verified studio work.
- **Don't** describe the email preparation workflow as a successful automatic send.
