import { Container } from "@/components/ui/Container";
import {
  PhoneMissed,
  CalendarCheck2,
  FileClock,
  Repeat2,
  ReceiptText,
  ShieldAlert,
  Star,
  TrendingUp,
} from "lucide-react";
import { getDemoDataset, DEFAULT_DEMO_BUSINESS_ID } from "@/lib/demo";
import { formatCurrency } from "@/lib/format";

type Tone = "blue" | "orange" | "aqua" | "violet" | "danger" | "highlight";

const toneClasses: Record<Tone, { chip: string; value: string; tile: string }> = {
  blue: { chip: "bg-surface-alt text-cat-blue", value: "text-navy", tile: "border-line bg-surface" },
  orange: { chip: "bg-surface-alt text-cat-orange", value: "text-navy", tile: "border-line bg-surface" },
  aqua: { chip: "bg-surface-alt text-cat-aqua", value: "text-navy", tile: "border-line bg-surface" },
  violet: { chip: "bg-surface-alt text-cat-violet", value: "text-navy", tile: "border-line bg-surface" },
  danger: { chip: "bg-danger-soft text-danger", value: "text-navy", tile: "border-line bg-surface" },
  highlight: { chip: "bg-white text-success", value: "text-success", tile: "border-success/30 bg-success-soft" },
};

/**
 * These numbers are pulled from the same demo dataset shown in the
 * interactive dashboard (src/lib/demo), not written separately — so a
 * visitor who clicks through to the live demo sees the exact same figures
 * the homepage just showed them.
 */
export function RealResults() {
  const { metrics } = getDemoDataset(DEFAULT_DEMO_BUSINESS_ID);

  const stats: { icon: typeof PhoneMissed; label: string; value: string; tone: Tone }[] = [
    { icon: PhoneMissed, label: "Missed calls recovered", value: String(metrics.missedCallsRecovered), tone: "blue" },
    { icon: CalendarCheck2, label: "Jobs booked automatically", value: String(metrics.appointmentsBooked), tone: "violet" },
    { icon: FileClock, label: "Stale estimates recovered", value: String(metrics.estimatesRecovered), tone: "orange" },
    { icon: Repeat2, label: "Previous customers reactivated", value: String(metrics.previousCustomersReactivated), tone: "aqua" },
    { icon: ReceiptText, label: "In overdue invoices collected", value: formatCurrency(metrics.overdueInvoicesCollected), tone: "orange" },
    { icon: ShieldAlert, label: "Spam calls blocked", value: String(metrics.spamCallsBlocked), tone: "danger" },
    { icon: Star, label: "New Google reviews generated", value: String(metrics.reviewsGenerated), tone: "violet" },
    { icon: TrendingUp, label: "Revenue recovered this month", value: formatCurrency(metrics.revenueRecovered), tone: "highlight" },
  ];

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Real results for real businesses
          </h2>
          <p className="mt-4 text-slate-body">
            This is what NeverLose recovered for one plumbing company last
            month — the exact numbers you can explore yourself in the
            interactive demo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => {
            const tone = toneClasses[stat.tone];
            return (
              <div key={stat.label} className={`rounded-2xl border p-5 ${tone.tile}`}>
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone.chip}`}>
                  <stat.icon size={16} />
                </span>
                <p className={`mt-3 text-2xl font-semibold ${tone.value}`}>{stat.value}</p>
                <p className="mt-1 text-xs leading-tight text-slate-muted">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
