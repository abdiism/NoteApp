import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
dotenv.config();
import authRoutes from "./Routes/auth.js";
import notesRoutes from "./Routes/notes.js";
const app = express();
const PORT = 7000; //6000 is restricted haha try

// app.use(express());
app.use(cors());
app.use(bodyParser.json()); //ha ilawin jsonka si json looga dhigo data da

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to database successfuly");
} catch (error) {
  console.log("eRROR connecting to dataBASE", error);
}
app.get("/", (req, res) => {
  res.send("server is running on");
});

app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.listen(PORT, () => {
  console.log(`server is on http://localhost:${PORT}`);
});
