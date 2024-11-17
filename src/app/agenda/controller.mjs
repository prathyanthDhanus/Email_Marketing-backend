import agenda from "./ajendaConfig.mjs";
import { sendEmail } from "../../utils/nodeMailer.mjs";

agenda.define("send scheduled email", async (job) => {
    const { email, subject, emailBody } = job.attrs.data;
  
    try {
      const isEmailSent = await sendEmail(email, subject, emailBody);
  
      if (isEmailSent) {
        console.log(`Email successfully sent to ${email}`);
      } else {
        console.error(`Failed to send email to ${email}`);
      }
    } catch (error) {
      console.error("Error in sending scheduled email:", error);
    }
  });