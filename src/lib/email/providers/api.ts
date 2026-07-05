import type {
  EmailProvider,
  EmailSubscribePayload,
  EmailSubscribeResult,
} from "../types";

export class ApiEmailProvider implements EmailProvider {
  async subscribe(
    payload: EmailSubscribePayload,
  ): Promise<EmailSubscribeResult> {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as EmailSubscribeResult;

    if (!response.ok) {
      return {
        success: false,
        message: result.message ?? "Algo salió mal. Inténtalo de nuevo.",
      };
    }

    return result;
  }
}
