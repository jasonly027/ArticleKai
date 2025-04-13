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
  const [grade, setGrade] = useState<number>()

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
    setGrade((score / questions.length) * 100);
  };
  const handleSave = () => {
    
  }
  return (
    <div className="flex flex-col my-2 items-center space-y-6">
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
        className="w-fit cursor-pointer bg-blue-800 rounded-2xl py-2 px-3 text-white"
        onClick={handleSubmit}
        disabled={isSubmitted || selectedOptions.includes(null)}
      >
        Submit
      </button>

      {
        isSubmitted &&
        <div className="space-y-3 py-3">
          <div className="flex space-x-3">
            <div className="text-white font-semibold">Grade: </div>
            <div className="text-white font-semibold">{grade}%</div>
          </div>
          <div className="flex space-x-2">
            <div className="text-white">Description of Test: </div>
            <input type="text" className="rounded-xl bg-white" />
          </div>

          <div className="flex justify-center py-4">
            <button
              className="w-fit cursor-pointer bg-blue-800 rounded-2xl py-2 px-4 text-white"
              onClick={handleSave}
            >
              Save
            </button>
          </div>


        </div>


      }





    </div>
  );
}
