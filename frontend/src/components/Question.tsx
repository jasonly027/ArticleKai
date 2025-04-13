export interface QuestionInterface {
  question: string;
  options: string[];
  selectedOption: string | null;
  onOptionChange: (value: string) => void;
  isSubmitted: boolean;
  correctAnswer: string;
}

function Question({
  question,
  options,
  selectedOption,
  onOptionChange,
  isSubmitted,
  correctAnswer,
}: QuestionInterface) {
  return (
    <div className="my-4 text-center">
      <div className="text-white text-lg font-semibold mb-4">{question}</div>
      <div className="flex flex-col items-center space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className={`block w-64 px-4 py-2 border rounded cursor-pointer text-center transition
              ${
                selectedOption === option
                  ? "bg-blue-300 border-blue-500"
                  : "bg-white border-gray-300"
              }
              hover:bg-blue-50`}
          >
            <input
              type="radio"
              name={question}
              value={option}
              checked={selectedOption === option}
              onChange={() => onOptionChange(option)}
              disabled={isSubmitted}
              className="hidden"
            />
            {option}
          </label>
        ))}
      </div>
      {isSubmitted && (
        <div className="mt-2 text-sm">
          {selectedOption === correctAnswer ? (
            <span className="text-green-600">Correct!</span>
          ) : (
            <span className="text-red-600">Wrong. Correct answer: {correctAnswer}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default Question;
