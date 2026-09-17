import type { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
