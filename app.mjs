import express from "express";
import cors from "cors";

//import routes
import userRoute from "./src/app/user/route.mjs";
import leadSourceRoute from "./src/app/leadSource/route.mjs";
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user",userRoute);
app.use("/api/lead-source",leadSourceRoute);






export default app;