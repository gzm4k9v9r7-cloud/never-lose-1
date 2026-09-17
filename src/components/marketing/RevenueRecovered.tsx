import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";

export function RevenueRecoveredSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              A revenue number you can actually trust
            </h2>
            <p className="mt-5 text-slate-body">
              A lot of tools count a booking as &ldquo;revenue&rdquo; the moment it&rsquo;s
              scheduled. NeverLose doesn&rsquo;t. We separate what&rsquo;s actually been
              paid from what&rsquo;s still in progress, so your dashboard never
              overstates what NeverLose has done for you.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-success" size={20} />
                <p className="text-sm text-slate-body">
                  <span className="font-medium text-navy">Revenue Recovered</span> —
                  confirmed, recorded payments directly attributable to a
                  NeverLose-recovered opportunity.
                </p>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-accent-blue" size={20} />
                <p className="text-sm text-slate-body">
                  <span className="font-medium text-navy">Potential Revenue Recovered</span> —
                  the estimated value of bookings and opportunities that
                  haven&rsquo;t resulted in a confirmed payment yet.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-muted">Revenue Recovered</p>
                <p className="mt-2 text-4xl font-semibold text-success">$12,450</p>
                <p className="mt-1 text-xs text-slate-muted">Confirmed payments this month</p>
              </div>
              <div>
                <p className="text-sm text-slate-muted">Potential Revenue Recovered</p>
                <p className="mt-2 text-4xl font-semibold text-accent-blue">$9,300</p>
                <p className="mt-1 text-xs text-slate-muted">Booked, not yet collected</p>
              </div>
            </div>
            <p className="mt-6 border-t border-line pt-6 text-xs text-slate-muted">
              Every dollar traces back to a specific call, conversation, and
              opportunity — see it for yourself in the interactive demo.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
