export const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    next();
  } catch (err) {
    console.log("Error verifying token:", err); // เพิ่ม log เพื่อดูข้อความ error จาก catch
  }
};
