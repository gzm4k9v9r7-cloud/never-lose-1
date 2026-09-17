import { Container } from "@/components/ui/Container";
import {
  PhoneMissed,
  MessageSquareText,
  ClipboardCheck,
  CalendarCheck2,
  CircleDollarSign,
  TrendingUp,
} from "lucide-react";

const steps = [
  { icon: PhoneMissed, title: "Missed Call", description: "A call comes in and goes unanswered.", color: "bg-cat-orange" },
  { icon: MessageSquareText, title: "Instant AI Response", description: "NeverLose texts the caller back within seconds.", color: "bg-cat-blue" },
  { icon: ClipboardCheck, title: "Lead Qualified", description: "The AI asks your approved questions to understand the need.", color: "bg-cat-violet" },
  { icon: CalendarCheck2, title: "Appointment Booked", description: "A real opening on your calendar gets booked.", color: "bg-cat-aqua" },
  { icon: CircleDollarSign, title: "Payment / Deposit", description: "A secure payment link is sent, if you've enabled it.", color: "bg-cat-blue" },
  { icon: TrendingUp, title: "Revenue Recovered", description: "A job that would've been lost is now on your books.", color: "bg-cat-aqua" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-line bg-surface p-5">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${step.color}`}>
                  <step.icon size={18} />
                </span>
                <p className="text-sm font-semibold text-navy">
                  {i + 1}. {step.title}
                </p>
                <p className="text-xs leading-relaxed text-slate-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
