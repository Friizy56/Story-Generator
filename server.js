import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (frontend)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

// Google AI setup
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/api/generate-story", async (req, res) => {
  const prompt = req.body.prompt || "Write a fun short story for kids.";
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const result = await model.generateContent(prompt);
  res.json({ story: result.response.text() });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

