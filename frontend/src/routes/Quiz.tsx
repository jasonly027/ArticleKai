import { useLocation, useNavigate } from "react-router-dom";
import { Quiz as QuizComponent } from "../components/Quiz";
import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import StarryBackground from "../components/starry-background";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(
    function navigateOnNoQuiz() {
      if (!location.state?.quiz) {
        navigate("/generate", { replace: true });
      }
    },
    [location, navigate]
  );

  return (
    <>
      <StarryBackground></StarryBackground>
      <NavBar></NavBar>
      <QuizComponent
        questions={location.state?.quiz ?? []}
      ></QuizComponent>
      
    </>
  );
}
