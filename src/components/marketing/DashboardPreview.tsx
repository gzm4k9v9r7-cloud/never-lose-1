import { Badge } from "@/components/ui/Badge";
import { PhoneMissed, MessageSquareText, CalendarCheck2, CircleDollarSign } from "lucide-react";

const bars = [30, 45, 28, 60, 52, 70, 48, 65, 80, 58, 72, 90, 68, 100];

const activity = [
  { time: "8:47 PM", label: "Missed call received", icon: PhoneMissed },
  { time: "8:48 PM", label: "AI conversation started", icon: MessageSquareText },
  { time: "8:50 PM", label: "Appointment booked", icon: CalendarCheck2 },
  { time: "8:51 PM", label: "$150 deposit paid", icon: CircleDollarSign, highlight: true },
];

/** Purely illustrative static mockup for the marketing site — not wired to the live demo dataset. */
export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_120px_-40px_rgba(79,124,255,0.35)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-alt px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-danger/70" />
        <span className="h-3 w-3 rounded-full bg-warning/70" />
        <span className="h-3 w-3 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-slate-muted">Riverside Plumbing Co. — Dashboard</span>
        <Badge tone="accent" className="ml-auto">Live Demo</Badge>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm text-slate-muted">Revenue Recovered This Month</p>
          <p className="mt-2 text-5xl font-semibold text-success">$12,450</p>
          <p className="mt-1 text-sm text-success/80">+18% vs. last month</p>

          <div className="mt-6 flex items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-success/50 to-success"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { label: "Missed Calls Recovered", value: "47" },
              { label: "Appointments Booked", value: "22" },
              { label: "Spam Blocked", value: "63" },
              { label: "Reviews Generated", value: "14" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-surface-alt p-3">
                <p className="text-lg font-semibold text-navy">{stat.value}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-surface-alt p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-muted">
            Recent Activity
          </p>
          <ul className="space-y-3">
            {activity.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                    item.highlight ? "bg-success-soft text-success" : "bg-surface text-slate-body"
                  }`}
                >
                  <item.icon size={14} />
                </span>
                <div>
                  <p className="text-sm text-navy">{item.label}</p>
                  <p className="text-xs text-slate-muted">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
