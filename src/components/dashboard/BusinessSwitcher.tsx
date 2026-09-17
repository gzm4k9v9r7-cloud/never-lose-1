"use client";

import { usePathname, useRouter } from "next/navigation";
import type { DemoBusinessSummary } from "@/lib/demo";

export function BusinessSwitcher({
  businesses,
  activeBiz,
}: {
  businesses: DemoBusinessSummary[];
  activeBiz: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <label className="flex flex-col gap-1.5 text-xs text-slate-muted sm:flex-row sm:items-center sm:gap-2">
      <span className="shrink-0">Viewing demo for</span>
      <select
        value={activeBiz}
        onChange={(e) => router.push(`${pathname}?biz=${e.target.value}`)}
        className="w-full rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-navy focus:border-accent-blue focus:outline-none sm:w-auto"
      >
        {businesses.map((b) => (
          <option key={b.id} value={b.id} className="bg-surface text-navy">
            {b.name} — {b.industryLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
