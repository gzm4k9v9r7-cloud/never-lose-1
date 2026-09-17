/**
 * ============================================================================
 * PRICING & PLAN CONFIG
 * ============================================================================
 * All pricing, plan names, feature lists, and usage limits live here so they
 * can be changed later (a price increase, a renamed tier, a new limit)
 * without touching any component or page. Every screen that shows pricing
 * or checks a usage limit should read from this file.
 */

export type PlanId = "starter" | "pro" | "business";

export interface PlanLimits {
  /** -1 means unlimited */
  aiConversationsPerMonth: number;
  phoneNumbers: number;
  locations: number;
  teamMembers: number;
  smsPerMonth: number;
}

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  billingPeriod: "month";
  mostPopular: boolean;
  description: string;
  features: string[];
  limits: PlanLimits;
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 149,
    billingPeriod: "month",
    mostPopular: false,
    description:
      "Stop losing customers to missed calls — the essentials for a business that just needs to catch every lead.",
    features: [
      "Missed-call detection",
      "Instant AI text-back",
      "Spam call filtering",
      "Lead capture",
      "Basic scheduling",
      "Basic dashboard",
      "Revenue-recovery tracking",
      "Email & SMS notifications",
    ],
    limits: {
      aiConversationsPerMonth: 250,
      phoneNumbers: 1,
      locations: 1,
      teamMembers: 3,
      smsPerMonth: 1000,
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: 299,
    billingPeriod: "month",
    mostPopular: true,
    description:
      "The complete front office — answering, booking, follow-up and reactivation, around the clock.",
    features: [
      "Everything in Starter",
      "24/7 AI phone answering",
      "Appointment booking",
      "Estimate follow-ups",
      "Previous-customer reactivation",
      "Payment & deposit links",
      "Automated review requests",
      "Multilingual conversations (English, Spanish, Portuguese)",
    ],
    limits: {
      aiConversationsPerMonth: 1000,
      phoneNumbers: 3,
      locations: 1,
      teamMembers: 10,
      smsPerMonth: 5000,
    },
  },
  {
    id: "business",
    name: "Business",
    price: 499,
    billingPeriod: "month",
    mostPopular: false,
    description:
      "For multi-location operations that need higher limits, deeper analytics and priority support.",
    features: [
      "Everything in Pro",
      "Higher usage limits",
      "Multiple locations & phone numbers",
      "Unpaid invoice follow-up",
      "Advanced automations",
      "Team management & roles",
      "Advanced revenue analytics",
      "Priority support",
    ],
    limits: {
      aiConversationsPerMonth: 5000,
      phoneNumbers: 10,
      locations: 10,
      teamMembers: 50,
      smsPerMonth: 25000,
    },
  },
];

export const getPlan = (id: PlanId): Plan =>
  plans.find((p) => p.id === id) ?? plans[0];
