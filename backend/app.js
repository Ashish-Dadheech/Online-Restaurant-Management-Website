import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
// Load environment variables (falls back to default .env)
dotenv.config();

// CORS: allow configured FRONTEND_URL, otherwise fall back to typical Vite dev port for local dev
const frontendOrigin = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: frontendOrigin,
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
