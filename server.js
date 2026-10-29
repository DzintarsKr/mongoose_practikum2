import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к БД
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Practice API is running." });
});

app.listen(PORT, () => {
  console.log(`[server]: Running at http://localhost:${PORT}`);
});
