import type {
  EmailProvider,
  EmailSubscribePayload,
  EmailSubscribeResult,
} from "../types";

/**
 * Example server-side provider for Beehiiv.
 * Set BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID in your environment.
 */
export class BeehiivEmailProvider implements EmailProvider {
  async subscribe(
    payload: EmailSubscribePayload,
  ): Promise<EmailSubscribeResult> {
    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      throw new Error("Beehiiv credentials are not configured.");
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          reactivate_existing: true,
          utm_source: "albertoroldan",
          utm_medium: "lead-magnet",
          utm_campaign: payload.leadMagnetSlug,
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
