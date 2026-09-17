import Link from "next/link";
import {
  PhoneMissed,
  PhoneIncoming,
  ShieldAlert,
  MessageSquareText,
  MessageCircleReply,
  ClipboardCheck,
  CalendarCheck2,
  Link2,
  CircleDollarSign,
  FileClock,
  ReceiptText,
  Star,
  UserCheck,
  ArrowUpRight,
  Repeat2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ActivityEvent, ActivityEventType } from "@/types/domain";
import { Card } from "@/components/ui/Card";
import { formatCurrency, formatRelativeTime } from "@/lib/format";

const iconMap: Record<ActivityEventType, LucideIcon> = {
  call_missed: PhoneMissed,
  call_answered_by_ai: PhoneIncoming,
  call_answered_by_staff: PhoneIncoming,
  spam_blocked: ShieldAlert,
  ai_conversation_started: MessageSquareText,
  ai_message_sent: MessageSquareText,
  customer_replied: MessageCircleReply,
  lead_qualified: ClipboardCheck,
  appointment_booked: CalendarCheck2,
  deposit_link_sent: Link2,
  payment_received: CircleDollarSign,
  estimate_follow_up_sent: FileClock,
  invoice_reminder_sent: ReceiptText,
  review_requested: Star,
  review_completed: Star,
  escalated_to_human: UserCheck,
  previous_customer_reactivated: Repeat2,
};

export function ActivityFeed({
  events,
  biz,
  limit,
}: {
  events: ActivityEvent[];
  biz: string;
  limit?: number;
}) {
  const items = limit ? events.slice(0, limit) : events;

  return (
    <Card className="p-0">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <p className="text-sm font-semibold text-navy">Recent Activity</p>
        <Link
          href={`/dashboard/opportunities?biz=${biz}`}
          className="flex items-center gap-1 text-xs text-accent-blue hover:underline"
        >
          View all opportunities <ArrowUpRight size={12} />
        </Link>
      </div>
      <ul className="divide-y divide-line">
        {items.map((event) => {
          const Icon = iconMap[event.type];
          const content = (
            <div className="flex items-start gap-3 px-6 py-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-accent-blue">
                <Icon size={15} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-navy">{event.summary}</p>
                <p className="mt-0.5 text-xs text-slate-muted">
                  {formatRelativeTime(event.timestamp)}
                </p>
              </div>
              {event.amount !== undefined && (
                <span className="shrink-0 text-sm font-medium text-success">
                  {formatCurrency(event.amount)}
                </span>
              )}
            </div>
          );

          return (
            <li key={event.id}>
              {event.opportunityId ? (
                <Link
                  href={`/dashboard/opportunities/${event.opportunityId}?biz=${biz}`}
                  className="block transition-colors hover:bg-surface-alt"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
