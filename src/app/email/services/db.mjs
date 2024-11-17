import AppError from "../../../utils/appError.mjs";
import { sendEmail } from "../../../utils/nodeMailer.mjs";
import Email from "../model/emailSchema.mjs";

//===================== create email ===================

export const createEmailDb = async (template, leadSourceId) => {
  // check if the email already exists for the given lead source and template
  const findEmail = await Email.findOne({
    leadSourceId: leadSourceId,
    template: template,
    isSend: false,
  });
  // if email already exists, throw an error
  if (findEmail.length === 0) {
    throw new AppError(
      "Email is already exist",
      "Field validation error:Email is already exist",
      409
    );
  }

  // create a new email
  const newEmail = await Email({
    leadSourceId: leadSourceId,
    template: template,
  });
  await newEmail.save();
  return newEmail;
};

//================= get emails  ===============

export const getEmailsDb = async (req, res) => {
  // fetch all emails from the database
  const findAllEmails = await Email.find();
  // check if no emails are found
  if (findAllEmails.length === 0) {
    throw new AppError(
      "No emails found",
      "Field validation error:No emails found",
      404
    );
  }
  return findAllEmails;
};

//================= update email ===============

export const updateEmailDb = async (template, templateId) => {
  const findEmail = await Email.findByIdAndUpdate(
    templateId,
    { template: template },
    { new: true }
  );
  if (!findEmail) {
    throw new AppError(
      "No emails found",
      "Field validation error:No emails found",
      404
    );
  }
  return findEmail;
};

//================= delete  email ===============

export const deleteEmailDb = async (templateId) => {
    const findEmail = await Email.findByIdAndDelete(
        templateId
      );
      if (!findEmail) {
        throw new AppError(
          "No emails found",
          "Field validation error:No emails found",
          404
        );
      }
      return findEmail;
};

//================= send email ==================

export const sendEmailDb = async(time,email,subject,emailBody,emailType)=>{

  if(emailType==="coldEmail"){
      // call the email sending function
      const isEmailSent = await sendEmail(email, subject, emailBody);

      if(!isEmailSent){
        throw new AppError(
            "Failed to send cold email",
            "Field validation error:No emails found",
            404
        )
      }
      return { email, subject, emailBody, status: "sent", time };
  }
  
}