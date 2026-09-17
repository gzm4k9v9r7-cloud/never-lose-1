import type {
  PaymentProvider,
  CreatePaymentLinkResult,
} from "./types";
import type { PaymentStatus } from "@/types/domain";

export class MockPaymentProvider implements PaymentProvider {
  readonly name = "mock";

  async createPaymentLink(): Promise<CreatePaymentLinkResult> {
    const paymentId = `mock_pay_${Math.random().toString(36).slice(2, 10)}`;
    return {
      paymentId,
      // In production this points to a Stripe Connect checkout session that
      // deposits funds directly into the business's own connected account.
      url: `https://pay.example/${paymentId}`,
    };
  }

  async getPaymentStatus(): Promise<PaymentStatus> {
    return "pending";
  }
}
