"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { resolveVideoEmbed } from "@/lib/video";

export function VideoModal({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) {
  const embed = resolveVideoEmbed(url);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X size={20} />
      </button>
      <div
        className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {embed?.kind === "youtube" || embed?.kind === "vimeo" ? (
          <iframe
            src={embed.embedUrl}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : embed?.kind === "file" ? (
          <video src={embed.url} className="h-full w-full" controls autoPlay />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
            That video link isn&rsquo;t in a supported format.
          </div>
        )}
      </div>
    </div>
  );
}
