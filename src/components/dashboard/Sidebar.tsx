import Link from "next/link";
import clsx from "clsx";
import {
  LayoutDashboard,
  Inbox,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const sections = [
  { id: "overview", label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { id: "opportunities", label: "Opportunities", href: "/dashboard/opportunities", icon: Inbox },
  { id: "workflow", label: "Workflow Demo", href: "/dashboard/workflow", icon: Workflow },
  { id: "permissions", label: "AI Permissions", href: "/dashboard/permissions", icon: ShieldCheck },
] as const;

export function Sidebar({
  activeSection,
  biz,
}: {
  activeSection: (typeof sections)[number]["id"];
  biz: string;
}) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-line bg-surface md:flex">
      <div className="border-b border-line px-6 py-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {sections.map((section) => {
          const isActive = section.id === activeSection;
          return (
            <Link
              key={section.id}
              href={`${section.href}?biz=${biz}`}
              className={clsx(
                "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-gradient-accent text-white"
                  : "text-slate-body hover:bg-surface-alt hover:text-navy"
              )}
            >
              <section.icon size={16} />
              {section.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-line p-4">
        <Link
          href="/"
          className="block rounded-xl px-4 py-2.5 text-sm text-slate-muted hover:text-navy"
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );
}
