"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { permissionLabels } from "@/lib/demo/permissions";
import type { AIPermissions } from "@/types/domain";

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-gradient-accent" : "bg-line-strong"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export function PermissionsPanel({
  initialPermissions,
}: {
  initialPermissions: AIPermissions;
}) {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [saved, setSaved] = useState(false);

  function toggle(key: keyof Omit<AIPermissions, "businessId">) {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  }

  return (
    <div className="space-y-4">
      <Card className="flex items-start gap-3 border-accent-blue/30 bg-accent-blue/5">
        <Info size={18} className="mt-0.5 shrink-0 text-accent-blue" />
        <p className="text-sm text-slate-body">
          These switches control exactly what the AI is allowed to do on its
          own. If a permission is off, or the AI doesn&rsquo;t have enough
          approved information, it escalates the conversation to your team
          instead of guessing. This demo panel doesn&rsquo;t save changes —
          it&rsquo;s here so you can see how the controls work.
        </p>
      </Card>

      <Card className="p-0">
        <ul className="divide-y divide-line">
          {permissionLabels.map(({ key, label, description }) => (
            <li key={key} className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm font-medium text-navy">{label}</p>
                <p className="mt-0.5 text-xs text-slate-muted">{description}</p>
              </div>
              <Toggle checked={permissions[key]} onChange={() => toggle(key)} />
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex items-center gap-3">
        <Button onClick={() => setSaved(true)}>Save changes</Button>
        {saved && <span className="text-sm text-success">Saved for this preview session.</span>}
      </div>
    </div>
  );
}
