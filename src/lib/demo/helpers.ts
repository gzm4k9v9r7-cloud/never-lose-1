/** Small time helpers so demo datasets can be expressed as "N minutes/hours/days before now" and still read as live, realistic activity whenever the demo is viewed. */

export function minutesBefore(now: Date, minutes: number): string {
  return new Date(now.getTime() - minutes * 60_000).toISOString();
}

export function hoursBefore(now: Date, hours: number): string {
  return minutesBefore(now, hours * 60);
}

export function daysBefore(now: Date, days: number, hour = 9, minute = 0): string {
  const d = new Date(now);
  d.setDate(d.getDate() - days);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

/**
 * Per-namespace counters for generating demo record ids. Each business
 * dataset builder must call `resetDemoIds(namespace)` before constructing
 * its records so the exact same sequence of ids comes out every time
 * `getDemoDataset()` is called — otherwise a link generated on one page
 * (e.g. the opportunities list) would point at an id that no longer exists
 * by the time the linked page (the opportunity detail view) rebuilds its
 * own dataset and looks it up.
 */
const counters: Record<string, number> = {};

export function resetDemoIds(namespace: string): void {
  counters[namespace] = 0;
}

export function demoId(namespace: string, prefix: string): string {
  counters[namespace] = (counters[namespace] ?? 0) + 1;
  return `${namespace}_${prefix}_${counters[namespace].toString(36).padStart(4, "0")}`;
}

/**
 * Deterministic pseudo-random generator (mulberry32) so demo chart series
 * look organic but never change between renders/deployments for the same
 * seed — this keeps the "realistic demo data" stable and reviewable rather
 * than reshuffling every page load.
 */
export function seededRandom(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildDailyLabel(now: Date, daysAgo: number): string {
  const d = new Date(now);
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
