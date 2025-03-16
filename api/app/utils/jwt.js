import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const generateJWT = (user) => {
  return jwt.sign(
    { id: user._id, role: "admin" },
    JWT_SECRET,
    { expiresIn: "24h" } // กำหนดเวลา JWT หมดอายุ
  );
};

export const verifyJWT = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
