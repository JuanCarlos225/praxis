export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  registrationDate: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizResult {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  percentage: number;
  completedAt: string;
}