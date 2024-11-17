import express from "express";
import tryCatchMiddleware from "../../utils/tryCatch.mjs";
import { tokenVerifyUser } from "../../utils/jwtToken.mjs";
import {
  createLeadSource,
  getAllLeadSource,
  updateLeadSource,
  deleteLeadSource,
} from "./controller.mjs";

const router = express.Router();

router
  .post("/", tokenVerifyUser, tryCatchMiddleware(createLeadSource))

  .get("/", tokenVerifyUser, tryCatchMiddleware(getAllLeadSource))

  .put("/", tokenVerifyUser, tryCatchMiddleware(updateLeadSource))

  .delete(
    "/:leadSourceId",
    tokenVerifyUser,
    tryCatchMiddleware(deleteLeadSource)
  );

export default router;
