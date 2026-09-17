import type { ReactNode } from "react";
import Link from "next/link";
import { Sidebar } from "./Sidebar";
import { BusinessSwitcher } from "./BusinessSwitcher";
import { Badge } from "@/components/ui/Badge";
import { demoBusinesses } from "@/lib/demo";

type Section = "overview" | "opportunities" | "workflow" | "permissions";

const mobileLinks: { id: Section; label: string; href: string }[] = [
  { id: "overview", label: "Overview", href: "/dashboard" },
  { id: "opportunities", label: "Opportunities", href: "/dashboard/opportunities" },
  { id: "workflow", label: "Workflow Demo", href: "/dashboard/workflow" },
  { id: "permissions", label: "AI Permissions", href: "/dashboard/permissions" },
];

export function DashboardChrome({
  activeSection,
  biz,
  title,
  children,
}: {
  activeSection: Section;
  biz: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar activeSection={activeSection} biz={biz} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-4 border-b border-line bg-surface px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-navy">{title}</h1>
              <Badge tone="accent">Interactive Demo</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-muted">
              Sample data — no real calls, texts, or payments are being made.
            </p>
          </div>
          <BusinessSwitcher businesses={demoBusinesses} activeBiz={biz} />
        </header>

        <nav className="flex gap-1 overflow-x-auto border-b border-line bg-surface-alt px-4 py-2 md:hidden">
          {mobileLinks.map((link) => (
            <Link
              key={link.id}
              href={`${link.href}?biz=${biz}`}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs ${
                link.id === activeSection
                  ? "bg-gradient-accent text-white"
                  : "text-slate-body"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
