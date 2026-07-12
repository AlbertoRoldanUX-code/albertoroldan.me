export type ReferenceEmailSource = "justin_welsh";

export type ReferenceEmailInsert = {
  source: ReferenceEmailSource;
  resendEmailId: string;
  messageId: string | null;
  fromAddress: string;
  toAddresses: string[];
  subject: string | null;
  textBody: string | null;
  htmlBody: string | null;
  headers: Record<string, string> | null;
  receivedAt: string;
};
