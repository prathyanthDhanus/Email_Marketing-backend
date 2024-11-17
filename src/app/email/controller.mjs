import AppError from "../../utils/appError.mjs";
import {
  createEmailDb,
  getEmailsDb,
  updateEmailDb,
  deleteEmailDb,
  sendEmailDb
} from "./services/db.mjs";

//===================== create email ===================
export const createEmail = async (req, res) => {
  //destructring the data from the body
  const { template, leadSourceId } = req.body;

  if (!template || leadSourceId) {
    throw new AppError(
      " Template, and leadsource id are required",
      "Field validation error:Template, and leadsource id are required.Please select any template",
      403
    );
  }
  //save the email inside the db
  const saveEmail = await createEmailDb(template, leadSourceId);
  return res.status(201).json({
    status: "success",
    message: "Email created successfully",
    data: saveEmail,
  });
};

//================= get all email  ===============

export const getEmails = async (req, res) => {
  // call the database function to fetch all emails
  const findAllEmails = await getEmailsDb();
  return res.status(200).json({
    status: "success",
    message: "Emails fetched successfully",
    data: findAllEmails,
  });
};

//================= update email ===============

export const updateEmail = async (req, res) => {
  // extracting template and templateid from body
  const { template, templateId } = req.body;
  // if no lead source is found, throw an error
  if (!template && !templateId) {
    throw new AppError(
      " Template, and leadsource id are required",
      "Field validation error:Template, and leadsource id are required.Please select any template",
      403
    );
  }
  // call the database function to update email template
  const updtaedLeadSource = await updateEmailDb(template, templateId);
  return res.status(200).json({
    status: "success",
    message: "Email updated successfully",
    data: updtaedLeadSource,
  });
};

//================= delete email  ===============

export const deleteEmail = async (req, res) => {
  const { templateId } = req.params.id;
  const deletedLead = await deleteEmailDb(templateId);
  return res.status(200).json({
    status: "success",
    message: "Email deleted successfully",
    data: deletedLead,
  });
};

//================= send email ==================

export const sendEmailController = async(req,res)=>{
    // extracting data from the body
    const {time,email,subject,emailBody,emailType} = req.body;
    if(!time || !email|| !subject|| !emailBody|| !emailType){
        throw new AppError(
            "Time,Email,Subject,Email body are required",
            "Field validation error:Time,Email,Subject,Emial body are required",
            403
        )
    }
    const generateEmail = await sendEmailDb(time,email,subject,emailBody,emailType);
    return res.status(201).json({
        status: "success",
        message: "Email generated successfully",
        data: generateEmail,
      });

}
