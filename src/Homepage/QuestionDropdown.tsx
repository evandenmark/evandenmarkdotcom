
interface QuestionDropdownProps {
    question: string
}


const QuestionDropdown = ({question}:QuestionDropdownProps) => {
    return (
        <div>{question}</div>
    )
}

export default QuestionDropdown;