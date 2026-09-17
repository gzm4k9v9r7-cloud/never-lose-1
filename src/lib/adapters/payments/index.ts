import type { PaymentProvider } from "./types";
import { MockPaymentProvider } from "./mock";

export * from "./types";

/**
 * Provider selection point for payments. Real implementation (Phase 7) will
 * add a StripeConnectPaymentProvider here. Deliberately not connected yet —
 * see the note in `mock.ts` about funds always settling into the
 * business's own account, never NeverLose's.
 */
export function getPaymentProvider(): PaymentProvider {
  const provider = process.env.PAYMENT_PROVIDER ?? "mock";
  switch (provider) {
    case "mock":
    default:
      return new MockPaymentProvider();
  }
}
