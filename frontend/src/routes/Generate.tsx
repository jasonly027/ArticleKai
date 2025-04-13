import { useState } from "react";
import { GenerateQuizes } from "../components/GenerateQuizes";
import { useNavigate } from "react-router-dom";
import generateQuiz from "../lib/generate";
import { NavBar } from "../components/NavBar";

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
      <NavBar></NavBar>
      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  ">
        <GenerateQuizes
          genText={genText}
          setGenText={setGenText}
          handleGenerateQuiz={handleGenerateQuiz}
          error={isError}
        />
      </div>

    </>
  );
}
