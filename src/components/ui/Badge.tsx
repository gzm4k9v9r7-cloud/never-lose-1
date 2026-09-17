import type { ReactNode } from "react";
import clsx from "clsx";

type Tone = "accent" | "success" | "neutral" | "warning" | "danger";

const tones: Record<Tone, string> = {
  accent: "bg-gradient-accent text-white",
  success: "bg-success-soft text-success",
  neutral: "bg-surface-alt text-slate-body border border-line",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
