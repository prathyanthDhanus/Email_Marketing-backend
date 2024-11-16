import AppError from "../../utils/appError.mjs";
import { createLeadSourceDb,getAllLeadSourceDb,updateLeadSourceDb } from "./services/db.mjs";

//===================== cretae lead source ======================

export const createLeadSource = async(req,res)=>{

    const userId = req.user.userId;
     const  {leadSourceName} = req.body;
     if(!leadSourceName){
        throw new AppError(
            "Lead source name is required",
            "Field validation error:Lead source name is required",
            403
        )
     } 

     const createLeadSource = await createLeadSourceDb(leadSourceName,userId);
     return res.status(201).json({
        status: "success",
        message: "Lead source created successfully",
        data: createLeadSource,
      });
};

//===================== get all lead source of a user ======================

export const getAllLeadSource = async(req,res)=>{

    //extract user id from the jwt middleware
    const userId = req.user.userId;
    // get all lead source associated with the user
    const leadSources = await getAllLeadSourceDb(userId);
    return res.status(201).json({
        status: "success",
        message: "Lead sources fetched successfully",
        data: leadSources,
      });
};

//===================== update lead source of a user ======================

export const updateLeadSource = async (req,res)=>{

    const {leadSourceName,leadSourceId} = req.body;
    if(!leadSourceName){
        throw new AppError(
            "Lead source name  is required",
            "Field validation error:Lead source name is required",
            403
        )
    }

    const updateLeadSource = await updateLeadSourceDb(leadSourceName,leadSourceId);
    return res.status(201).json({
        status: "success",
        message: "Lead sources fetched successfully",
        data: leadSources,
      });
}