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
type SessionResult =
  | { ok: true; user: User; business: Business }
  | { ok: false; error: string };

export const getSession = cache(async (): Promise<SessionResult | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  try {
    const business = await getOrCreateBusiness(supabase, user);
    return { ok: true, user, business };
  } catch (err) {
    // Surfaced directly on the page (temporary, while we're debugging this
    // account's setup) instead of a generic crash — see /app/page.tsx.
    const message = err && typeof err === "object" ? JSON.stringify(err) : String(err);
    return { ok: false, error: message };
  }
});
