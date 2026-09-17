"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { brand } from "@/config/brand";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    window.location.href = "/app";
  }

  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center justify-center py-20">
        <Container className="max-w-md">
          <Card>
            <h1 className="text-xl font-semibold text-navy">Log in to {brand.name}</h1>
            <p className="mt-2 text-sm text-slate-muted">
              Log in to your real account, or explore the interactive product
              demo without signing up.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-slate-muted">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-navy focus:border-accent-blue focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-muted">Password</label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-navy focus:border-accent-blue focus:outline-none"
                />
              </div>

              {error && <p className="text-sm text-danger">{error}</p>}

              <Button type="submit" disabled={loading} className="w-full justify-center">
                {loading ? "Logging in..." : "Log in"}
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-muted">
              Don&rsquo;t have an account?{" "}
              <Link href="/signup" className="text-accent-blue hover:underline">
                Sign up
              </Link>
            </p>

            <div className="mt-6 border-t border-line pt-6">
              <ButtonLink href="/demo" variant="secondary" className="w-full justify-center">
                Explore the demo instead
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </main>
      <Footer />
    </>
  );
}
