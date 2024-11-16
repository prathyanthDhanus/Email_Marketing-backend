import express from "express";
import tryCatchMiddleware from "../../utils/tryCatch.mjs";
import {userRegister} from "../user/controller.mjs";

const router = express.Router();

router.post("/register",tryCatchMiddleware(userRegister))

export default router;