import type {
  EmailProvider,
  EmailSubscribePayload,
  EmailSubscribeResult,
} from "../types";

export class NoopEmailProvider implements EmailProvider {
  async subscribe(
    payload: EmailSubscribePayload,
  ): Promise<EmailSubscribeResult> {
    console.info("[NoopEmailProvider] subscribe:", payload.email);

    return {
      success: true,
      message: "Suscripción registrada. Conecta un proveedor real para producción.",
    };
  }
}
