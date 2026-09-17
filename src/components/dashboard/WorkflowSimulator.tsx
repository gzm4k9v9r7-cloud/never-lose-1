"use client";

import { useState } from "react";
import {
  PhoneMissed,
  ShieldCheck,
  MessageSquareText,
  CalendarCheck2,
  CircleDollarSign,
  BellRing,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import clsx from "clsx";

type StepKind = "call" | "spam-check" | "message" | "choice" | "notification";

interface BaseStep {
  kind: StepKind;
  stageLabel: string;
}

interface CallStep extends BaseStep {
  kind: "call";
  from: string;
}

interface SpamCheckStep extends BaseStep {
  kind: "spam-check";
}

interface MessageStep extends BaseStep {
  kind: "message";
  role: "ai" | "customer";
  text: string;
}

interface ChoiceStep extends BaseStep {
  kind: "choice";
  prompt: string;
  options: string[];
}

interface NotificationStep extends BaseStep {
  kind: "notification";
  text: string;
}

type Step = CallStep | SpamCheckStep | MessageStep | ChoiceStep | NotificationStep;

const steps: Step[] = [
  { kind: "call", stageLabel: "Incoming Call", from: "(617) 555-0148" },
  { kind: "spam-check", stageLabel: "Spam Check" },
  { kind: "message", stageLabel: "Instant AI Response", role: "ai", text: "Hi! Sorry we missed your call to Riverside Plumbing Co. How can we help?" },
  { kind: "message", stageLabel: "Customer Replies", role: "customer", text: "Hi, my kitchen sink is draining really slowly and now it smells bad." },
  { kind: "message", stageLabel: "AI Qualifies the Lead", role: "ai", text: "Sounds like it could use a professional drain cleaning. Is this happening at just the kitchen sink, or other drains too?" },
  { kind: "message", stageLabel: "Customer Replies", role: "customer", text: "Just the kitchen for now." },
  { kind: "message", stageLabel: "AI Qualifies the Lead", role: "ai", text: "Thanks! Can I get your service address?" },
  { kind: "message", stageLabel: "Customer Replies", role: "customer", text: "42 Willow St, Newton." },
  { kind: "choice", stageLabel: "Appointment Booked", prompt: "I have two openings tomorrow — which works better?", options: ["10:00 AM", "2:00 PM"] },
  { kind: "message", stageLabel: "Deposit Requested", role: "ai", text: "You're booked! We ask for a $150 deposit to confirm — here's a secure payment link." },
  { kind: "notification", stageLabel: "Business Notified", text: "New job added — $150 deposit paid, appointment confirmed." },
];

export function WorkflowSimulator() {
  const [current, setCurrent] = useState(0);
  const [chosenSlot, setChosenSlot] = useState<string | null>(null);
  const [revenue, setRevenue] = useState(0);
  const [missedCallsRecovered, setMissedCallsRecovered] = useState(0);

  const visibleSteps = steps.slice(0, current + 1);
  const currentStep = steps[current];

  function advance() {
    if (currentStep.kind === "choice" && !chosenSlot) return;
    if (current === 0) setMissedCallsRecovered(1);
    if (currentStep.kind === "notification") return;
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  }

  function chooseSlot(option: string) {
    setChosenSlot(option);
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  }

  function reset() {
    setCurrent(0);
    setChosenSlot(null);
    setRevenue(0);
    setMissedCallsRecovered(0);
  }

  function finish() {
    setRevenue(150);
    setCurrent(steps.length - 1);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <Card className="min-h-[520px]">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-navy">
            Live Walkthrough — Riverside Plumbing Co.
          </p>
          <Badge tone="accent">{steps[current].stageLabel}</Badge>
        </div>

        <div className="space-y-3">
          {visibleSteps.map((step, i) => (
            <StepView
              key={i}
              step={step}
              chosenSlot={i === current ? chosenSlot : chosenSlot && i < current ? chosenSlot : null}
              onChoose={i === current ? chooseSlot : undefined}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {current === 0 && (
            <Button onClick={advance} className="gap-1">
              Start Simulation <ChevronRight size={14} />
            </Button>
          )}
          {current > 0 && currentStep.kind === "message" && current < steps.length - 1 && (
            <Button onClick={advance} className="gap-1">
              Continue <ChevronRight size={14} />
            </Button>
          )}
          {currentStep.kind === "spam-check" && (
            <Button onClick={advance} className="gap-1">
              Continue <ChevronRight size={14} />
            </Button>
          )}
          {currentStep.kind === "notification" && revenue === 0 && (
            <Button onClick={finish} className="gap-1">
              Mark Deposit as Paid <CircleDollarSign size={14} />
            </Button>
          )}
          {(current > 0) && (
            <Button variant="secondary" onClick={reset} className="gap-1">
              <RotateCcw size={14} /> Restart
            </Button>
          )}
        </div>
      </Card>

      <Card>
        <p className="mb-4 text-sm font-semibold text-navy">Business Dashboard (live)</p>
        <div className="space-y-4">
          <div className="rounded-xl bg-surface-alt p-4">
            <p className="text-xs text-slate-muted">Revenue Recovered This Month</p>
            <p className="mt-1 text-3xl font-semibold text-success">
              ${(12450 + revenue).toLocaleString()}
            </p>
            {revenue > 0 && <p className="mt-1 text-xs text-success">+$150 just now</p>}
          </div>
          <div className="rounded-xl bg-surface-alt p-4">
            <p className="text-xs text-slate-muted">Missed Calls Recovered</p>
            <p className="mt-1 text-3xl font-semibold text-navy">
              {47 + missedCallsRecovered}
            </p>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-slate-muted">
          This mirrors exactly what a business owner sees in their real
          dashboard — no manual monitoring required. NeverLose only shows
          confirmed revenue once a payment is actually recorded.
        </p>
      </Card>
    </div>
  );
}

function StepView({
  step,
  chosenSlot,
  onChoose,
}: {
  step: Step;
  chosenSlot: string | null;
  onChoose?: (option: string) => void;
}) {
  if (step.kind === "call") {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-danger/10 px-4 py-3">
        <PhoneMissed size={16} className="text-danger" />
        <p className="text-sm text-navy">
          Incoming call from <span className="font-medium">{step.from}</span> — not answered
        </p>
      </div>
    );
  }
  if (step.kind === "spam-check") {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-success-soft px-4 py-3">
        <ShieldCheck size={16} className="text-success" />
        <p className="text-sm text-success">
          Spam check passed — this looks like a real customer
        </p>
      </div>
    );
  }
  if (step.kind === "message") {
    const isAi = step.role === "ai";
    return (
      <div className={clsx("flex", isAi ? "justify-start" : "justify-end")}>
        <div
          className={clsx(
            "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
            isAi ? "bg-gradient-accent text-white" : "bg-surface-alt text-navy"
          )}
        >
          <p className="mb-0.5 flex items-center gap-1 text-[10px] uppercase tracking-wide opacity-70">
            <MessageSquareText size={10} /> {isAi ? "NeverLose AI" : "Customer"}
          </p>
          {step.text}
        </div>
      </div>
    );
  }
  if (step.kind === "choice") {
    return (
      <div className="rounded-xl bg-surface-alt p-4">
        <p className="mb-3 flex items-center gap-2 text-sm text-navy">
          <CalendarCheck2 size={15} className="text-accent-blue" /> {step.prompt}
        </p>
        <div className="flex gap-2">
          {step.options.map((option) => (
            <button
              key={option}
              onClick={() => onChoose?.(option)}
              disabled={!!chosenSlot}
              className={clsx(
                "rounded-lg border px-4 py-2 text-sm transition-colors",
                chosenSlot === option
                  ? "border-accent-blue bg-accent-blue text-white"
                  : "border-line-strong text-slate-body hover:border-accent-blue/50 hover:text-navy",
                chosenSlot && chosenSlot !== option && "opacity-40"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 rounded-xl bg-accent-blue/10 px-4 py-3">
      <BellRing size={16} className="text-accent-blue" />
      <p className="text-sm text-navy">{step.text}</p>
    </div>
  );
}
