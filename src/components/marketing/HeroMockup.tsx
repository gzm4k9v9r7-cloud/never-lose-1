"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { brand } from "@/config/brand";
import { DashboardPreview } from "./DashboardPreview";
import { PhoneMockup } from "./PhoneMockup";
import { VideoModal } from "./VideoModal";

/** The hero's product mockup doubles as the "watch it in action" entry point. */
export function HeroMockup() {
  const [open, setOpen] = useState(false);
  const hasVideo = Boolean(brand.demoVideoUrl);

  const playButton = (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition-transform group-hover:scale-110">
      <Play size={22} className="ml-1 fill-navy text-navy" />
    </span>
  );

  return (
    <div className="flex items-end justify-center gap-4 lg:justify-start">
      <div className="group relative w-full max-w-md">
        {hasVideo ? (
          <button onClick={() => setOpen(true)} className="block w-full text-left">
            <DashboardPreview />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 transition-colors group-hover:bg-black/10">
              {playButton}
            </div>
          </button>
        ) : (
          <Link href="/demo" className="block">
            <DashboardPreview />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 transition-colors group-hover:bg-black/10">
              {playButton}
            </div>
          </Link>
        )}
      </div>
      <div className="relative z-10 hidden shrink-0 mb-[-16px] sm:block">
        <PhoneMockup />
      </div>

      {open && hasVideo && (
        <VideoModal url={brand.demoVideoUrl} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
