import express from "express";
import { generateQuiz } from "../openai";

const router = express.Router();

router.post("", async (req, res) => {
  const content = await generateQuiz(req.body);
  res.json(content);
});

export default router;
