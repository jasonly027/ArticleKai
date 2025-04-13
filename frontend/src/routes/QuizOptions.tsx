import { QuizHistory } from "../components/QuizHistory";
import { GenerateQuizes } from "../components/GenerateQuizes";
import { useState } from "react";

export function QuizOptions() {
  const [genText, setGenText] = useState<string>("");

  const handleGenerateQuiz = () => {
    // Impliment Quiz generation
    console.log(genText);
  };

  return (
    <div className="flex w-screen h-screen p-5 space-x-5 bg-blue-300">
      <div className="w-1/2 h-full flex items-center justify-center">
        <GenerateQuizes
          genText={genText}
          setGenText={setGenText}
          handleGenerateQuiz={handleGenerateQuiz}
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <QuizHistory />
      </div>
    </div>
  );
}
