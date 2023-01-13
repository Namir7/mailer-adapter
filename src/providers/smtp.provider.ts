import { MailerAdapter, SendParams } from "../mailer-adapter";
import { createTransport, Transporter } from "nodemailer";

type Options = {
  host: string;
  port: number;
  mailbox: {
    username: string;
    password: string;
  };
};

export class SmtpDriver implements MailerAdapter {
  private _mailer: Transporter;

  constructor({ host, port, mailbox }: Options) {
    this._mailer = createTransport({
      // https://nodemailer.com/about/
      host,
      port,
      auth: {
        user: mailbox.username,
        pass: mailbox.password,
      },
      secure: false,
    });
  }

  async sendMail(params: SendParams): Promise<void> {
    this._mailer.sendMail(params);
  }
}
