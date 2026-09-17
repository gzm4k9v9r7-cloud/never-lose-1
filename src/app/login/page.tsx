import Link from "next/link";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { brand } from "@/config/brand";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center justify-center py-20">
        <Container className="max-w-md">
          <Card>
            <h1 className="text-xl font-semibold text-navy">Log in to {brand.name}</h1>
            <p className="mt-2 text-sm text-slate-muted">
              Secure account login is coming in the next build phase. For now,
              explore the interactive product demo below.
            </p>

            <form className="mt-6 space-y-4 opacity-50">
              <div>
                <label className="text-xs text-slate-muted">Email</label>
                <input
                  disabled
                  type="email"
                  placeholder="you@business.com"
                  className="mt-1 w-full rounded-lg border border-line bg-surface-alt px-3 py-2 text-sm text-navy"
                />
              </div>
              <div>
                <label className="text-xs text-slate-muted">Password</label>
                <input
                  disabled
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full rounded-lg border border-line bg-surface-alt px-3 py-2 text-sm text-navy"
                />
              </div>
            </form>

            <ButtonLink href="/demo" className="mt-6 w-full justify-center">
              Continue to Interactive Demo
            </ButtonLink>

            <p className="mt-4 text-center text-xs text-slate-muted">
              Already exploring?{" "}
              <Link href="/dashboard" className="text-accent-blue hover:underline">
                Go straight to the dashboard
              </Link>
            </p>
          </Card>
        </Container>
      </main>
      <Footer />
    </>
  );
}
