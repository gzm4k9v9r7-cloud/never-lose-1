import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { formatPercent } from "@/lib/format";

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  tone = "neutral",
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: number;
  tone?: "success" | "accent" | "neutral";
}) {
  const iconTone =
    tone === "success"
      ? "bg-success-soft text-success"
      : tone === "accent"
        ? "bg-surface-alt text-accent-blue"
        : "bg-surface-alt text-slate-body";

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconTone}`}>
          <Icon size={16} />
        </span>
        {trend !== undefined && (
          <span className={trend >= 0 ? "text-xs text-success" : "text-xs text-danger"}>
            {formatPercent(trend)}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-semibold text-navy">{value}</p>
        <p className="mt-1 text-xs text-slate-muted">{label}</p>
      </div>
    </Card>
  );
}
