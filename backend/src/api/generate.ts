import express from "express";
import { generateQuiz } from "../openai";

const router = express.Router();

const obj = [
  {
    question: "What is a tariff?",
    options: [
      "A type of tax on imports",
      "A subsidy for domestic products",
      "A regulation on employment",
      "A limit on exports",
    ],
    answer: "A type of tax on imports",
  },
  {
    question: "What is one purpose of imposing tariffs?",
    options: [
      "To decrease government revenue",
      "To encourage foreign imports",
      "To safeguard domestic industry",
      "To eliminate all trade",
    ],
    answer: "To safeguard domestic industry",
  },
  {
    question: "Who can impose tariffs?",
    options: [
      "Only individual states",
      "Only private companies",
      "National governments and supranational unions",
      "Only international organizations",
    ],
    answer: "National governments and supranational unions",
  },
  {
    question: "Besides revenue, what can import duties regulate?",
    options: [
      "Foreign trade and policy",
      "Local transportation",
      "Taxation of services",
      "Employment rates",
    ],
    answer: "Foreign trade and policy",
  },
];

router.post("", async (req, res) => {
  // const content = await generateQuiz(req.body);
  // res.json(content);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  res.json(obj);
});

export default router;
