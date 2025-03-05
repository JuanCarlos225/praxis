import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
import Navbar from './components/navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home';
import Login from './pages/inicio_sesion';
import Register from './pages/registro';
import Dashboard from './pages/panel';
import Profile from './pages/perfil';
import Quiz from './pages/quiz';
import Results from './pages/resultados';

function App() {
  return (
    <AuthProvider>
      <QuizProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/quiz/:id" 
                  element={
                    <ProtectedRoute>
                      <Quiz />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/results" 
                  element={
                    <ProtectedRoute>
                      <Results />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <footer className="bg-gray-800 text-white py-4 text-center">
              <p className="text-sm">© 2025 QuizMaster. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </QuizProvider>
    </AuthProvider>
  );
}

export default App;