import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/practice_db";

  // Обработка событий подключения
  mongoose.connection.on("connected", () => {
    console.log("[database]: Successfully connected to MongoDB.");
  });

  mongoose.connection.on("error", (err) => {
    console.error("[database]: Connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("[database]: Disconnected from MongoDB.");
  });

  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error("[database]: Initial connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
