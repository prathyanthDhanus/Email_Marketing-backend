import mongoose from "mongoose";

const leadSourceModel = new mongoose.model({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  leadSourceName: {
    type: String,
    require: true,
  },
});

const LeadSource = mongoose.model("LeadSource", leadSourceModel);
export default LeadSource;
