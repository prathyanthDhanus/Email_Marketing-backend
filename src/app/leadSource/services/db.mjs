import AppError from "../../../utils/appError.mjs";
import LeadSource from "../model/leadSourceModel.mjs";

//===================== cretae lead source ======================

export const createLeadSourceDb = async (leadSourceName, userId) => {
  // create a new lead source
  const newLeadSource = new LeadSource({
    userId: userId,
    leadSourceName: leadSourceName,
  });
  //saving to the database
  await newLeadSource.save();
  return newLeadSource;
};

//===================== get all lead source of a user ======================

export const getAllLeadSourceDb = async (userId) => {
   // find lead sources from the database associated with the provided userId
  const findLeadSource = await LeadSource.find({ userId: userId });
  // if no lead sources are found, throw an error
  if (findLeadSource.length === 0) {
    throw new AppError(
      "Lead source not found",
      "Field validation error:Lead source not found",
      404
    );
  }
  return findLeadSource;
};

//===================== update lead source of a user ======================

export const updateLeadSourceDb = async(leadSourceName,leadSourceId)=>{
    

}
