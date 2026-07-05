export interface EmailSubscribePayload {
  email: string;
  leadMagnetSlug: string;
  downloadUrl?: string;
}

export interface EmailSubscribeResult {
  success: boolean;
  message?: string;
}

export interface EmailProvider {
  subscribe(payload: EmailSubscribePayload): Promise<EmailSubscribeResult>;
}
