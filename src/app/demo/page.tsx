import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { demoBusinesses } from "@/lib/demo";
import { brand } from "@/config/brand";

export default function DemoLandingPage() {
  return (
    <>
      <Nav />
      <main className="py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <Badge tone="accent" className="mx-auto">Interactive Demo</Badge>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            See {brand.name} in action
          </h1>
          <p className="mt-4 text-slate-body">
            This is a fully interactive preview built with realistic sample
            data — no real calls, texts, or payments happen here. Pick a
            business to explore its dashboard.
          </p>
        </Container>

        <Container className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {demoBusinesses.map((business) => (
            <Link key={business.id} href={`/dashboard?biz=${business.id}`}>
              <Card className="h-full transition-colors hover:border-accent-blue/50">
                <p className="text-xs uppercase tracking-wide text-slate-muted">
                  {business.industryLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-navy">{business.name}</p>
                <p className="mt-4 flex items-center gap-1 text-sm text-accent-blue">
                  Explore dashboard <ArrowRight size={14} />
                </p>
              </Card>
            </Link>
          ))}
        </Container>

        <Container className="mt-10 max-w-3xl text-center">
          <p className="text-xs text-slate-muted">
            Ready to connect your own phone number, calendar, and payments
            later? Those integrations come online in a later phase — for now,
            explore freely.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
