import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

export const sendEmail = functions.https.onRequest(async (request, response) => {
  functions.logger.info('Received request for sendEmail()');
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().email.user,
      pass: functions.config().email.password,
    },
  });
  let info = await transporter.sendMail({
    from: request.body.from,
    to: 'ben7barron@gmail.com',
    subject: request.body.subject,
    text: request.body.text,
  });
  functions.logger.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  functions.logger.info('Message sent: %s', info.messageId);
  response.status(200).json({ message: 'Email has been sent' });
});
