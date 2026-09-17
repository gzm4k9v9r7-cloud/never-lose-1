/**
 * AI PROVIDER ADAPTER — the interface every AI conversation engine must
 * implement. The rest of the app (qualification flow, missed-call
 * follow-up, estimate recovery, etc.) only ever talks to this interface, so
 * the underlying model/provider (Claude today, potentially something else
 * later) can be swapped by changing `getAIProvider()` in `index.ts` — no
 * other file in the app needs to change.
 *
 * The single most important contract here is the guardrail one: a provider
 * implementation must NEVER invent a price, discount, policy, or promise
 * that isn't present in `AIBusinessContext`. If it doesn't have permission
 * or enough approved information to answer, it must escalate instead of
 * guessing.
 */

import type { AIPermissions, ConversationMessage } from "@/types/domain";

export interface ApprovedPricingItem {
  service: string;
  startingPrice: number | null;
  priceRangeLow: number | null;
  priceRangeHigh: number | null;
}

export interface AIBusinessContext {
  businessId: string;
  businessName: string;
  industryLabel: string;
  permissions: AIPermissions;
  services: string[];
  approvedPricing: ApprovedPricingItem[];
  faqs: { question: string; answer: string }[];
  policies: string | null;
  qualificationQuestions: string[];
  language: "en" | "es" | "pt";
}

export type AIAction =
  | { type: "ask_question"; question: string }
  | { type: "offer_appointment_slots" }
  | { type: "confirm_booking" }
  | { type: "send_payment_link" }
  | { type: "none" };

export interface AIResponseInput {
  businessContext: AIBusinessContext;
  history: ConversationMessage[];
  customerMessage: string;
}

export interface AIResponseResult {
  reply: string;
  action: AIAction;
  /** True if the AI could not proceed within its permissions/knowledge and a human should take over. */
  escalate: boolean;
  escalationReason?: string;
}

export interface AIProvider {
  /** Human-readable identifier shown in admin/debug views, e.g. "claude" or "mock". */
  readonly name: string;
  generateResponse(input: AIResponseInput): Promise<AIResponseResult>;
}
