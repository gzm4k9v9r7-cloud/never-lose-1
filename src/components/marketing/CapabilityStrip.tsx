import { Container } from "@/components/ui/Container";
import {
  PhoneCall,
  MessageSquareText,
  CalendarCheck2,
  FileClock,
  CreditCard,
  Repeat2,
  Star,
  ShieldAlert,
} from "lucide-react";

type Tone = "blue" | "orange" | "aqua" | "violet" | "success" | "danger";

const toneClasses: Record<Tone, string> = {
  blue: "bg-surface-alt text-cat-blue",
  orange: "bg-surface-alt text-cat-orange",
  aqua: "bg-surface-alt text-cat-aqua",
  violet: "bg-surface-alt text-cat-violet",
  success: "bg-success-soft text-success",
  danger: "bg-danger-soft text-danger",
};

const capabilities: { icon: typeof PhoneCall; label: string; tone: Tone }[] = [
  { icon: PhoneCall, label: "Answers Calls 24/7", tone: "blue" },
  { icon: MessageSquareText, label: "Texts Missed Callers", tone: "orange" },
  { icon: CalendarCheck2, label: "Books Appointments", tone: "violet" },
  { icon: FileClock, label: "Follows Up on Estimates", tone: "aqua" },
  { icon: CreditCard, label: "Collects Payments", tone: "success" },
  { icon: Repeat2, label: "Reactivates Old Customers", tone: "blue" },
  { icon: Star, label: "Generates Reviews", tone: "orange" },
  { icon: ShieldAlert, label: "Blocks Spam Calls", tone: "danger" },
];

export function CapabilityStrip() {
  return (
    <section className="border-y border-line bg-surface py-10">
      <Container>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {capabilities.map((cap) => (
            <div key={cap.label} className="flex flex-col items-center gap-2 text-center">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[cap.tone]}`}
              >
                <cap.icon size={20} />
              </span>
              <p className="text-xs font-medium leading-tight text-slate-body">
                {cap.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
