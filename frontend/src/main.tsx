import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./routes/Login.tsx";
import { Register } from "./routes/Register.tsx";
import { Quiz } from "./components/Quiz.tsx";
import { QuizOptions } from "./routes/QuizOptions.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Login></Login> },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  {
    path: "/quiz",
    element: (
      <Quiz
        questions={[
          {
            question: "What is the capital of France?",
            answer: "Paris",
            options: ["Paris", "London", "Rome", "Berlin"],
          },
          {
            question: "Which element has the chemical symbol 'O'?",
            answer: "Oxygen",
            options: ["Oxygen", "Gold", "Osmium", "Ozone"],
          },
          {
            question: "Who wrote 'Romeo and Juliet'?",
            answer: "William Shakespeare",
            options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
          },
          {
            question: "What is 7 x 6?",
            answer: "42",
            options: ["36", "42", "48", "52"],
          },
          {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
          },
        ]}
      ></Quiz>
    ),
  },
  { path: "/quiz_options", element: <QuizOptions></QuizOptions> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
