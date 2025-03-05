import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useQuiz } from '../context/QuizContext';
import { User, Calendar, Award } from 'lucide-react';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const { getUserResults, quizzes } = useQuiz();
  const [activeTab, setActiveTab] = useState('profile');
  
  const userResults = getUserResults();
  
  // Calculate statistics
  const totalQuizzes = userResults.length;
  const averageScore = totalQuizzes > 0 
    ? Math.round(userResults.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzes) 
    : 0;
  const bestScore = totalQuizzes > 0 
    ? Math.max(...userResults.map(r => r.percentage)) 
    : 0;
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'profile' 
                  ? 'border-b-2 border-indigo-500 text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'stats' 
                  ? 'border-b-2 border-indigo-500 text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('stats')}
            >
              Statistics
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'achievements' 
                  ? 'border-b-2 border-indigo-500 text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('achievements')}
            >
              Achievements
            </button>
          </div>
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <User size={32} className="text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{currentUser?.name}</h2>
                  <p className="text-gray-600">{currentUser?.email}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <dl className="divide-y divide-gray-200">
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="text-sm text-gray-900">{currentUser?.name}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="text-sm text-gray-900">{currentUser?.email}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Member since</dt>
                    <dd className="text-sm text-gray-900">{currentUser?.registrationDate}</dd>
                  </div>
                  <div className="py-3 flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">Quizzes completed</dt>
                    <dd className="text-sm text-gray-900">{totalQuizzes}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
          
          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Quiz Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Award size={24} className="text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-indigo-800">Quizzes Completed</p>
                      <p className="text-2xl font-bold text-indigo-900">{totalQuizzes}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Award size={24} className="text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">Average Score</p>
                      <p className="text-2xl font-bold text-green-900">{averageScore}%</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Award size={24} className="text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-purple-800">Best Score</p>
                      <p className="text-2xl font-bold text-purple-900">{bestScore}%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {userResults.length > 0 ? (
                <div>
                  <h3 className="text-lg font-medium mb-3">Quiz Performance</h3>
                  <div className="space-y-4">
                    {userResults.map(result => {
                      const quiz = quizzes.find(q => q.id === result.quizId);
                      return (
                        <div key={result.id} className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{quiz?.title}</h4>
                            <span className="text-sm text-gray-500">
                              {new Date(result.completedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-indigo-600 h-2.5 rounded-full" 
                              style={{ width: `${result.percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">Score: {result.score}/{quiz?.questions.length}</span>
                            <span className="text-xs font-medium">{result.percentage}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">You haven't completed any quizzes yet.</p>
                </div>
              )}
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className={`border rounded-lg p-4 ${totalQuizzes >= 1 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${totalQuizzes >= 1 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Award size={24} className={totalQuizzes >= 1 ? 'text-green-600' : 'text-gray-400'} />
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${totalQuizzes >= 1 ? 'text-green-800' : 'text-gray-500'}`}>First Quiz</p>
                      <p className="text-xs text-gray-500">Complete your first quiz</p>
                    </div>
                  </div>
                </div>
                
                <div className={`border rounded-lg p-4 ${totalQuizzes >= 5 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${totalQuizzes >= 5 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Award size={24} className={totalQuizzes >= 5 ? 'text-green-600' : 'text-gray-400'} />
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${totalQuizzes >= 5 ? 'text-green-800' : 'text-gray-500'}`}>Quiz Enthusiast</p>
                      <p className="text-xs text-gray-500">Complete 5 quizzes</p>
                    </div>
                  </div>
                </div>
                
                <div className={`border rounded-lg p-4 ${bestScore >= 100 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${bestScore >= 100 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Award size={24} className={bestScore >= 100 ? 'text-green-600' : 'text-gray-400'} />
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${bestScore >= 100 ? 'text-green-800' : 'text-gray-500'}`}>Perfect Score</p>
                      <p className="text-xs text-gray-500">Get 100% on any quiz</p>
                    </div>
                  </div>
                </div>
                
                <div className={`border rounded-lg p-4 ${averageScore >= 80 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${averageScore >= 80 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Award size={24} className={averageScore >= 80 ? 'text-green-600' : 'text-gray-400'} />
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${averageScore >= 80 ? 'text-green-800' : 'text-gray-500'}`}>Knowledge Master</p>
                      <p className="text-xs text-gray-500">Maintain an average score of 80% or higher</p>
                    </div>
                  </div>
                </div>
                
                <div className={`border rounded-lg p-4 ${quizzes.length === userResults.length && userResults.length > 0 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${quizzes.length === userResults.length && userResults.length > 0 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Award size={24} className={quizzes.length === userResults.length && userResults.length > 0 ? 'text-green-600' : 'text-gray-400'} />
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${quizzes.length === userResults.length && userResults.length > 0 ? 'text-green-800' : 'text-gray-500'}`}>Completionist</p>
                      <p className="text-xs text-gray-500">Complete all available quizzes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;