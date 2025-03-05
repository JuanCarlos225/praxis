import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { CheckCircle, XCircle, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getQuizById, submitQuizResult } = useQuiz();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const quiz = getQuizById(id || '');
  
  useEffect(() => {
    if (quiz) {
      // Initialize selected answers array with -1 (no selection)
      setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
    }
  }, [quiz]);
  
  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Quiz Not Found</h2>
          <p className="text-gray-600 mb-4">The quiz you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleAnswerSelect = (optionIndex: number) => {
    if (isCompleted) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmitQuiz = () => {
    setIsSubmitting(true);
    
    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    // Submit result
    submitQuizResult(quiz.id, correctAnswers, quiz.questions.length);
    
    setScore(correctAnswers);
    setIsCompleted(true);
    setIsSubmitting(false);
  };
  
  const handleReturnToDashboard = () => {
    navigate('/dashboard');
  };
  
  const handleRetakeQuiz = () => {
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setScore(0);
  };
  
  // Check if all questions have been answered
  const allQuestionsAnswered = selectedAnswers.every(answer => answer !== -1);
  
  // Calculate progress percentage
  const answeredCount = selectedAnswers.filter(answer => answer !== -1).length;
  const progressPercentage = (answeredCount / quiz.questions.length) * 100;
  
  if (isCompleted) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-center">Quiz Results</h1>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-4">
                  <span className="text-3xl font-bold">{percentage}%</span>
                </div>
                <h2 className="text-xl font-semibold mb-1">
                  {percentage >= 80 ? 'Great job!' : percentage >= 60 ? 'Good effort!' : 'Keep practicing!'}
                </h2>
                <p className="text-gray-600">
                  You scored {score} out of {quiz.questions.length} questions correctly.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {quiz.questions.map((question, index) => {
                  const isCorrect = selectedAnswers[index] === question.correctAnswer;
                  
                  return (
                    <div 
                      key={question.id} 
                      className={`p-4 rounded-lg border ${
                        isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          {isCorrect ? (
                            <CheckCircle size={20} className="text-green-500" />
                          ) : (
                            <XCircle size={20} className="text-red-500" />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{question.text}</p>
                          <div className="mt-2 text-sm">
                            <p className="text-gray-600">
                              Your answer: {question.options[selectedAnswers[index]]}
                            </p>
                            {!isCorrect && (
                              <p className="text-green-600">
                                Correct answer: {question.options[question.correctAnswer]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleRetakeQuiz}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={handleReturnToDashboard}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Quiz Header */}
          <div className="bg-indigo-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
            <p>{quiz.description}</p>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{answeredCount} of {quiz.questions.length} questions</span>
              </div>
              <div className="w-full bg-indigo-300 rounded-full h-2.5">
                <div 
                  className="bg-white h-2.5 rounded-full" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Question */}
          <div className="p-6">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Question {currentQuestionIndex + 1} of {quiz.questions.length}</h2>
              </div>
              <p className="text-xl mb-6">{currentQuestion.text}</p>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswerSelect(optionIndex)}
                    className={`w-full text-left p-4 rounded-lg border ${
                      selectedAnswers[currentQuestionIndex] === optionIndex
                        ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500'
                        : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                        selectedAnswers[currentQuestionIndex] === optionIndex
                          ? 'border-indigo-500 bg-indigo-500 text-white'
                          : 'border-gray-400'
                      }`}>
                        {selectedAnswers[currentQuestionIndex] === optionIndex && (
                          <span className="text-xs">✓</span>
                        )}
                      </div>
                      <span className="ml-3">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className={`inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft size={16} className="mr-2" />
                Previous
              </button>
              
              {currentQuestionIndex < quiz.questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Next
                  <ChevronRight size={16} className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered || isSubmitting}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                    allQuestionsAnswered && !isSubmitting
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-indigo-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Quiz'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;