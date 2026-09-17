/**
 * ============================================================================
 * BRAND CONFIG — the single source of truth for all naming, copy, and colors.
 * ============================================================================
 *
 * "NeverLose" is a working name and may change before launch. Nothing in the
 * rest of the application should hard-code the company name, tagline, logo,
 * or colors — every screen imports those values from here instead.
 *
 * To rename the product, change ONLY this file (plus the hex values mirrored
 * into `src/app/globals.css` under `@theme`, since CSS can't import
 * TypeScript at build time — see the comment there).
 */

export const brand = {
  name: "NeverLose",
  legalName: "NeverLose, Inc.",
  domain: "neverlose.example",
  shortName: "NeverLose",

  tagline: "Never Miss a Customer. Never Lose a Job.",
  secondaryTagline: "Your business is open even when you're not.",
  valueProp:
    "From a $200 service call to a $20,000 event — every lead deserves an answer.",
  heroSubcopy:
    "NeverLose works 24/7 to answer, recover and convert opportunities your business would otherwise lose.",
  oneEmployeeLine: "One Employee. Seven Jobs. Zero Days Off.",
  oneEmployeeSubcopy:
    "NeverLose answers calls, texts missed callers, books appointments, follows up on estimates, sends deposit links, follows up on invoices, and reactivates previous customers.",

  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
  },

  contact: {
    supportEmail: "support@neverlose.example",
    salesEmail: "sales@neverlose.example",
  },

  logo: {
    // Wordmark is rendered from `name` today; swap to an <img> using this
    // path once real artwork exists.
    iconPath: "/logo-icon.svg",
  },
} as const;

/**
 * Color tokens for a light, inviting theme — a nontechnical business owner
 * opens this product every day, so the base experience is white/soft-gray
 * with navy text, not a dark "developer tool" palette. Navy, blue, purple,
 * and green remain the brand's identity as accents and one deliberate dark
 * band (the homepage's final call-to-action), rather than the default
 * background everywhere.
 *
 * These are the canonical values — if you change a color here, mirror the
 * same hex value into the `@theme` block in `src/app/globals.css` (Tailwind
 * v4 reads colors from CSS, so we keep one JS copy for use in charts/JS and
 * one CSS copy for utility classes; both are commented to point back at
 * each other so they don't drift).
 */
export const brandColors = {
  page: "#FFFFFF", // default page background
  surface: "#FFFFFF", // card/panel background
  surfaceAlt: "#F3F6FB", // subtle fill, hover states, icon chips, banded sections
  surfaceDark: "#0B0F1A", // the one deliberate dark accent (final CTA band)
  navy: "#0B0F1A", // primary text / headings
  slateBody: "#475467", // secondary body text
  slateMuted: "#6B7280", // muted captions / timestamps
  line: "#E4E7EE", // default hairline border
  lineStrong: "#CBD1DC", // stronger border / hover
  white: "#FFFFFF",
  accentBlue: "#4F7CFF",
  accentPurple: "#9B5CFF",
  accentGradient: "linear-gradient(135deg, #2F6BFF 0%, #4F7CFF 100%)",
  success: "#16A34A", // recovered revenue / positive states
  successSoft: "#E7F8ED",
  warning: "#B45309",
  warningSoft: "#FEF3C7",
  danger: "#DC2626",
  dangerSoft: "#FEE2E2",
  // Categorical icon palette for rows identifying several distinct
  // capabilities/stats side by side — validated together (all-pairs) so
  // no two read as the same color. See the comment in globals.css.
  catBlue: "#2A78D6",
  catOrange: "#EB6834",
  catAqua: "#1BAF7A",
  catViolet: "#4A3AA7",
} as const;

/**
 * Chart-specific palette, chosen from the design system's validated
 * light-mode categorical/status steps (checked with the data-viz skill's
 * `validate_palette.js` against a white card surface) rather than picked by
 * eye — swap with care, and re-validate if you do. "revenueRecovered" uses
 * the status-green role (a confirmed/good outcome), the others are
 * categorical slots 1–3. The aqua/green slot reads slightly under 3:1
 * contrast on white by itself, which is why every chart using it always
 * ships a visible legend (never color-alone identity).
 */
export const chartColors = {
  revenueRecovered: "#0ca30c",
  potentialRevenue: "#2a78d6",
  callsReceived: "#2a78d6",
  callsRecovered: "#1baf7a",
  spamBlocked: "#eb6834",
  grid: "#E4E7EE",
};
