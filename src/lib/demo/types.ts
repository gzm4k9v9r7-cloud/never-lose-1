import type { ActivityEvent, Opportunity } from "@/types/domain";
import type { PlanId } from "@/config/plans";

export interface DailyMetric {
  date: string; // "MMM d" label, already formatted for chart display
  revenueRecovered: number;
  potentialRevenue: number;
  callsReceived: number;
  callsRecovered: number;
  spamBlocked: number;
}

export interface DashboardMetrics {
  /** Confirmed, recorded payments attributable to NeverLose recovery this month. */
  revenueRecovered: number;
  /** Estimated value of bookings/opportunities that have not yet produced a confirmed payment. */
  potentialRevenue: number;
  missedCallsRecovered: number;
  appointmentsBooked: number;
  estimatesRecovered: number;
  previousCustomersReactivated: number;
  overdueInvoicesCollected: number;
  spamCallsBlocked: number;
  reviewsGenerated: number;
  /** Percent change vs. prior month, for the small trend labels under each stat. */
  trends: Partial<Record<keyof Omit<DashboardMetrics, "trends">, number>>;
}

export interface DemoDataset {
  businessId: string;
  businessName: string;
  industryId: string;
  planId: PlanId;
  metrics: DashboardMetrics;
  dailySeries: DailyMetric[];
  activity: ActivityEvent[];
  opportunities: Opportunity[];
}
