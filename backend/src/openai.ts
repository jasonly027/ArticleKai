import OpenAI from "openai";
import { z } from "zod";

const client = new OpenAI({
  apiKey: process.env["OPENAI_KEY"],
});

const QuizSchema = z.array(
  z.object({
    question: z.string(),
    options: z.array(z.string()),
    answer: z.string(),
  })
);

type QuizArray = z.infer<typeof QuizSchema>;

export async function generateQuiz(text: string): Promise<QuizArray> {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    instructions:
      "You are an AI that strictly views the input as the single source of knowledge. You must respond with an array of JSON objects in the following format [{ 'question': 'the question text', 'options': ['option1', 'option2', ...], 'answer': 'correct option' }]. Ensure the question is clear and options are concise. The answer should be the option that best fits the question.",
    input: text,
  });

  try {
    const obj = JSON.parse(response.output_text);
    const parsed = QuizSchema.parse(obj);
    return parsed;
  } catch (error) {
    console.error("raw", response.output_text);
    console.error("error", error);
  }

  return [];
}
