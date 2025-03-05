import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { useAuth } from '../context/AuthContext';
import { Play, BarChart2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { quizzes } = useQuiz();
  const { currentUser } = useAuth();
  const { getUserResults } = useQuiz();
  
  const userResults = getUserResults();
  const completedQuizIds = userResults.map(result => result.quizId);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Panel</h1>
        
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">Bienvenido, {currentUser?.name}!</h2>
          <p className="text-gray-600">
            Has completado {userResults.length} de {quizzes.length} quizzes.
          </p>
        </div>
        
        {/* Quizzes Section */}
        <h2 className="text-2xl font-semibold mb-4">Quizzes Disponibles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {quizzes.map((quiz) => {
            const isCompleted = completedQuizIds.includes(quiz.id);
            const result = userResults.find(r => r.quizId === quiz.id);
            
            return (
              <div key={quiz.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">
                        {quiz.questions.length} questions
                      </span>
                      {isCompleted && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Completed: {result?.percentage}%
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/quiz/${quiz.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isCompleted ? (
                        <>
                          <Play size={16} className="mr-2" />
                          Reintentar
                        </>
                      ) : (
                        <>
                          <Play size={16} className="mr-2" />
                          Iniciar
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Results Section */}
        {userResults.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Your Recent Results</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quiz
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Puntaje
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Porcentaje
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Completado
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userResults.map((result) => {
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
                            <div className="text-sm text-gray-900">{result.percentage}%</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {date.toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Link to={`/quiz/${result.quizId}`} className="text-indigo-600 hover:text-indigo-900">
                              Reintentar
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/results"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <BarChart2 size={16} className="mr-2" />
                Ver todos los resultados
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;