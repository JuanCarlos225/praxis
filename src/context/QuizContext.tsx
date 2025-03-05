import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Quiz, QuizResult } from '../types';
import { mockQuizzes, mockQuizResults } from '../mockData';
import { useAuth } from './AuthContext';

interface QuizContextType {
  quizzes: Quiz[];
  quizResults: QuizResult[];
  getQuizById: (id: string) => Quiz | undefined;
  getUserResults: () => QuizResult[];
  submitQuizResult: (quizId: string, score: number, totalQuestions: number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizzes] = useState<Quiz[]>(mockQuizzes);
  const [quizResults, setQuizResults] = useState<QuizResult[]>(mockQuizResults);
  const { currentUser } = useAuth();

  const getQuizById = (id: string): Quiz | undefined => {
    return quizzes.find(quiz => quiz.id === id);
  };

  const getUserResults = (): QuizResult[] => {
    if (!currentUser) return [];
    return quizResults.filter(result => result.userId === currentUser.id);
  };

  const submitQuizResult = (quizId: string, score: number, totalQuestions: number): void => {
    if (!currentUser) return;

    const percentage = Math.round((score / totalQuestions) * 100);
    
    const newResult: QuizResult = {
      id: (quizResults.length + 1).toString(),
      userId: currentUser.id,
      quizId,
      score,
      percentage,
      completedAt: new Date().toISOString()
    };

    setQuizResults([...quizResults, newResult]);
  };

  return (
    <QuizContext.Provider value={{ 
      quizzes, 
      quizResults, 
      getQuizById, 
      getUserResults, 
      submitQuizResult 
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};