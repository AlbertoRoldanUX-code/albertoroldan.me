import type {
  EmailProvider,
  EmailSubscribePayload,
  EmailSubscribeResult,
} from "../types";

/**
 * Example server-side provider for ConvertKit (Kit).
 * Set CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID in your environment.
 */
export class ConvertKitEmailProvider implements EmailProvider {
  async subscribe(
    payload: EmailSubscribePayload,
  ): Promise<EmailSubscribeResult> {
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (!apiKey || !formId) {
      throw new Error("ConvertKit credentials are not configured.");
    }

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email: payload.email,
          tags: [payload.leadMagnetSlug],
        }),
      },
    );

    if (!response.ok) {
      return {
        success: false,
        message: "No se pudo completar la suscripción. Inténtalo de nuevo.",
      };
    }

    return {
      success: true,
      message: "Revisa tu bandeja de entrada para la guía.",
    };
  }
}
