import express from "express";
import cors from "cors";
import agenda from "./src/utils/agenda.config.mjs";

//import routes
import userRoute from "./src/app/user/route.mjs";
import leadSourceRoute from "./src/app/leadSource/route.mjs";
import email from "./src/app/email/route.mjs";


const app = express();

//middleware
app.use(express.json());
app.use(cors());


// start the Agenda instance
(async () => {
    try {
      await agenda.start(); // Start Agenda
      console.log("Agenda started!");
    } catch (err) {
      console.error("Error starting Agenda:", err);
    }
  })();

//routes
app.use("/api/user",userRoute);
app.use("/api/lead-source",leadSourceRoute);
app.use("/api/email",email);




export default app;