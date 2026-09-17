import { DashboardChrome } from "@/components/dashboard/DashboardChrome";
import { PermissionsPanel } from "@/components/dashboard/PermissionsPanel";
import { getDemoDataset, DEFAULT_DEMO_BUSINESS_ID } from "@/lib/demo";
import { demoPermissions } from "@/lib/demo/permissions";

export default async function PermissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ biz?: string }>;
}) {
  const { biz: bizParam } = await searchParams;
  const biz = bizParam ?? DEFAULT_DEMO_BUSINESS_ID;
  const data = getDemoDataset(biz);
  const permissions = demoPermissions[biz] ?? demoPermissions[DEFAULT_DEMO_BUSINESS_ID];

  return (
    <DashboardChrome activeSection="permissions" biz={biz} title={`${data.businessName} — AI Permissions`}>
      <PermissionsPanel initialPermissions={permissions} />
    </DashboardChrome>
  );
}
