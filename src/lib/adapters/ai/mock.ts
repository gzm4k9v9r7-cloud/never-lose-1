import type {
  AIProvider,
  AIResponseInput,
  AIResponseResult,
} from "./types";

/**
 * Deterministic, rule-based stand-in for a real AI conversation engine.
 * It never calls an external API and never invents information — it only
 * ever uses what's in `businessContext` (permissions, approved pricing,
 * FAQs, services). This is what powers the interactive demo dashboard
 * without needing an AI provider key configured yet.
 */
export class MockAIProvider implements AIProvider {
  readonly name = "mock";

  async generateResponse(input: AIResponseInput): Promise<AIResponseResult> {
    const { businessContext, history, customerMessage } = input;
    const { permissions, qualificationQuestions, businessName } =
      businessContext;

    const askedQuestions = history.filter((m) => m.role === "ai").length;

    const mentionsPrice = /price|cost|how much|\$/i.test(customerMessage);
    if (mentionsPrice) {
      if (permissions.canProvideStartingPrices && businessContext.approvedPricing.length > 0) {
        const item = businessContext.approvedPricing[0];
        return {
          reply: `Great question! ${item.service} typically starts at $${item.startingPrice}. Every job is a little different, so a final number depends on the details — want to go ahead and set up a time for us to take a look?`,
          action: { type: "offer_appointment_slots" },
          escalate: false,
        };
      }
      if (permissions.canProvidePriceRanges && businessContext.approvedPricing.length > 0) {
        const item = businessContext.approvedPricing[0];
        return {
          reply: `Most jobs like this run between $${item.priceRangeLow}–$${item.priceRangeHigh}, depending on scope. I can have someone confirm an exact number — would you like to schedule a time?`,
          action: { type: "offer_appointment_slots" },
          escalate: false,
        };
      }
      return {
        reply: `That's a great question — pricing depends on a few details, so I'll have someone from ${businessName} follow up with an exact number shortly.`,
        action: { type: "none" },
        escalate: true,
        escalationReason: "Customer asked about pricing without approved pricing permission.",
      };
    }

    if (askedQuestions < qualificationQuestions.length) {
      return {
        reply: qualificationQuestions[askedQuestions],
        action: { type: "ask_question", question: qualificationQuestions[askedQuestions] },
        escalate: false,
      };
    }

    if (permissions.canBookAppointments) {
      return {
        reply: `Thanks — that's everything I need! Here are the next available times. Which works best for you?`,
        action: { type: "offer_appointment_slots" },
        escalate: false,
      };
    }

    return {
      reply: `Thanks for the details! I've passed this along to our team at ${businessName} and someone will reach out shortly to schedule.`,
      action: { type: "none" },
      escalate: true,
      escalationReason: "Booking permission not enabled — handing off to staff.",
    };
  }
}
