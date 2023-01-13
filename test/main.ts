import { Mailer } from "../src/mailer";
import { SmtpDriver } from "../src/providers/smtp.provider";

export const main = () => {
  const HOST = process.env.MAIL_SMTP_HOST!;
  const PORT = Number(process.env.MAIL_SMTP_PORT);
  const USERNAME = process.env.MAIL_SMTP_USERNAME!;
  const PASSWORD = process.env.MAIL_SMTP_PASSWORD!;

  const smtpDriver = new SmtpDriver({
    host: HOST,
    port: PORT,
    mailbox: {
      username: USERNAME,
      password: PASSWORD,
    },
  });

  const mailer = new Mailer(smtpDriver);
};

main();
