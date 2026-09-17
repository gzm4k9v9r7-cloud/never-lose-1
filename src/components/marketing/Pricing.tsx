import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { plans } from "@/config/plans";
import { Check, CalendarX, Lock, Headset } from "lucide-react";
import clsx from "clsx";

const trustLine = [
  { icon: CalendarX, text: "No contracts, cancel anytime" },
  { icon: Lock, text: "Payments go directly to your own account" },
  { icon: Headset, text: "Real support when you need it" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Simple plans that scale with you
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                "flex flex-col overflow-hidden rounded-2xl border",
                plan.mostPopular
                  ? "border-2 border-accent-blue/50 bg-surface shadow-[0_25px_60px_-25px_rgba(79,124,255,0.45)] lg:-my-4"
                  : "border-line bg-surface"
              )}
            >
              {plan.mostPopular && (
                <p className="bg-gradient-accent py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </p>
              )}
              <div className="flex flex-1 flex-col p-8">
                <p className="text-lg font-semibold text-navy">{plan.name}</p>
                <p className="mt-2 text-sm text-slate-muted">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-semibold text-navy">${plan.price}</span>
                  <span className="text-slate-muted">/{plan.billingPeriod}</span>
                </p>
                <ButtonLink
                  href="/demo"
                  variant={plan.mostPopular ? "primary" : "secondary"}
                  className="mt-6 w-full justify-center"
                >
                  Start Free
                </ButtonLink>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-body">
                      <Check size={16} className="mt-0.5 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustLine.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-slate-muted">
              <item.icon size={15} className="text-slate-muted" />
              {item.text}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
