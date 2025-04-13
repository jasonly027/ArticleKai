import { deleteQuiz, getQuizzes, saveQuiz, signIn, signOut, signUp } from "../lib/supabase";

const TEXT =
  "Tariffs are taxes imposed by governments on imported goods to protect domestic industries, regulate trade, and generate revenue.";

export default function TestBackend() {
  return (
    <div className="flex flex-col space-y-2 w-min">
      <button
        onClick={async () => {
          fetch("http://localhost:8080/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "text/plain",
            },
            body: TEXT,
          })
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        }}
        className="p-2 border-2 cursor-pointer"
      >
        Generate
      </button>
      <button
        onClick={async () => {
          await signUp("jason.ly027@gmail.com", "123456789");
        }}
      >
        Sign Up
      </button>
      <button
        onClick={async () => {
          await signIn("jason.ly027@gmail.com", "123456789");
        }}
      >
        Sign In
      </button>
      <button
        onClick={async () => {
          await signOut();
        }}
      >
        Sign Out
      </button>
      <button
        onClick={async () => {
          await saveQuiz([{ question: "To be?", options: ["yes", "no"], answer: "yes" }]);
        }}
      >
        Save Quiz
      </button>
      <button
        onClick={async () => {
          await getQuizzes();
        }}
      >
        Get Quizzes
      </button>
      <button
        onClick={async () => {
          await deleteQuiz(1);
        }}
      >
        Delete Quiz
      </button>
    </div>
  );
}
