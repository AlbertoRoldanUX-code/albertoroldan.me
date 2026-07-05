import type { EmailProvider } from "./types";
import { ApiEmailProvider } from "./providers/api";

let provider: EmailProvider = new ApiEmailProvider();

export function getEmailProvider(): EmailProvider {
  return provider;
}

export function setEmailProvider(nextProvider: EmailProvider): void {
  provider = nextProvider;
}

export type { EmailProvider, EmailSubscribePayload, EmailSubscribeResult } from "./types";
