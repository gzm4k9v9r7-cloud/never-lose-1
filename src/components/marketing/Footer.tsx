import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { brand } from "@/config/brand";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <Logo />
          <p className="mt-2 max-w-sm text-sm text-slate-muted">
            {brand.secondaryTagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-muted">
          <a href="#how-it-works" className="hover:text-navy">How It Works</a>
          <a href="#pricing" className="hover:text-navy">Pricing</a>
          <a href="#faq" className="hover:text-navy">FAQ</a>
          <Link href="/login" className="hover:text-navy">Login</Link>
          <a href={`mailto:${brand.contact.supportEmail}`} className="hover:text-navy">
            Contact
          </a>
        </div>
      </Container>
      <Container className="mt-8 border-t border-line pt-6 text-center text-xs text-slate-muted">
        © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
      </Container>
    </footer>
  );
}
