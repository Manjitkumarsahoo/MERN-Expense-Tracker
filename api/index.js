import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";

config("./.env");

const app = express();

//middlewares
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
)
app.use(express.json());
app.use(cookieParser());



//routers
app.use("/users", userRouter);

//PRODUCTION
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
  dbConnect();
});