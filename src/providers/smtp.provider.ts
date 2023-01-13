import { MailerAdapter, SendParams } from "../mailer-adapter";
import { createTransport, Transporter } from "nodemailer";

type SmtpDriverOptions = {
  host: string;
  port: number;
  mailbox: {
    username: string;
    password: string;
  };
};

export class SmtpDriver implements MailerAdapter {
  private _mailer: Transporter;

  constructor({ host, port, mailbox }: SmtpDriverOptions) {
    this._mailer = createTransport({
      // https://nodemailer.com/about/
      host,
      port,
      auth: {
        user: mailbox.username,
        pass: mailbox.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
      secure: true,
    });
  }

  async sendMail(params: SendParams): Promise<void> {
    this._mailer.sendMail(params);
  }
}
