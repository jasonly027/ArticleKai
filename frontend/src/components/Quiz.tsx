import { useState } from "react";
import Question from "./Question";

export interface RawQuestion {
  question: string;
  answer: string;
  options: string[];
}
export function Quiz({ questions }: { questions: RawQuestion[] }) {
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>(
    questions.map(() => null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (index: number, value: string) => {
    const newSelections = [...selectedOptions];
    newSelections[index] = value;
    setSelectedOptions(newSelections);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // You could calculate score here
    const score = questions.reduce((total, q, index) => {
      return total + (selectedOptions[index] === q.answer ? 1 : 0);
    }, 0);
    console.log("Grade: " + ((score / questions.length) * 100).toFixed(2) + "%");
  };
  return (
    <div className="flex flex-col">
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          selectedOption={selectedOptions[index]}
          onOptionChange={(value: string) => handleOptionChange(index, value)}
          isSubmitted={isSubmitted}
          correctAnswer={q.answer}
        />
      ))}
      <button
        className="cursor-pointer"
        onClick={handleSubmit}
        disabled={isSubmitted || selectedOptions.includes(null)}
      >
        Submit
      </button>
    </div>
  );
}
