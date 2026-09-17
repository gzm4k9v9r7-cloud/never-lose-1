"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { brand } from "@/config/brand";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

export function FinalCTA() {
  const [watchingStory, setWatchingStory] = useState(false);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark to-[#1B2236] px-8 py-12 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,124,255,0.3),_transparent_65%)]"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {brand.tagline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              {brand.secondaryTagline}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/demo" size="lg">
                Start Free
              </ButtonLink>
              <ButtonLink href="#pricing" size="lg" variant="secondary">
                See Pricing
              </ButtonLink>
            </div>
            {brand.secondaryVideoUrl && (
              <button
                onClick={() => setWatchingStory(true)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
              >
                <Play size={14} className="fill-white/70" />
                Watch our story
              </button>
            )}
          </div>
        </div>
      </Container>
      {watchingStory && brand.secondaryVideoUrl && (
        <VideoModal url={brand.secondaryVideoUrl} onClose={() => setWatchingStory(false)} />
      )}
    </section>
  );
}
