import { Card } from "@/components/ui/Card";
import { formatCurrency, formatPercent } from "@/lib/format";

export function HeroMetric({
  revenueRecovered,
  potentialRevenue,
  revenueTrend,
  potentialTrend,
}: {
  revenueRecovered: number;
  potentialRevenue: number;
  revenueTrend?: number;
  potentialTrend?: number;
}) {
  return (
    <Card className="bg-gradient-to-br from-success/5 via-surface to-accent-blue/5">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm text-slate-muted">Revenue Recovered This Month</p>
          <p className="mt-2 text-5xl font-semibold text-success">
            {formatCurrency(revenueRecovered)}
          </p>
          {revenueTrend !== undefined && (
            <p className="mt-2 text-sm text-success/80">
              {formatPercent(revenueTrend)} vs. last month · confirmed payments only
            </p>
          )}
        </div>
        <div className="border-t border-line pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
          <p className="text-sm text-slate-muted">Potential Revenue Recovered</p>
          <p className="mt-2 text-3xl font-semibold text-accent-blue">
            {formatCurrency(potentialRevenue)}
          </p>
          {potentialTrend !== undefined && (
            <p className="mt-2 text-sm text-slate-muted">
              {formatPercent(potentialTrend)} · booked, not yet collected
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
