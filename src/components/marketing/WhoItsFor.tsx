import { Container } from "@/components/ui/Container";
import { industries } from "@/config/industries";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function WhoItsFor() {
  return (
    <section id="industries" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Built for every kind of service business
          </h2>
          <p className="mt-4 text-slate-body">
            NeverLose is configured for your industry — the questions,
            workflows, and permissions adjust to fit how you actually work.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[industry.icon];
            return (
              <div
                key={industry.id}
                className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent-blue/40"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-alt text-accent-blue">
                      <Icon size={16} />
                    </span>
                  )}
                  <p className="font-medium text-navy">{industry.label}</p>
                </div>
                <p className="mt-4 text-sm italic text-slate-body">
                  {industry.exampleLead}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
