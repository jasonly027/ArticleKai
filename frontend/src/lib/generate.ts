import { RawQuestion } from "../components/Quiz";

export default async function generateQuiz(text: string): Promise<RawQuestion[]> {
  const resp = await fetch("http://localhost:8080/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: text,
  });
  return await resp.json();
}
