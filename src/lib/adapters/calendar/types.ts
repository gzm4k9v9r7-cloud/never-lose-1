/**
 * CALENDAR PROVIDER ADAPTER — availability and booking. Real implementation
 * will be Google Calendar first; this interface lets other providers
 * (Outlook, industry-specific scheduling tools) be added later without
 * touching booking logic elsewhere in the app.
 */

export interface TimeSlot {
  start: string; // ISO
  end: string; // ISO
}

export interface BookAppointmentInput {
  businessId: string;
  opportunityId: string;
  serviceName: string;
  slot: TimeSlot;
}

export interface BookAppointmentResult {
  externalEventId: string;
  confirmed: boolean;
}

export interface CalendarProvider {
  readonly name: string;
  getAvailableSlots(businessId: string, daysAhead: number): Promise<TimeSlot[]>;
  bookAppointment(input: BookAppointmentInput): Promise<BookAppointmentResult>;
}
