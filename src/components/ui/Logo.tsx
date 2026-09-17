import { brand } from "@/config/brand";
import clsx from "clsx";

/**
 * Centralized logo/wordmark. Swap this implementation for an <Image> using
 * `brand.logo.iconPath` once real artwork exists — every place the logo
 * appears imports this component instead of writing the brand name inline.
 */
export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={clsx("inline-flex items-center gap-2 font-semibold", className)}>
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-accent text-sm text-white">
        {brand.shortName.charAt(0)}
      </span>
      <span className={dark ? "text-white" : "text-navy"}>{brand.name}</span>
    </span>
  );
}
