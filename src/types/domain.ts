/**
 * ============================================================================
 * CORE DOMAIN TYPES
 * ============================================================================
 * These mirror the Prisma schema (see /prisma/schema.prisma) and are the
 * shapes used throughout the demo data, adapters, and dashboard UI. Keeping
 * them in one file means the mock data generator and the real database layer
 * (Phase 2+) agree on the same contract.
 */

export type CallDirection = "inbound" | "outbound";

export type CallOutcome =
  | "answered_by_staff"
  | "missed"
  | "answered_by_ai"
  | "voicemail";

export type SpamStatus = "clean" | "likely_spam" | "confirmed_spam";

export type LeadStatus =
  | "new"
  | "ai_responding"
  | "qualified"
  | "appointment_scheduled"
  | "booked"
  | "deposit_paid"
  | "won"
  | "lost"
  | "escalated_to_human";

export type OpportunitySource =
  | "missed_call"
  | "answered_call"
  | "web_form"
  | "sms"
  | "previous_customer_reactivation"
  | "estimate_follow_up";

/**
 * Call Attribution Record — the audit trail for every phone call NeverLose
 * touches. This is what lets the dashboard truthfully say a dollar amount
 * was "recovered": every call is traceable end-to-end from ring to revenue.
 */
export interface CallAttribution {
  id: string;
  businessId: string;
  direction: CallDirection;
  fromNumber: string; // originating (caller) number, masked in UI where needed
  toNumber: string; // the business's NeverLose-tracked number
  startedAt: string; // ISO timestamp
  durationSeconds: number;
  outcome: CallOutcome;
  spamStatus: SpamStatus;
  spamConfidence: number; // 0-1
  /** What NeverLose did in response to this call, in order. */
  aiActionsTaken: string[];
  /** Links this call to the opportunity/lead it created or updated, if any. */
  opportunityId: string | null;
  recordingUrl: string | null; // mocked / null until real telephony is connected
}

export interface Contact {
  id: string;
  businessId: string;
  name: string;
  phone: string;
  email: string | null;
  isPreviousCustomer: boolean;
  language: "en" | "es" | "pt";
}

export interface ConversationMessage {
  id: string;
  role: "customer" | "ai" | "staff" | "system";
  channel: "sms" | "voice" | "web";
  text: string;
  timestamp: string; // ISO
}

export interface Appointment {
  id: string;
  opportunityId: string;
  businessId: string;
  serviceName: string;
  scheduledFor: string; // ISO
  status: "scheduled" | "completed" | "canceled" | "no_show";
  bookedVia: "ai_auto_booked" | "staff_booked";
}

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface Payment {
  id: string;
  opportunityId: string;
  businessId: string;
  kind: "deposit" | "full_payment" | "invoice_payment";
  amount: number;
  status: PaymentStatus;
  /**
   * Payments are processed directly into the business's own connected
   * payment account (Stripe Connect in the eventual real integration).
   * NeverLose never takes possession of customer funds — this field just
   * records the outcome for reporting.
   */
  createdAt: string;
  paidAt: string | null;
}

export interface Invoice {
  id: string;
  opportunityId: string | null;
  businessId: string;
  amount: number;
  status: "unpaid" | "paid" | "overdue" | "void";
  dueDate: string;
  remindersSent: number;
}

export interface Review {
  id: string;
  opportunityId: string;
  businessId: string;
  requestedAt: string;
  status: "requested" | "completed" | "declined";
  rating: number | null;
}

/**
 * An Opportunity is the thread that follows a potential customer from first
 * contact through to revenue: Incoming Lead -> Response -> Qualification ->
 * Booking -> Deposit/Payment -> Follow-Up -> Review -> Revenue.
 */
export interface Opportunity {
  id: string;
  businessId: string;
  contact: Contact;
  source: OpportunitySource;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
  callId: string | null;
  messages: ConversationMessage[];
  appointment: Appointment | null;
  payments: Payment[];
  /**
   * Confirmed revenue actually recorded (e.g. a paid deposit or invoice)
   * that is attributable to this recovered opportunity. This is what rolls
   * up into the dashboard's "Revenue Recovered" figure.
   */
  confirmedRevenue: number;
  /**
   * The estimated value of the job/booking if it has not yet resulted in a
   * confirmed payment (e.g. an appointment was booked but no deposit has
   * been collected yet). Rolls up into "Potential Revenue Recovered" and is
   * always shown separately from confirmed revenue so the dashboard never
   * implies money was collected when it wasn't.
   */
  estimatedValue: number;
  notes: string | null;
}

export type ActivityEventType =
  | "call_missed"
  | "call_answered_by_ai"
  | "call_answered_by_staff"
  | "spam_blocked"
  | "ai_conversation_started"
  | "ai_message_sent"
  | "customer_replied"
  | "lead_qualified"
  | "appointment_booked"
  | "deposit_link_sent"
  | "payment_received"
  | "estimate_follow_up_sent"
  | "invoice_reminder_sent"
  | "review_requested"
  | "review_completed"
  | "escalated_to_human"
  | "previous_customer_reactivated";

export interface ActivityEvent {
  id: string;
  businessId: string;
  opportunityId: string | null;
  type: ActivityEventType;
  timestamp: string;
  summary: string;
  amount?: number;
}

export interface AIPermissions {
  businessId: string;
  canAnswerCalls: boolean;
  canSendSms: boolean;
  canBookAppointments: boolean;
  canProvideStartingPrices: boolean;
  canProvidePriceRanges: boolean;
  canSendPaymentLinks: boolean;
  canFollowUpEstimates: boolean;
  canFollowUpInvoices: boolean;
  canContactPreviousCustomers: boolean;
  canRequestReviews: boolean;
  canEscalateToHuman: boolean;
}

export interface Business {
  id: string;
  name: string;
  industryId: string;
  planId: "starter" | "pro" | "business";
  timezone: string;
  languages: ("en" | "es" | "pt")[];
  phoneNumbers: string[];
  createdAt: string;
}
