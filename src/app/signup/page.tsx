"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { brand } from "@/config/brand";
import { industries } from "@/config/industries";
import { createClient } from "@/utils/supabase/client";

export default function SignupPage() {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState(industries[0]?.id ?? "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkEmail, setCheckEmail] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { company_name: companyName, industry },
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    if (!data.session) {
      // Email confirmation is required before a session exists.
      setCheckEmail(true);
      return;
    }

    window.location.href = "/app";
  }

  if (checkEmail) {
    return (
      <>
        <Nav />
        <main className="flex flex-1 items-center justify-center py-20">
          <Container className="max-w-md">
            <Card className="text-center">
              <h1 className="text-xl font-semibold text-navy">Check your email</h1>
              <p className="mt-2 text-sm text-slate-muted">
                We sent a confirmation link to <strong>{email}</strong>. Click it
                to activate your account, then come back and log in.
              </p>
              <Link
                href="/login"
                className="mt-6 inline-block text-sm font-medium text-accent-blue hover:underline"
              >
                Go to login
              </Link>
            </Card>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center justify-center py-20">
        <Container className="max-w-md">
          <Card>
            <h1 className="text-xl font-semibold text-navy">
              Create your {brand.name} account
            </h1>
            <p className="mt-2 text-sm text-slate-muted">
              Real signup — your account and login are stored for real, so you
              can log back in any time.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-slate-muted">Company name</label>
                <input
                  required
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Riverside Plumbing Co."
                  className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-navy focus:border-accent-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-muted">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-navy focus:border-accent-blue focus:outline-none"
                >
                  {industries.map((ind) => (
                    <option key={ind.id} value={ind.id}>
                      {ind.label}
                    </option>
                  ))}
                </select>
              </div>

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
                  minLength={6}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-navy focus:border-accent-blue focus:outline-none"
                />
              </div>

              {error && <p className="text-sm text-danger">{error}</p>}

              <Button type="submit" disabled={loading} className="w-full justify-center">
                {loading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-muted">
              Already have an account?{" "}
              <Link href="/login" className="text-accent-blue hover:underline">
                Log in
              </Link>
            </p>
          </Card>
        </Container>
      </main>
      <Footer />
    </>
  );
}
