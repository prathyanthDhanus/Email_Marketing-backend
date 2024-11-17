import mongoose from "mongoose";

const leadSourceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  leadSourceName: {
    type: String,
    required: true,
    
  },
}); 

const LeadSource = mongoose.model("LeadSource", leadSourceSchema);
export default LeadSource;
