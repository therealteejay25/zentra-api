import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT!;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Zentra API is running...");
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();
});