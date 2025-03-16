import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const getUser = async (req, res) => {
  try {
    console.log(req);
    const response = await User.find();
    res.json({
      success: true,
      message: "เข้าสู่ระบบสำเร็จ",
      data: response,
    });
  } catch (error) {
    errorHandler(403, "ไม่มีสิทธิ์ในการเข้าถึง");
  }
};
