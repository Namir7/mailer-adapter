import { Mailer } from "../src/mailer";
import { SmtpDriver } from "../src/providers/smtp.provider";
import * as dotenv from "dotenv";
dotenv.config();

export const main = async () => {
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

  try {
    await mailer.sendMail({
      to: ["reciever@mail.com"],
      subject: "test",
      replyTo: "reply@mail.com",
      from: "sender@mail.com",
      body: "<b>Hello world?</b>",
    });
  } catch (e) {
    console.log("error occured");
    console.log(e);
  }
};

main();
