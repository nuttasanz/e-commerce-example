import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "../app/routes/auth.route.js";
import userRoutes from "../app/routes/user.route.js";
import connectDB from "./config/database.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";

dotenv.config();

const app = express();
const port = 3009;
// รายการของโดเมนที่อนุญาตให้เข้าถึงเซิร์ฟเวอร์
const allowedOrigins = ["http://localhost:3000", "http://example.com"]; // เพิ่ม origin ที่คุณต้องการอนุญาต

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // ให้ทุกคำขอที่มาจาก origin ที่อนุญาต
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // อนุญาตให้ส่ง cookies หรือข้อมูลการพิสูจน์ตัวตน
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

await connectDB();

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

app.use("/api/user", authMiddleware, userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode;
  const message = err.message;
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
