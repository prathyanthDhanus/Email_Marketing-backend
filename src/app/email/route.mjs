import express from "express";
import tryCatchMiddleware from "../../utils/tryCatch.mjs";
import { tokenVerifyUser } from "../../utils/jwtToken.mjs";
import { createEmail,sendEmailController } from "./controller.mjs";

const router = express.Router();

router
.post("/send-email",tokenVerifyUser,tryCatchMiddleware(sendEmailController))




export default router;