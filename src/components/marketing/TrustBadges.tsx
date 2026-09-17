import { Container } from "@/components/ui/Container";
import { CalendarX, Lock, ShieldCheck, Headset } from "lucide-react";

const badges = [
  { icon: CalendarX, title: "No contracts", subtitle: "Cancel anytime." },
  { icon: Lock, title: "Your customer's payments go directly to you", subtitle: "NeverLose never holds your money." },
  { icon: ShieldCheck, title: "Secure & private", subtitle: "Built for your business." },
  { icon: Headset, title: "We're here to help", subtitle: "Real support when you need it." },
];

export function TrustBadges() {
  return (
    <section className="border-y border-line bg-surface-alt py-10">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-accent-blue">
                <badge.icon size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-navy">{badge.title}</p>
                <p className="mt-0.5 text-xs text-slate-muted">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
