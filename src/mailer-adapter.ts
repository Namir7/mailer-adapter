export type SendParams = {
  to: string[],
  from: string,
  replyTo: string,
  subject: string,
  body: string
}

export abstract class MailerAdapter {
  abstract sendMail(params: SendParams): void | Promise<void>;
}
