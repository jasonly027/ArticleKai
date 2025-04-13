import { useState } from "react";
import { GenerateQuizes } from "../components/GenerateQuizes";
import { useNavigate } from "react-router-dom";
import generateQuiz from "../lib/generate";

export default function Generate() {
  const [genText, setGenText] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleGenerateQuiz = () => {
    if (loading) return;

    setLoading(true);
    generateQuiz(genText).then((quiz) => {
      if (quiz.length === 0) {
        setIsError(true);
        setLoading(false);
        return;
      }
      navigate("/quiz", { state: { quiz } });
    })
  };

  return (
    <>
      <GenerateQuizes
        genText={genText}
        setGenText={setGenText}
        handleGenerateQuiz={handleGenerateQuiz}
        loading={loading}
        error={isError}
      />
    </>
  );
}
