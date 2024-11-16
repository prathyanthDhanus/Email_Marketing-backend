import express from "express";
import cors from "cors";

//import routes
import userRoute from "./src/app/user/route.mjs"
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user",userRoute);






export default app;