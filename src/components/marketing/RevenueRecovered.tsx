import { Container } from "@/components/ui/Container";

export function RevenueRecoveredSection() {
  return (
    <section className="border-y border-line bg-surface-alt py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              A revenue number you can actually trust
            </h2>
            <p className="mt-2 text-slate-body">
              We only count money that&rsquo;s actually been paid — never a
              booking that just got scheduled.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="text-4xl font-semibold text-success">$12,450</p>
              <p className="mt-1 text-sm text-slate-muted">Revenue Recovered</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-accent-blue">$9,300</p>
              <p className="mt-1 text-sm text-slate-muted">Potential Revenue</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
