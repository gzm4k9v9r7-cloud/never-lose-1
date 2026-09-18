import { cache } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { getOrCreateBusiness, type Business } from "./business";

/**
 * The layout and the page both need the current user's business record on
 * every /app request. Without this, each one independently created its own
 * Supabase client and ran its own get-or-create-business check, racing each
 * other on a brand-new account: both would find no row yet and both try to
 * insert one, and the loser crashed on the unique constraint.
 *
 * React's cache() dedupes calls with the same arguments during a single
 * request/render pass, so wrapping this ensures the whole "get the session,
 * ensure the business row exists" sequence only ever actually runs once per
 * request no matter how many Server Components call it.
 */
export const getSession = cache(async (): Promise<{
  user: User;
  business: Business;
} | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const business = await getOrCreateBusiness(supabase, user);
  return { user, business };
});
