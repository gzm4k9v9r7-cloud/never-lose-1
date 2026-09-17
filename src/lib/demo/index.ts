import { buildPlumbingDataset } from "./businesses/plumbing";
import { buildVenueDataset } from "./businesses/venue";
import type { DemoDataset } from "./types";

export type { DemoDataset, DashboardMetrics, DailyMetric } from "./types";

export interface DemoBusinessSummary {
  id: string;
  name: string;
  industryLabel: string;
}

export const demoBusinesses: DemoBusinessSummary[] = [
  { id: "biz_riverside_plumbing", name: "Riverside Plumbing Co.", industryLabel: "Plumbing" },
  { id: "biz_grand_oak_estate", name: "The Grand Oak Estate", industryLabel: "Event Venue" },
];

export const DEFAULT_DEMO_BUSINESS_ID = demoBusinesses[0].id;

/**
 * Builds a fresh demo dataset relative to the current time so activity
 * ("3 minutes ago", "8:47 PM today") always feels live. Called from Server
 * Components only — the resulting plain data is then passed as props to any
 * interactive client components (charts, toggles) so nothing re-randomizes
 * during hydration.
 */
export function getDemoDataset(businessId: string): DemoDataset {
  const now = new Date();
  switch (businessId) {
    case "biz_grand_oak_estate":
      return buildVenueDataset(now);
    case "biz_riverside_plumbing":
    default:
      return buildPlumbingDataset(now);
  }
}
