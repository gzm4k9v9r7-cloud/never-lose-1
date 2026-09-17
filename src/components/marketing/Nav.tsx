"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#industries", label: "Who It's For" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-dark/95 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo dark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/login" size="md" variant="secondary">
            Login
          </ButtonLink>
          <ButtonLink href="/demo" size="md">
            Get Started
          </ButtonLink>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-surface-dark md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-white"
            >
              Login
            </Link>
            <ButtonLink href="/demo" className="w-full justify-center">
              Get Started
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
