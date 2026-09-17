import { Container } from "@/components/ui/Container";
import { industries } from "@/config/industries";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURED_COUNT = 8;

export function WhoItsFor() {
  const featured = industries.slice(0, FEATURED_COUNT);
  const rest = industries.slice(FEATURED_COUNT);

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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((industry) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[industry.icon];
            return (
              <div
                key={industry.id}
                className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent-blue/40"
              >
                {Icon && (
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-alt text-accent-blue">
                    <Icon size={16} />
                  </span>
                )}
                <p className="mt-3 text-sm font-medium text-navy">{industry.label}</p>
              </div>
            );
          })}
        </div>

        {rest.length > 0 && (
          <p className="mt-6 text-center text-sm text-slate-muted">
            Plus {rest.map((i) => i.label.toLowerCase()).join(", ")}, and more.
          </p>
        )}
      </Container>
    </section>
  );
}
