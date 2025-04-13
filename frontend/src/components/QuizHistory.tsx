import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteQuiz, getQuizzes, SavedQuestion } from "../lib/supabase";

export function QuizHistory() {
  const [quizzes, setQuizzes] = useState<SavedQuestion[]>([]);

  useEffect(function fetchQuizzes() {
    getQuizzes().then((quizzes) => setQuizzes(quizzes));
  }, []);

  return (
    <div className="max-w-md w-100 space-y-6 p-6 bg-white rounded-2xl shadow-lg">
      <div className="text-2xl font-semibold text-center"> Quiz History</div>
      <div className="flex flex-col">
        {quizzes.map(({ id, questions, description }) => (
          <div className="flex flex-row justify-between w-full items-center">
            <Link
              to="/quiz"
              state={{ quiz: questions }}
              className="hover:bg-blue-300 w-full p-2 rounded-mdL"
            >
              {description}
            </Link>
            <button
              onClick={() => {
                deleteQuiz(id);
                setQuizzes((prev) => [...prev].filter(({ id: currentId }) => currentId !== id));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
