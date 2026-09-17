/**
 * PAYMENT PROVIDER ADAPTER — deposit/payment links and status. Real
 * implementation will be Stripe Connect, specifically so that customer
 * payments settle directly into each individual business's own connected
 * account. NeverLose's application layer never holds or moves customer
 * funds — this adapter only ever creates a link and reports back a status.
 */

import type { PaymentStatus } from "@/types/domain";

export interface CreatePaymentLinkInput {
  businessId: string;
  opportunityId: string;
  kind: "deposit" | "full_payment" | "invoice_payment";
  amount: number;
  description: string;
}

export interface CreatePaymentLinkResult {
  paymentId: string;
  url: string;
}

export interface PaymentProvider {
  readonly name: string;
  createPaymentLink(
    input: CreatePaymentLinkInput
  ): Promise<CreatePaymentLinkResult>;
  getPaymentStatus(paymentId: string): Promise<PaymentStatus>;
}
