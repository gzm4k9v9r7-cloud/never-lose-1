import { DashboardChrome } from "@/components/dashboard/DashboardChrome";
import { WorkflowSimulator } from "@/components/dashboard/WorkflowSimulator";
import { DEFAULT_DEMO_BUSINESS_ID } from "@/lib/demo";

export default async function WorkflowDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ biz?: string }>;
}) {
  const { biz: bizParam } = await searchParams;
  const biz = bizParam ?? DEFAULT_DEMO_BUSINESS_ID;

  return (
    <DashboardChrome activeSection="workflow" biz={biz} title="Workflow Demo">
      <p className="mb-6 max-w-2xl text-sm text-slate-muted">
        Step through exactly what happens when a call is missed — from the
        first ring to a booked, deposited job — the same way it would happen
        automatically for a real business.
      </p>
      <WorkflowSimulator />
    </DashboardChrome>
  );
}
