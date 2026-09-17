import type { CalendarProvider } from "./types";
import { MockCalendarProvider } from "./mock";

export * from "./types";

/**
 * Provider selection point for scheduling. Real implementation (Phase 7)
 * will add a GoogleCalendarProvider here.
 */
export function getCalendarProvider(): CalendarProvider {
  const provider = process.env.CALENDAR_PROVIDER ?? "mock";
  switch (provider) {
    case "mock":
    default:
      return new MockCalendarProvider();
  }
}
