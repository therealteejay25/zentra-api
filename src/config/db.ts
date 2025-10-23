import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI!).then((conn) => {
        console.log("Database connected successfully", conn.connection.host);
    }).catch((error) => {
        console.log("Database connection failed:", error);
    });
};