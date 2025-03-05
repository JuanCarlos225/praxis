import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { BarChart2, Award, ArrowLeft } from 'lucide-react';

const Results: React.FC = () => {
  const { getUserResults, quizzes } = useQuiz();
  const userResults = getUserResults();
  
  // Sort results by completion date (newest first)
  const sortedResults = [...userResults].sort((a, b) => 
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
  
  // Calculate statistics
  const totalQuizzes = userResults.length;
  const averageScore = totalQuizzes > 0 
    ? Math.round(userResults.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzes) 
    : 0;
  const bestScore = totalQuizzes > 0 
    ? Math.max(...userResults.map(r => r.percentage)) 
    : 0;
  const bestQuizId = totalQuizzes > 0 
    ? userResults.find(r => r.percentage === bestScore)?.quizId 
    : '';
  const bestQuiz = bestQuizId ? quizzes.find(q => q.id === bestQuizId) : null;
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-800 mr-4">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold">Your Quiz Results</h1>
        </div>
        
        {userResults.length > 0 ? (
          <>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <BarChart2 size={24} className="text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Quizzes</p>
                    <p className="text-2xl font-bold">{totalQuizzes}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <BarChart2 size={24} className="text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Average Score</p>
                    <p className="text-2xl font-bold">{averageScore}%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Award size={24} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Best Performance</p>
                    <p className="text-2xl font-bold">{bestScore}%</p>
                    {bestQuiz && <p className="text-sm text-gray-500">{bestQuiz.title}</p>}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium">Detailed Results</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quiz
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Percentage
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedResults.map((result) => {
                      const quiz = quizzes.find(q => q.id === result.quizId);
                      const date = new Date(result.completedAt);
                      
                      return (
                        <tr key={result.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{quiz?.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{result.score} / {quiz?.questions.length}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              result.percentage >= 80 
                                ? 'bg-green-100 text-green-800' 
                                : result.percentage >= 60 
                                  ? 'bg-yellow-100 text-yellow-800' 
                                  : 'bg-red-100 text-red-800'
                            }`}>
                              {result.percentage}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {date.toLocaleDateString()} at {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Link to={`/quiz/${result.quizId}`} className="text-indigo-600 hover:text-indigo-900">
                              Retake
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Performance Chart */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium mb-4">Performance by Quiz</h2>
              <div className="space-y-4">
                {quizzes.map(quiz => {
                  const quizResults = userResults.filter(r => r.quizId === quiz.id);
                  const bestResult = quizResults.length > 0 
                    ? quizResults.reduce((prev, current) => 
                        (prev.percentage > current.percentage) ? prev : current
                      ) 
                    : null;
                  
                  return (
                    <div key={quiz.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{quiz.title}</h3>
                        {bestResult ? (
                          <span className="text-sm text-gray-500">
                            Best: {bestResult.percentage}%
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">Not attempted</span>
                        )}
                      </div>
                      
                      {bestResult ? (
                        <>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                bestResult.percentage >= 80 
                                  ? 'bg-green-600' 
                                  : bestResult.percentage >= 60 
                                    ? 'bg-yellow-500' 
                                    : 'bg-red-500'
                              }`}
                              style={{ width: `${bestResult.percentage}%` }}
                            ></div>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            Attempts: {quizResults.length}
                          </div>
                        </>
                      ) : (
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="h-2.5 rounded-full bg-gray-300" style={{ width: '0%' }}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <BarChart2 size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">No Results Yet</h2>
            <p className="text-gray-600 mb-6">You haven't completed any quizzes yet.</p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go to Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;