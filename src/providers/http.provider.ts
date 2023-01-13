import { MailerAdapter, SendParams } from "../mailer-adapter";
import request from "request";

type Options = {
  endpoint: string;
  key: string;
};

export class HttpDriver implements MailerAdapter {
  private _endpoint: string;
  private _key: string;

  constructor(options: Options) {
    this._endpoint = options.endpoint;
    this._key = options.key;
  }

  sendMail(params: SendParams): void | Promise<void> {
    return new Promise((resolve, reject) => {
      request(
        {
          method: "POST",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
            "X-Server-API-Key": this._key,
          },
          url: this._endpoint,
        },
        (err, _, body) => {
          resolve(body);
          reject(err);
        }
      );
    });
  }
}
