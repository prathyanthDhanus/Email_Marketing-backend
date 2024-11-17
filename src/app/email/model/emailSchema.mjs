import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  leadSourceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LeadSource",
    required: true,
  },
  template: {
    type: String,
    required: true,
  },
  isSend : {
    type:Boolean,
    default :false
  }
});

const Email = mongoose.model("Email", emailSchema);
export default Email;
