import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DashboardChrome } from "@/components/dashboard/DashboardChrome";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getDemoDataset, DEFAULT_DEMO_BUSINESS_ID } from "@/lib/demo";
import { statusLabels, statusTones, sourceLabels } from "@/lib/status";
import { formatCurrency, formatRelativeTime } from "@/lib/format";

export default async function OpportunitiesPage({
  searchParams,
}: {
  searchParams: Promise<{ biz?: string }>;
}) {
  const { biz: bizParam } = await searchParams;
  const biz = bizParam ?? DEFAULT_DEMO_BUSINESS_ID;
  const data = getDemoDataset(biz);

  const opportunities = [...data.opportunities].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return (
    <DashboardChrome activeSection="opportunities" biz={biz} title="Opportunities">
      <div className="space-y-4">
        <p className="text-sm text-slate-muted">
          Every lead NeverLose has touched, from first contact to revenue.
          Click one to see the full conversation and history.
        </p>

        <Card className="p-0">
          <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-4 border-b border-line px-6 py-3 text-xs uppercase tracking-wide text-slate-muted md:grid">
            <span>Contact</span>
            <span>Source</span>
            <span>Status</span>
            <span>Value</span>
            <span>Updated</span>
            <span />
          </div>
          <ul className="divide-y divide-line">
            {opportunities.map((opp) => (
              <li key={opp.id}>
                <Link
                  href={`/dashboard/opportunities/${opp.id}?biz=${biz}`}
                  className="grid grid-cols-2 items-center gap-2 px-6 py-4 transition-colors hover:bg-surface-alt md:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] md:gap-4"
                >
                  <div>
                    <p className="text-sm font-medium text-navy">{opp.contact.name}</p>
                    <p className="text-xs text-slate-muted">{opp.contact.phone}</p>
                  </div>
                  <span className="text-sm text-slate-body">{sourceLabels[opp.source]}</span>
                  <Badge tone={statusTones[opp.status]} className="w-fit">
                    {statusLabels[opp.status]}
                  </Badge>
                  <span className="text-sm text-navy">
                    {opp.confirmedRevenue > 0
                      ? formatCurrency(opp.confirmedRevenue)
                      : opp.estimatedValue > 0
                        ? `${formatCurrency(opp.estimatedValue)} potential`
                        : "—"}
                  </span>
                  <span className="text-xs text-slate-muted">{formatRelativeTime(opp.updatedAt)}</span>
                  <ArrowUpRight size={14} className="hidden text-slate-muted md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </DashboardChrome>
  );
}
