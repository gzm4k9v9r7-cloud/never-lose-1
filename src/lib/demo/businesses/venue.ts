import type { DemoDataset } from "../types";
import type { Opportunity, ActivityEvent } from "@/types/domain";
import {
  minutesBefore,
  hoursBefore,
  daysBefore,
  demoId,
  resetDemoIds,
  seededRandom,
  buildDailyLabel,
} from "../helpers";

export function buildVenueDataset(now: Date): DemoDataset {
  const businessId = "biz_grand_oak_estate";
  const businessName = "The Grand Oak Estate";
  resetDemoIds(businessId);

  const opportunities: Opportunity[] = [
    {
      id: demoId(businessId, "opp"),
      businessId,
      source: "missed_call",
      status: "appointment_scheduled",
      createdAt: hoursBefore(now, 2),
      updatedAt: hoursBefore(now, 1.5),
      callId: null,
      contact: { id: demoId(businessId, "contact"), businessId, name: "Maria Gonzalez", phone: "(305) 555-0122", email: "maria.g@example.com", isPreviousCustomer: false, language: "es" },
      messages: [
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Hi! Sorry we missed your call to The Grand Oak Estate. How can we help?", timestamp: hoursBefore(now, 2) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "I'm looking for a venue for my daughter's quinceañera next June", timestamp: hoursBefore(now, 1.9) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Congratulations to her! What date in June are you considering, and about how many guests?", timestamp: hoursBefore(now, 1.85) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "June 14th, around 120 guests", timestamp: hoursBefore(now, 1.8) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "That's a great fit for our Garden Pavilion. Would you like to schedule a tour?", timestamp: hoursBefore(now, 1.7) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "Yes, that would be wonderful", timestamp: hoursBefore(now, 1.6) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "You're booked for a tour this Saturday at 11:00 AM!", timestamp: hoursBefore(now, 1.5) },
      ],
      appointment: { id: demoId(businessId, "appt"), opportunityId: "", businessId, serviceName: "Venue tour — Garden Pavilion", scheduledFor: daysBefore(now, -4, 11, 0), status: "scheduled", bookedVia: "ai_auto_booked" },
      payments: [],
      confirmedRevenue: 0,
      estimatedValue: 9500,
      notes: null,
    },
    {
      id: demoId(businessId, "opp"),
      businessId,
      source: "web_form",
      status: "deposit_paid",
      createdAt: daysBefore(now, 5, 14, 0),
      updatedAt: daysBefore(now, 1, 10, 0),
      callId: null,
      contact: { id: demoId(businessId, "contact"), businessId, name: "Jonathan Pierce", phone: "(305) 555-0144", email: "jon.pierce@example.com", isPreviousCustomer: false, language: "en" },
      messages: [
        { id: demoId(businessId, "msg"), role: "customer", channel: "web", text: "Interested in booking for our wedding next September, ~150 guests", timestamp: daysBefore(now, 5, 14, 0) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Congratulations! September has a few dates open on the Grand Ballroom. Would you like to schedule a tour?", timestamp: daysBefore(now, 5, 14, 20) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "Yes, and if we like it we're ready to book", timestamp: daysBefore(now, 4, 9, 0) },
        { id: demoId(businessId, "msg"), role: "staff", channel: "voice", text: "Tour completed, couple booked the Grand Ballroom and paid deposit.", timestamp: daysBefore(now, 1, 10, 0) },
      ],
      appointment: { id: demoId(businessId, "appt"), opportunityId: "", businessId, serviceName: "Wedding — Grand Ballroom", scheduledFor: daysBefore(now, -300, 17, 0), status: "scheduled", bookedVia: "staff_booked" },
      payments: [{ id: demoId(businessId, "pay"), opportunityId: "", businessId, kind: "deposit", amount: 2500, status: "paid", createdAt: daysBefore(now, 1, 10, 0), paidAt: daysBefore(now, 1, 10, 0) }],
      confirmedRevenue: 2500,
      estimatedValue: 14000,
      notes: null,
    },
    {
      id: demoId(businessId, "opp"),
      businessId,
      source: "missed_call",
      status: "escalated_to_human",
      createdAt: hoursBefore(now, 6),
      updatedAt: hoursBefore(now, 5.8),
      callId: null,
      contact: { id: demoId(businessId, "contact"), businessId, name: "Rachel Simmons", phone: "(305) 555-0177", email: null, isPreviousCustomer: false, language: "en" },
      messages: [
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Hi! Sorry we missed your call to The Grand Oak Estate. How can we help?", timestamp: hoursBefore(now, 6) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "What's your starting price for a corporate holiday party for 80 people?", timestamp: hoursBefore(now, 5.9) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Great question — I want to make sure you get an accurate number, so I've looped in our events team to follow up with pricing shortly.", timestamp: hoursBefore(now, 5.8) },
      ],
      appointment: null,
      payments: [],
      confirmedRevenue: 0,
      estimatedValue: 7500,
      notes: "Escalated: starting-price permission not enabled for this business.",
    },
    {
      id: demoId(businessId, "opp"),
      businessId,
      source: "sms",
      status: "qualified",
      createdAt: daysBefore(now, 1, 12, 0),
      updatedAt: hoursBefore(now, 9),
      callId: null,
      contact: { id: demoId(businessId, "contact"), businessId, name: "Devon Brady", phone: "(305) 555-0133", email: null, isPreviousCustomer: false, language: "en" },
      messages: [
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "Do you host baby showers? Looking at April, ~40 guests", timestamp: daysBefore(now, 1, 12, 0) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "We do! Our Courtyard Room is perfect for that size. Want me to check availability for April?", timestamp: hoursBefore(now, 9) },
      ],
      appointment: null,
      payments: [],
      confirmedRevenue: 0,
      estimatedValue: 2200,
      notes: null,
    },
    {
      id: demoId(businessId, "opp"),
      businessId,
      source: "previous_customer_reactivation",
      status: "won",
      createdAt: daysBefore(now, 10, 9, 0),
      updatedAt: daysBefore(now, 2, 15, 0),
      callId: null,
      contact: { id: demoId(businessId, "contact"), businessId, name: "The Alvarez Family", phone: "(305) 555-0199", email: null, isPreviousCustomer: true, language: "es" },
      messages: [
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Hi! It's been a year since your event with us at The Grand Oak Estate — planning another celebration this year?", timestamp: daysBefore(now, 10, 9, 0) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "Actually yes! Anniversary party in the spring", timestamp: daysBefore(now, 9, 18, 0) },
        { id: demoId(businessId, "msg"), role: "staff", channel: "voice", text: "Booked and fully paid.", timestamp: daysBefore(now, 2, 15, 0) },
      ],
      appointment: { id: demoId(businessId, "appt"), opportunityId: "", businessId, serviceName: "Anniversary party — Courtyard Room", scheduledFor: daysBefore(now, -60, 18, 0), status: "scheduled", bookedVia: "staff_booked" },
      payments: [{ id: demoId(businessId, "pay"), opportunityId: "", businessId, kind: "full_payment", amount: 4200, status: "paid", createdAt: daysBefore(now, 2, 15, 0), paidAt: daysBefore(now, 2, 15, 0) }],
      confirmedRevenue: 4200,
      estimatedValue: 0,
      notes: null,
    },
    {
      id: demoId(businessId, "opp"),
      businessId,
      source: "missed_call",
      status: "ai_responding",
      createdAt: minutesBefore(now, 15),
      updatedAt: minutesBefore(now, 3),
      callId: null,
      contact: { id: demoId(businessId, "contact"), businessId, name: "Sophia Turner", phone: "(305) 555-0166", email: null, isPreviousCustomer: false, language: "en" },
      messages: [
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "Hi! Sorry we missed your call to The Grand Oak Estate. How can we help?", timestamp: minutesBefore(now, 15) },
        { id: demoId(businessId, "msg"), role: "customer", channel: "sms", text: "Hi! Looking for a graduation party space for about 60 people in May", timestamp: minutesBefore(now, 10) },
        { id: demoId(businessId, "msg"), role: "ai", channel: "sms", text: "We'd love to host that! Do you have a specific date in May in mind?", timestamp: minutesBefore(now, 3) },
      ],
      appointment: null,
      payments: [],
      confirmedRevenue: 0,
      estimatedValue: 3800,
      notes: null,
    },
  ];

  const activity: ActivityEvent[] = [
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[5].id, type: "call_missed", timestamp: minutesBefore(now, 15), summary: "Missed call received from (305) 555-0166" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[5].id, type: "ai_conversation_started", timestamp: minutesBefore(now, 15), summary: "AI conversation started" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[0].id, type: "appointment_booked", timestamp: hoursBefore(now, 1.5), summary: "Tour booked — Maria Gonzalez, quinceañera inquiry" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[2].id, type: "escalated_to_human", timestamp: hoursBefore(now, 5.8), summary: "Escalated to events team — pricing request outside approved scope" },
    { id: demoId(businessId, "act"), businessId, opportunityId: null, type: "spam_blocked", timestamp: hoursBefore(now, 4), summary: "Spam call blocked from (844) 555-0100" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[3].id, type: "customer_replied", timestamp: hoursBefore(now, 9), summary: "Devon Brady replied about April baby shower" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[4].id, type: "payment_received", timestamp: daysBefore(now, 2, 15, 0), summary: "$4,200 payment received — Alvarez Family anniversary party", amount: 4200 },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[4].id, type: "review_requested", timestamp: daysBefore(now, 2, 15, 30), summary: "Review request sent to the Alvarez Family" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[1].id, type: "deposit_link_sent", timestamp: daysBefore(now, 1, 9, 45), summary: "Deposit link sent — Jonathan Pierce wedding" },
    { id: demoId(businessId, "act"), businessId, opportunityId: opportunities[1].id, type: "payment_received", timestamp: daysBefore(now, 1, 10, 0), summary: "$2,500 deposit paid — Jonathan Pierce wedding", amount: 2500 },
    { id: demoId(businessId, "act"), businessId, opportunityId: null, type: "spam_blocked", timestamp: daysBefore(now, 1, 8, 0), summary: "Spam call blocked from (900) 555-0188" },
    { id: demoId(businessId, "act"), businessId, opportunityId: null, type: "previous_customer_reactivated", timestamp: daysBefore(now, 9, 18, 0), summary: "Reactivation message sent to a previous customer" },
  ];
  activity.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const rand = seededRandom(7);
  const dailySeries = Array.from({ length: 14 }).map((_, i) => {
    const daysAgo = 13 - i;
    const weekday = new Date(now.getTime() - daysAgo * 86_400_000).getDay();
    const weekendBoost = weekday === 0 || weekday === 6 ? 1.8 : 1;
    return {
      date: buildDailyLabel(now, daysAgo),
      revenueRecovered: Math.round(rand() * 2600 * weekendBoost + 200),
      potentialRevenue: Math.round(rand() * 4200 * weekendBoost + 400),
      callsReceived: Math.round(rand() * 6 * weekendBoost + 2),
      callsRecovered: Math.round(rand() * 4 * weekendBoost + 1),
      spamBlocked: Math.round(rand() * 3 + 1),
    };
  });

  return {
    businessId,
    businessName,
    industryId: "event-venues",
    planId: "pro",
    metrics: {
      revenueRecovered: 34800,
      potentialRevenue: 52000,
      missedCallsRecovered: 18,
      appointmentsBooked: 11,
      estimatesRecovered: 3,
      previousCustomersReactivated: 4,
      overdueInvoicesCollected: 0,
      spamCallsBlocked: 22,
      reviewsGenerated: 6,
      trends: {
        revenueRecovered: 24,
        potentialRevenue: 31,
        missedCallsRecovered: 8,
        appointmentsBooked: 15,
        estimatesRecovered: 0,
        previousCustomersReactivated: 33,
        overdueInvoicesCollected: 0,
        spamCallsBlocked: -4,
        reviewsGenerated: 20,
      },
    },
    dailySeries,
    activity,
    opportunities,
  };
}
