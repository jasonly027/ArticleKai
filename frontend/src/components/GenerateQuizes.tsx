type GenerateQuizesProps = {
  genText: string;
  setGenText: (genText: string) => void;
  handleGenerateQuiz: () => void;
  loading: boolean,
  error: boolean;
};

export function GenerateQuizes({
  genText,
  setGenText,
  handleGenerateQuiz,
  loading,
  error,
}: GenerateQuizesProps) {
  return (
    <div className="max-w-md mx-auto space-y-6 p-6 bg-white rounded-2xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold text-center">Generate a New Quiz</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Information to quiz on:
        </label>
        <textarea
          className="resize-none w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={genText}
          onChange={(e) => setGenText(e.target.value)}
          placeholder="Enter your content here..."
        />
      </div>
      {error && <p className="text-red-500">Failed to generate quiz. Please try again</p>}

      <button
        className="w-full disabled:cursor-not-allowed py-2 px-4 bg-blue-600 disabled:bg-sky-700 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleGenerateQuiz}
        disabled={loading}
      >
        {loading ? "Loading..." : "Generate"}
      </button>
    </div>
  );
}
