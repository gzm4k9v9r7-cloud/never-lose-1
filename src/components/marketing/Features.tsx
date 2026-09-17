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
  { icon: PhoneMissed, title: "Missed Call Recovery" },
  { icon: ShieldAlert, title: "Spam Detection" },
  { icon: MessagesSquare, title: "AI Lead Qualification" },
  { icon: CalendarClock, title: "Appointment Booking" },
  { icon: FileClock, title: "Estimate Recovery" },
  { icon: Repeat2, title: "Customer Reactivation" },
  { icon: CreditCard, title: "Deposits & Payments" },
  { icon: ReceiptText, title: "Invoice Follow-Up" },
  { icon: Star, title: "Review Requests" },
  { icon: Languages, title: "Multilingual" },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Everything it takes to never lose a job
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-accent-blue">
                <f.icon size={14} />
              </span>
              <p className="text-sm font-medium text-navy">{f.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
