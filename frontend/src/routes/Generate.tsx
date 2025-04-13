import { useState } from "react";
import { GenerateQuizes } from "../components/GenerateQuizes";
import { useNavigate } from "react-router-dom";
import generateQuiz from "../lib/generate";

export default function Generate() {
  const [genText, setGenText] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleGenerateQuiz = async () => {
    const quiz = await generateQuiz(genText);
    if (quiz.length === 0) {
      setIsError(true);
      return;
    }
    navigate("/quiz", { state: { quiz } });
  };

  return (
    <>
      <GenerateQuizes
        genText={genText}
        setGenText={setGenText}
        handleGenerateQuiz={handleGenerateQuiz}
        error={isError}
      />
    </>
  );
}
