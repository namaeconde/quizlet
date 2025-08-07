export type Quiz = {
    id: string;
    title: string;
    questions: Questions[];
}

export type Questions = {
    id: string;
    question: string;
    answerType: 'text' | 'select';
    options?: string[];
    userAnswer?: string;
}

export type User = {
    id: string;
}