import {
  MailerAdapter,
  SendMailReturnValue,
  SendMailStatus,
  SendParams,
} from "../mailer-adapter";
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

  sendMail(params: SendParams): Promise<SendMailReturnValue> {
    return new Promise((resolve, reject) => {
      this._mailer.sendMail(params, (err, info) => {
        if (err) {
          reject({
            status: SendMailStatus.FAILURE,
          });
        } else {
          resolve({
            status: SendMailStatus.SUCCESS,
          });
        }
      });
    });
  }
}
