import {
  MailerAdapter,
  SendMailReturnValue,
  SendParams,
} from "./mailer-adapter";

export class Mailer {
  constructor(private driver: MailerAdapter) {}

  async sendMail(params: SendParams): Promise<SendMailReturnValue> {
    return this.driver.sendMail(params);
  }
}
