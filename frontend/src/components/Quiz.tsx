import { Question, type QuestionInterface } from "./Question"

export interface QuizInterface{
    numQuestions: number

}
export function Quiz({questions} : {questions: QuestionInterface[]}){
    return(
        
        <Question question='What color is the sky' options={["blue", "white", "orange", "yellow"]} answer='blue'></Question>
    )
}