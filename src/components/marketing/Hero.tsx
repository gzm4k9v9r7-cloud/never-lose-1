import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { brand } from "@/config/brand";
import { DashboardPreview } from "./DashboardPreview";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_at_top,_rgba(79,124,255,0.35),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(22,163,74,0.25),_transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(74,58,167,0.2),_transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Badge tone="accent" className="mx-auto lg:mx-0">
              AI-powered revenue recovery for service businesses
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {brand.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 lg:mx-0">
              {brand.heroSubcopy}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/50 lg:mx-0">
              {brand.valueProp}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <ButtonLink href="/demo" size="lg">
                Start Free
              </ButtonLink>
              <ButtonLink href="#how-it-works" size="lg" variant="secondary">
                See How It Works
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs text-white/40">No contracts. Cancel anytime.</p>
          </div>

          <div className="flex items-end justify-center gap-4 lg:justify-start">
            <div className="w-full max-w-md">
              <DashboardPreview />
            </div>
            <div className="relative z-10 hidden shrink-0 mb-[-16px] sm:block">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
