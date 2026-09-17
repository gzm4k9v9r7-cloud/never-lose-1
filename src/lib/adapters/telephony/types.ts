/**
 * TELEPHONY PROVIDER ADAPTER — calls and SMS. Real implementation will be
 * Twilio; this interface lets that be swapped without touching the rest of
 * the app.
 */

import type { SpamStatus } from "@/types/domain";

export interface SendSmsInput {
  to: string;
  from: string;
  body: string;
}

export interface SendSmsResult {
  id: string;
  status: "queued" | "sent" | "delivered" | "failed";
}

export interface SpamClassificationInput {
  fromNumber: string;
  toNumber: string;
  durationSeconds: number;
}

export interface SpamClassificationResult {
  status: SpamStatus;
  confidence: number; // 0-1
  reason: string;
}

export interface TelephonyProvider {
  readonly name: string;
  sendSms(input: SendSmsInput): Promise<SendSmsResult>;
  classifyCallForSpam(
    input: SpamClassificationInput
  ): Promise<SpamClassificationResult>;
}
