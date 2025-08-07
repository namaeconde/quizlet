import type { Quiz } from "../types.ts";

const QUIZ1: Quiz = {
    id: "quiz-1",
    title: "Quiz 1",
    questions: [
        {
            id: "q1",
            question: "What is the capital of France?",
            answerType: "select",
            options: ["Paris", "London", "Berlin", "Madrid"]
        },
        {
            id: "q2",
            question: "What is 2 + 2?",
            answerType: "text"
        },
        {
            id: "q3",
            question: "What is the largest planet in our solar system?",
            answerType: "select",
            options: ["Earth", "Mars", "Jupiter", "Saturn"]
        }
    ]
}

const QUIZ2: Quiz = {
    id: 'quiz-2',
    title: 'Quiz 2',
    questions: [
        {
            id: 'q1',
            question: 'What is the chemical symbol for water?',
            answerType: 'select',
            options: ['H2O', 'CO2', 'O2', 'NaCl']
        },
        {
            id: 'q2',
            question: 'Who wrote "To Kill a Mockingbird"?',
            answerType: 'text'
        },
        {
            id: 'q3',
            question: 'What is the capital of Japan?',
            answerType: 'select',
            options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok']
        }
    ]
}

export default function getQuizById(id: string): Quiz | null {
    switch (id) {
        case QUIZ1.id:
            return QUIZ1;
        case QUIZ2.id:
            return QUIZ2;
        default:
            return null;
    }
}