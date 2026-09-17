import type {
  TelephonyProvider,
  SendSmsResult,
  SpamClassificationInput,
  SpamClassificationResult,
} from "./types";

/** Known patterns used only to make demo data look realistic — not real spam intelligence. */
const SPAM_AREA_CODE_HINTS = ["000", "911", "555"];

export class MockTelephonyProvider implements TelephonyProvider {
  readonly name = "mock";

  async sendSms(): Promise<SendSmsResult> {
    return {
      id: `mock_sms_${Math.random().toString(36).slice(2, 10)}`,
      status: "delivered",
    };
  }

  async classifyCallForSpam(
    input: SpamClassificationInput
  ): Promise<SpamClassificationResult> {
    const areaCode = input.fromNumber.replace(/\D/g, "").slice(1, 4);
    const veryShort = input.durationSeconds <= 2;

    if (SPAM_AREA_CODE_HINTS.includes(areaCode) && veryShort) {
      return {
        status: "confirmed_spam",
        confidence: 0.97,
        reason: "Known robocall pattern and near-zero call duration.",
      };
    }
    if (veryShort) {
      return {
        status: "likely_spam",
        confidence: 0.68,
        reason: "Call duration too short to be a real inquiry.",
      };
    }
    return {
      status: "clean",
      confidence: 0.95,
      reason: "No spam signals detected.",
    };
  }
}
