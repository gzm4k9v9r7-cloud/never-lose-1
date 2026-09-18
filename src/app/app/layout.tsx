import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Badge } from "@/components/ui/Badge";
import { LogoutButton } from "@/components/app/LogoutButton";
import { getSession } from "@/lib/account/session";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/login");

  if (!session.ok) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-page p-6">
        <div className="max-w-xl rounded-2xl border border-danger/30 bg-danger-soft p-6">
          <p className="font-semibold text-danger">Couldn&rsquo;t load your account</p>
          <p className="mt-2 break-words font-mono text-xs text-navy">{session.error}</p>
        </div>
      </div>
    );
  }

  const { user, business } = session;

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <header className="flex items-center justify-between border-b border-line bg-surface px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-navy">{business.name}</p>
            <p className="text-xs text-slate-muted">{user.email}</p>
          </div>
          <Badge tone="success">Live Account</Badge>
          <LogoutButton />
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
