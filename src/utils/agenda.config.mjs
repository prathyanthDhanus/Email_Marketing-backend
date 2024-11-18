import Agenda from 'agenda';
import { sendEmail } from './nodeMailer.mjs';

const agenda = new Agenda({ db: { address: process.env.MONGODB_URL} });

agenda.define('send scheduled email', async (job) => {
  const { email, subject, emailBody } = job.attrs.data;
  await sendEmail(email, subject, emailBody);
});

(async () => {
  await agenda.start();
  console.log("Agenda worker started.");
})();
export default agenda;