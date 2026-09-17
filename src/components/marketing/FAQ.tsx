"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    q: "Will the AI ever make up prices, discounts, or promises to my customers?",
    a: `No. ${brand.name} only ever shares pricing or policy information you've explicitly approved. If it doesn't have permission or enough information to answer confidently, it escalates the conversation to your team instead of guessing.`,
  },
  {
    q: "Do customer payments go through NeverLose?",
    a: "No. Payments and deposits are processed directly into your own connected payment account. NeverLose never takes possession of your customers' money.",
  },
  {
    q: `Is ${brand.name} built for my type of business?`,
    a: "Yes. The questions the AI asks, the workflows it follows, and what it's allowed to do are all configured per business and industry — from plumbers and HVAC companies to event venues and salons.",
  },
  {
    q: "What happens if the AI can't handle a conversation?",
    a: "It escalates to a human on your team. You control exactly which situations should always be handled by a person.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="rounded-2xl border border-line bg-surface">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={clsx(
                      "shrink-0 text-slate-muted transition-transform",
                      isOpen && "rotate-180 text-accent-blue"
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-body">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
