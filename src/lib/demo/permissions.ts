import type { AIPermissions } from "@/types/domain";
import { brand } from "@/config/brand";

/**
 * Default AI Permissions shown on the demo AI Permissions screen for each
 * demo business. These mirror the guardrails referenced in the sample
 * conversations: the venue has NOT enabled starting-price disclosure, which
 * is why the Rachel Simmons conversation in the demo data escalates to a
 * human instead of quoting a number.
 */
export const demoPermissions: Record<string, AIPermissions> = {
  biz_riverside_plumbing: {
    businessId: "biz_riverside_plumbing",
    canAnswerCalls: true,
    canSendSms: true,
    canBookAppointments: true,
    canProvideStartingPrices: true,
    canProvidePriceRanges: true,
    canSendPaymentLinks: true,
    canFollowUpEstimates: true,
    canFollowUpInvoices: true,
    canContactPreviousCustomers: true,
    canRequestReviews: true,
    canEscalateToHuman: true,
  },
  biz_grand_oak_estate: {
    businessId: "biz_grand_oak_estate",
    canAnswerCalls: true,
    canSendSms: true,
    canBookAppointments: true,
    canProvideStartingPrices: false,
    canProvidePriceRanges: false,
    canSendPaymentLinks: true,
    canFollowUpEstimates: false,
    canFollowUpInvoices: false,
    canContactPreviousCustomers: true,
    canRequestReviews: true,
    canEscalateToHuman: true,
  },
};

export const permissionLabels: {
  key: keyof Omit<AIPermissions, "businessId">;
  label: string;
  description: string;
}[] = [
  { key: "canAnswerCalls", label: "Answer phone calls", description: `Let ${brand.name}'s AI pick up and speak with callers directly (24/7 answering).` },
  { key: "canSendSms", label: "Send text messages", description: `Allow ${brand.name} to text customers, including missed-call text-back.` },
  { key: "canBookAppointments", label: "Book appointments", description: `Let ${brand.name} schedule directly onto your connected calendar.` },
  { key: "canProvideStartingPrices", label: "Share approved starting prices", description: "Allow the AI to quote a starting price you've approved for a service." },
  { key: "canProvidePriceRanges", label: "Share approved price ranges", description: "Allow the AI to share a price range you've approved instead of an exact number." },
  { key: "canSendPaymentLinks", label: "Send deposit / payment links", description: `Let ${brand.name} text a secure payment link when a deposit is required.` },
  { key: "canFollowUpEstimates", label: "Follow up on estimates", description: "Automatically follow up on estimates that haven't been accepted yet." },
  { key: "canFollowUpInvoices", label: "Follow up on unpaid invoices", description: "Automatically send reminders for overdue invoices." },
  { key: "canContactPreviousCustomers", label: "Contact previous customers", description: "Allow reactivation messages to past customers." },
  { key: "canRequestReviews", label: "Request reviews", description: "Automatically ask happy customers for a Google review after a completed job." },
  { key: "canEscalateToHuman", label: "Escalate to a human", description: "Hand a conversation off to your team when the AI lacks permission or information." },
];
