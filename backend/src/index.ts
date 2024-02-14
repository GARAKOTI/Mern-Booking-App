import express, { Request, Response, urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/usersRoute";
import authRoutes from "./routes/auth";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
try {
    mongoose.connect(process.env.MONGO_URI as string);
    console.log("connection established");
  } catch (error) {
    console.log(error);
  }

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from backend!" });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.listen("7000", () => {
  console.log("server is running on port  7000");
});