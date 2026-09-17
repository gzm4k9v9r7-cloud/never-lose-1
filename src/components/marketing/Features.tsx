import { Container } from "@/components/ui/Container";
import {
  PhoneMissed,
  ShieldAlert,
  MessagesSquare,
  CalendarClock,
  FileClock,
  Repeat2,
  CreditCard,
  ReceiptText,
  Star,
  Languages,
} from "lucide-react";

const features = [
  { icon: PhoneMissed, title: "Missed Call Recovery", description: "Every missed call gets an instant, natural text-back — before the customer calls your competitor." },
  { icon: ShieldAlert, title: "Spam Detection", description: "Robocalls and spam get filtered out automatically, so effort goes toward real customers." },
  { icon: MessagesSquare, title: "AI Lead Qualification", description: "Your own questions, asked consistently, every single time." },
  { icon: CalendarClock, title: "Appointment Booking", description: "Only real openings on your calendar are ever offered." },
  { icon: FileClock, title: "Estimate Recovery", description: "Estimates that go quiet get a business-approved follow-up, automatically." },
  { icon: Repeat2, title: "Previous-Customer Reactivation", description: "Bring past customers back with reminders and campaigns you control." },
  { icon: CreditCard, title: "Deposits & Payments", description: "Send secure payment links — funds go straight to your own account." },
  { icon: ReceiptText, title: "Unpaid Invoice Follow-Up", description: "Automatic, polite reminders for invoices that are past due." },
  { icon: Star, title: "Review Requests", description: "Happy customers get asked for a Google review right after the job." },
  { icon: Languages, title: "Multilingual", description: "Conversations in English, Spanish, and Portuguese." },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Everything it takes to never lose a job
          </h2>
          <p className="mt-4 text-slate-body">
            NeverLose covers the entire path from first contact to collected
            revenue — not just the phone call.
          </p>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-line bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-alt text-accent-blue">
                <f.icon size={18} />
              </span>
              <p className="mt-4 text-base font-semibold text-navy">{f.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
