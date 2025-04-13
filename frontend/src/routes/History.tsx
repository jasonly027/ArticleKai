import { NavBar } from "../components/NavBar";
import { QuizHistory } from "../components/QuizHistory";
import StarryBackground from "../components/starry-background";

export default function History() {
  return (
    <>
      <StarryBackground />
      <NavBar></NavBar>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <QuizHistory />
      </div>
    </>
  );
}
