"use client";

import { LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export function LogoutButton() {
  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-muted hover:bg-surface-alt hover:text-navy"
    >
      <LogOut size={14} />
      Log out
    </button>
  );
}
