import express from "express";
import tryCatchMiddleware from "../../utils/tryCatch.mjs";
import {userRegister,userLogin} from "../user/controller.mjs";

const router = express.Router();

router
.post("/register",tryCatchMiddleware(userRegister))
.post("/login",tryCatchMiddleware(userLogin))

export default router;