import { use, useState } from "react"

export interface QuestionInterface {
    question: string,
    options: string[],
    answer: string
}
export function Question({ question, options, answer }: QuestionInterface) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSelectedOption(event.target.value);
    };
    

    return (
        <>
            <div className="flex flex-col items-center py-[1rem]">
                <div className="py-[2rem]">{question}</div>
                {options.map((option, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                                disabled={isSubmitted}
                                className="hidden"
                                
                                
                            />
                            {option}
                        </label>
                    </div>

                ))}
            </div>

        </>


    )
}