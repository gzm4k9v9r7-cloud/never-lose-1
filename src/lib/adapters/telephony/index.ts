import type { TelephonyProvider } from "./types";
import { MockTelephonyProvider } from "./mock";

export * from "./types";

/**
 * Provider selection point for calls/SMS. Real implementation (Phase 6)
 * will add a TwilioTelephonyProvider here; everything else in the app talks
 * only to the `TelephonyProvider` interface.
 */
export function getTelephonyProvider(): TelephonyProvider {
  const provider = process.env.TELEPHONY_PROVIDER ?? "mock";
  switch (provider) {
    case "mock":
    default:
      return new MockTelephonyProvider();
  }
}
