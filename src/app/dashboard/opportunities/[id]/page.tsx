import Link from "next/link";
import { ArrowLeft, Phone, Mail, Calendar, CreditCard } from "lucide-react";
import { DashboardChrome } from "@/components/dashboard/DashboardChrome";
import { ConversationThread } from "@/components/dashboard/ConversationThread";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getDemoDataset, DEFAULT_DEMO_BUSINESS_ID } from "@/lib/demo";
import { statusLabels, statusTones, sourceLabels } from "@/lib/status";
import { formatCurrency, formatRelativeTime } from "@/lib/format";

export default async function OpportunityDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ biz?: string }>;
}) {
  const { id } = await params;
  const { biz: bizParam } = await searchParams;
  const biz = bizParam ?? DEFAULT_DEMO_BUSINESS_ID;
  const data = getDemoDataset(biz);
  const opportunity = data.opportunities.find((o) => o.id === id);

  if (!opportunity) {
    return (
      <DashboardChrome activeSection="opportunities" biz={biz} title="Opportunity not found">
        <Card>
          <p className="text-sm text-slate-body">
            We couldn&rsquo;t find that opportunity in this demo dataset.
          </p>
          <Link href={`/dashboard/opportunities?biz=${biz}`} className="mt-4 inline-block text-sm text-accent-blue hover:underline">
            ← Back to Opportunities
          </Link>
        </Card>
      </DashboardChrome>
    );
  }

  const relatedActivity = data.activity.filter((e) => e.opportunityId === opportunity.id);

  return (
    <DashboardChrome activeSection="opportunities" biz={biz} title={opportunity.contact.name}>
      <Link
        href={`/dashboard/opportunities?biz=${biz}`}
        className="mb-4 flex items-center gap-1 text-sm text-slate-muted hover:text-navy"
      >
        <ArrowLeft size={14} /> Back to Opportunities
      </Link>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-navy">Conversation</p>
            <Badge tone={statusTones[opportunity.status]}>
              {statusLabels[opportunity.status]}
            </Badge>
          </div>
          <ConversationThread messages={opportunity.messages} />
        </Card>

        <div className="space-y-6">
          <Card>
            <p className="mb-4 text-sm font-semibold text-navy">Contact</p>
            <div className="space-y-3 text-sm">
              <p className="text-navy">{opportunity.contact.name}</p>
              <div className="flex items-center gap-2 text-slate-body">
                <Phone size={14} /> {opportunity.contact.phone}
              </div>
              {opportunity.contact.email && (
                <div className="flex items-center gap-2 text-slate-body">
                  <Mail size={14} /> {opportunity.contact.email}
                </div>
              )}
              <p className="text-xs text-slate-muted">
                Source: {sourceLabels[opportunity.source]}
                {opportunity.contact.isPreviousCustomer && " · Previous customer"}
              </p>
            </div>
          </Card>

          {opportunity.appointment && (
            <Card>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-navy">
                <Calendar size={15} /> Appointment
              </p>
              <p className="text-sm text-navy">{opportunity.appointment.serviceName}</p>
              <p className="mt-1 text-sm text-slate-body">
                {new Date(opportunity.appointment.scheduledFor).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
              <Badge tone="neutral" className="mt-3">
                {opportunity.appointment.status}
              </Badge>
            </Card>
          )}

          {(opportunity.payments.length > 0 || opportunity.confirmedRevenue > 0 || opportunity.estimatedValue > 0) && (
            <Card>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-navy">
                <CreditCard size={15} /> Payments
              </p>
              {opportunity.payments.map((payment) => (
                <div key={payment.id} className="mb-2 flex items-center justify-between text-sm">
                  <span className="capitalize text-slate-body">{payment.kind.replace("_", " ")}</span>
                  <span className="font-medium text-success">{formatCurrency(payment.amount)}</span>
                </div>
              ))}
              {opportunity.estimatedValue > 0 && (
                <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-sm">
                  <span className="text-slate-body">Potential remaining value</span>
                  <span className="font-medium text-accent-blue">
                    {formatCurrency(opportunity.estimatedValue)}
                  </span>
                </div>
              )}
            </Card>
          )}

          {opportunity.notes && (
            <Card>
              <p className="mb-2 text-sm font-semibold text-navy">Notes</p>
              <p className="text-sm text-slate-body">{opportunity.notes}</p>
            </Card>
          )}

          <Card>
            <p className="mb-4 text-sm font-semibold text-navy">Activity History</p>
            <ul className="space-y-3">
              {relatedActivity.map((event) => (
                <li key={event.id} className="text-sm">
                  <p className="text-navy">{event.summary}</p>
                  <p className="text-xs text-slate-muted">{formatRelativeTime(event.timestamp)}</p>
                </li>
              ))}
              {relatedActivity.length === 0 && (
                <p className="text-sm text-slate-muted">No activity recorded yet.</p>
              )}
            </ul>
          </Card>
        </div>
      </div>
    </DashboardChrome>
  );
}
