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

export const updateLeadSourceDb = async (leadSourceName, leadSourceId) => {
  // find the lead source by its ID and update its name
  const updatedLeadSource = await LeadSource.findByIdAndUpdate(
    leadSourceId,
    { leadSourceName: leadSourceName },
    { new: true, runValidators: true }
  );
  // if no document is found, throw an error
  if (!updatedLeadSource) {
    throw new AppError(
      "Lead source not found",
      "Field validation error: Lead source not found",
      404
    );
  }
  return updatedLeadSource;
};

//===================== delete lead source of a user ======================

export const deleteLeadSourceDb = async (leadSourceId) => {
  // finding the lead source by lead source id
  const findLeadSource = await LeadSource.findByIdAndDelete( leadSourceId );
  // find lead source exists
  if (!findLeadSource) {
    throw new AppError(
      "Lead source not found",
      "Field validation error:Lead source not found",
      404
    );
  }
  return findLeadSource;
};
