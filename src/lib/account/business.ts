import type { SupabaseClient, User } from "@supabase/supabase-js";

export interface Business {
  id: string;
  owner_id: string;
  name: string;
  industry: string | null;
  created_at: string;
}

/**
 * Every signed-up account gets exactly one business row. Signup only stores
 * the company name/industry as auth user metadata (no session exists yet if
 * email confirmation is required), so the row itself is created lazily here
 * on first authenticated visit instead.
 */
export async function getOrCreateBusiness(
  supabase: SupabaseClient,
  user: User
): Promise<Business> {
  const { data: existing } = await supabase
    .from("businesses")
    .select("*")
    .eq("owner_id", user.id)
    .maybeSingle();

  if (existing) return existing as Business;

  const { data: created, error } = await supabase
    .from("businesses")
    .insert({
      owner_id: user.id,
      name: (user.user_metadata?.company_name as string | undefined) || "My Business",
      industry: (user.user_metadata?.industry as string | undefined) ?? null,
    })
    .select("*")
    .single();

  if (error) throw error;
  return created as Business;
}
