export type SendParams = {
  to: string[];
  from: string;
  replyTo: string;
  subject: string;
  body: string;
};

export enum SendMailStatus {
  SUCCESS = "success",
  FAILURE = "failure",
}

export type SendMailReturnValue = {
  status: SendMailStatus;
};

export abstract class MailerAdapter {
  abstract sendMail(
    params: SendParams
  ): Promise<SendMailReturnValue> | SendMailReturnValue;
}
