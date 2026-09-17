import type {
  CalendarProvider,
  TimeSlot,
  BookAppointmentResult,
} from "./types";

export class MockCalendarProvider implements CalendarProvider {
  readonly name = "mock";

  async getAvailableSlots(
    businessId: string,
    daysAhead: number
  ): Promise<TimeSlot[]> {
    const slots: TimeSlot[] = [];
    const now = new Date();
    for (let d = 1; d <= daysAhead; d++) {
      const day = new Date(now);
      day.setDate(day.getDate() + d);
      for (const hour of [9, 11, 14, 16]) {
        const start = new Date(day);
        start.setHours(hour, 0, 0, 0);
        const end = new Date(start);
        end.setHours(hour + 1);
        slots.push({ start: start.toISOString(), end: end.toISOString() });
      }
    }
    return slots.slice(0, 8);
  }

  async bookAppointment(): Promise<BookAppointmentResult> {
    return {
      externalEventId: `mock_evt_${Math.random().toString(36).slice(2, 10)}`,
      confirmed: true,
    };
  }
}
