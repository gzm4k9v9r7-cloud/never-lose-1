"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { brand } from "@/config/brand";
import { VideoModal } from "./VideoModal";

export function WatchDemo() {
  const [open, setOpen] = useState(false);
  const hasVideo = Boolean(brand.demoVideoUrl);

  const thumbnail = (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-line shadow-[0_30px_80px_-30px_rgba(11,15,26,0.35)]">
      <Image
        src="/demo-thumbnail.png"
        alt={`${brand.name} dashboard preview`}
        fill
        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-surface-dark/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          <Play size={28} className="ml-1 fill-navy text-navy" />
        </span>
      </div>
      <p className="absolute bottom-5 left-6 text-sm font-medium text-white">
        {hasVideo ? "Watch the 90-second demo" : "Try the live interactive demo"}
      </p>
    </div>
  );

  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <Badge tone="accent" className="mx-auto">See It In Action</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Watch {brand.name} recover a job in real time
          </h2>
          <p className="mt-4 text-slate-body">
            {hasVideo
              ? "See exactly what happens from missed call to booked, deposited job."
              : "No video yet — but you can click through the exact same workflow yourself, live."}
          </p>
        </div>

        <div className="mt-10">
          {hasVideo ? (
            <button onClick={() => setOpen(true)} className="block w-full text-left">
              {thumbnail}
            </button>
          ) : (
            <Link href="/demo" className="block">
              {thumbnail}
            </Link>
          )}
        </div>
      </Container>

      {open && hasVideo && (
        <VideoModal url={brand.demoVideoUrl} onClose={() => setOpen(false)} />
      )}
    </section>
  );
}
