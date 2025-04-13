import { NavBar } from "../components/NavBar";
import { QuizHistory } from "../components/QuizHistory";

export default function History() {
  return (
    <>
      <NavBar></NavBar>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <QuizHistory />
      </div>
    </>
  );
}
