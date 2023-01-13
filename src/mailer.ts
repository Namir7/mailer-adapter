import { MailerAdapter, SendParams } from "./mailer-adapter";

export class Mailer {
  constructor(private driver: MailerAdapter) {}

  sendMail(params: SendParams): void | Promise<void> {
    this.driver.sendMail(params);
  }
}
