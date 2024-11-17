import "dotenv/config";
import app from "./app.mjs";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URL;

//mongodb conncetion setup
mongoose
  .connect(url)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
