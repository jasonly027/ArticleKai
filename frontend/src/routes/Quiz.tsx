import { useLocation, useNavigate } from "react-router-dom";
import { Quiz as QuizComponent } from "../components/Quiz";
import { useEffect } from "react";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(
    function navigateOnNoQuiz() {
      if (!location.state.quiz) {
        navigate("/generate", { replace: true });
      }
    },
    [location, navigate]
  );

  return (
    <>
      <QuizComponent
        questions={location.state.quiz}
        // questions={[
        //   {
        //     question: "What is the capital of France?",
        //     answer: "Paris",
        //     options: ["Paris", "London", "Rome", "Berlin"],
        //   },
        //   {
        //     question: "Which element has the chemical symbol 'O'?",
        //     answer: "Oxygen",
        //     options: ["Oxygen", "Gold", "Osmium", "Ozone"],
        //   },
        //   {
        //     question: "Who wrote 'Romeo and Juliet'?",
        //     answer: "William Shakespeare",
        //     options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
        //   },
        //   {
        //     question: "What is 7 x 6?",
        //     answer: "42",
        //     options: ["36", "42", "48", "52"],
        //   },
        //   {
        //     question: "Which planet is known as the Red Planet?",
        //     answer: "Mars",
        //     options: ["Mars", "Venus", "Jupiter", "Mercury"],
        //   },
        // ]}
      ></QuizComponent>
    </>
  );
}
