import type { AIProvider } from "./types";
import { MockAIProvider } from "./mock";

export * from "./types";

/**
 * Provider selection point. Swapping AI vendors later means adding a new
 * class that implements `AIProvider` and changing the switch below — no
 * other file in the app references a specific AI vendor.
 *
 * `AI_PROVIDER` is unset in Phase 1, so this always resolves to the mock
 * provider. When a real provider (e.g. Claude) is connected in a later
 * phase, set AI_PROVIDER=claude and add the corresponding case.
 */
export function getAIProvider(): AIProvider {
  const provider = process.env.AI_PROVIDER ?? "mock";
  switch (provider) {
    case "mock":
    default:
      return new MockAIProvider();
  }
}
