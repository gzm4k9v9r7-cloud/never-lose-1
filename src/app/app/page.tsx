import Link from "next/link";
import {
  PhoneMissed,
  CalendarCheck2,
  FileClock,
  Repeat2,
  ReceiptText,
  ShieldAlert,
  Star,
} from "lucide-react";
import { HeroMetric } from "@/components/dashboard/HeroMetric";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { LeadActivityChart } from "@/components/dashboard/LeadActivityChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Card } from "@/components/ui/Card";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { getOrCreateBusiness } from "@/lib/account/business";
import { getDemoDataset, DEFAULT_DEMO_BUSINESS_ID } from "@/lib/demo";
import { formatCurrency } from "@/lib/format";

export default async function AppOverviewPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const business = await getOrCreateBusiness(supabase, user);

  // Real revenue/lead numbers require connecting Twilio, calendar, and
  // payment accounts (a later phase) — until then, every real account sees
  // the same realistic sample activity so the dashboard isn't empty.
  const data = getDemoDataset(DEFAULT_DEMO_BUSINESS_ID);
  const { metrics } = data;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-navy">{business.name} — Overview</h1>
        <p className="text-xs text-slate-muted">
          Sample activity shown below — connect your phone number, calendar,
          and payments to see your real numbers here.
        </p>
      </div>

      <HeroMetric
        revenueRecovered={metrics.revenueRecovered}
        potentialRevenue={metrics.potentialRevenue}
        revenueTrend={metrics.trends.revenueRecovered}
        potentialTrend={metrics.trends.potentialRevenue}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Missed Calls Recovered"
          value={String(metrics.missedCallsRecovered)}
          icon={PhoneMissed}
          trend={metrics.trends.missedCallsRecovered}
          tone="accent"
        />
        <StatCard
          label="Appointments Booked"
          value={String(metrics.appointmentsBooked)}
          icon={CalendarCheck2}
          trend={metrics.trends.appointmentsBooked}
          tone="accent"
        />
        <StatCard
          label="Estimates Recovered"
          value={String(metrics.estimatesRecovered)}
          icon={FileClock}
          trend={metrics.trends.estimatesRecovered}
        />
        <StatCard
          label="Previous Customers Reactivated"
          value={String(metrics.previousCustomersReactivated)}
          icon={Repeat2}
          trend={metrics.trends.previousCustomersReactivated}
        />
        <StatCard
          label="Overdue Invoices Collected"
          value={formatCurrency(metrics.overdueInvoicesCollected)}
          icon={ReceiptText}
          trend={metrics.trends.overdueInvoicesCollected}
          tone="success"
        />
        <StatCard
          label="Spam Calls Blocked"
          value={String(metrics.spamCallsBlocked)}
          icon={ShieldAlert}
          trend={metrics.trends.spamCallsBlocked}
        />
        <StatCard
          label="Reviews Generated"
          value={String(metrics.reviewsGenerated)}
          icon={Star}
          trend={metrics.trends.reviewsGenerated}
          tone="success"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="mb-4 text-sm font-semibold text-navy">
            Revenue Recovered vs. Potential Revenue
          </p>
          <RevenueChart data={data.dailySeries} />
        </Card>
        <Card>
          <p className="mb-4 text-sm font-semibold text-navy">Lead Activity</p>
          <LeadActivityChart data={data.dailySeries} />
        </Card>
      </div>

      <ActivityFeed events={data.activity} biz={DEFAULT_DEMO_BUSINESS_ID} limit={8} />

      <p className="text-center text-xs text-slate-muted">
        Want to see the full opportunities list and AI workflow tools?{" "}
        <Link href={`/dashboard?biz=${DEFAULT_DEMO_BUSINESS_ID}`} className="text-accent-blue hover:underline">
          Open the full product tour
        </Link>
      </p>
    </div>
  );
}
