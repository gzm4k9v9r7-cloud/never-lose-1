import type { LeadStatus, OpportunitySource } from "@/types/domain";

export const statusLabels: Record<LeadStatus, string> = {
  new: "New",
  ai_responding: "AI Responding",
  qualified: "Qualified",
  appointment_scheduled: "Appointment Scheduled",
  booked: "Booked",
  deposit_paid: "Deposit Paid",
  won: "Won",
  lost: "Lost",
  escalated_to_human: "Escalated to Staff",
};

export const statusTones: Record<LeadStatus, "accent" | "success" | "neutral" | "warning" | "danger"> = {
  new: "neutral",
  ai_responding: "accent",
  qualified: "accent",
  appointment_scheduled: "accent",
  booked: "success",
  deposit_paid: "success",
  won: "success",
  lost: "danger",
  escalated_to_human: "warning",
};

export const sourceLabels: Record<OpportunitySource, string> = {
  missed_call: "Missed Call",
  answered_call: "Answered Call",
  web_form: "Web Form",
  sms: "Text Message",
  previous_customer_reactivation: "Reactivation",
  estimate_follow_up: "Estimate Follow-Up",
};
