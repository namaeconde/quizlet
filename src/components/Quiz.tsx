import getQuizById from "../constants/QuestionMap.ts";
import { useState } from "react";

interface QuizProps {
    id: string
}

export default function Quiz({ id }: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState<string | null>(null);
    const quiz = getQuizById(id);
    const currentQuestion = quiz?.questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < (quiz?.questions.length || 0) - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            // Submit analytics or user answer here if needed
        }
    }

    const handleSubmitQuiz = () => {
        if (quiz) {
            // Here you would typically handle the quiz submission logic,
            // such as saving the user's answers or calculating the score.
            // For now, we'll just set a result message.
            setResult("Quiz submitted successfully!");
        }
    }

    return (
        <div>
            {quiz ? (
                <div>
                    <h1>{quiz.title}</h1>
                    {
                        !result && currentQuestion &&
                        <div key={currentQuestion.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h2>{currentQuestion.question}</h2>
                            {currentQuestion.answerType === 'select' ? (
                                <select>
                                    {currentQuestion.options?.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <input type="text" />
                            )}
                            {
                                currentQuestionIndex === quiz.questions.length - 1 ? (
                                    <button onClick={handleSubmitQuiz}>Submit Quiz</button>
                                ) : (
                                    <button onClick={handleNextQuestion}>Next Question</button>
                                )
                            }
                        </div>
                    }
                    {
                        result && <div><p>{result}</p><button onClick={() => window.location.href = "/" }>Home</button></div>
                    }
                </div>
            ) : (
                <p>Quiz not found.</p>
            )}
        </div>
    )
}