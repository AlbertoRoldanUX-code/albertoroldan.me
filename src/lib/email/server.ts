import { NoopEmailProvider } from "./providers/noop";
import type { EmailProvider } from "./types";

/**
 * Server-side email provider selection.
 * Swap the implementation here when you're ready to go live.
 */
export function createServerEmailProvider(): EmailProvider {
  // return new BeehiivEmailProvider();
  // return new ConvertKitEmailProvider();
  return new NoopEmailProvider();
}
