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
    const response = await mailer.sendMail({
      to: ["nalbert2012@ya.ru"],
      subject: "test",
      replyTo: "user_3@testsomesthing.com",
      from: "user_3@testsomesthing.com",
      body: "<b>Hello world?</b>",
    });

    console.log("response");
    console.log(response);
  } catch (err) {
    console.log("error occured");
    console.log(err);
  }
};

main();
