import getQuizById from "../constants/QuestionMap.ts";
import { useState } from "react";
import ProgressBar from "./ProgressBar.tsx";

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
        <div style={{ padding: '20px', minWidth: '600px', margin: 'auto' }}>
            {quiz ? (
                <div>
                    <h1>{quiz.title}</h1>
                    {
                        !result && currentQuestion &&
                        <div key={currentQuestion.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ width: '100%' }}>
                                <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={quiz.questions.length} />
                            </div>
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