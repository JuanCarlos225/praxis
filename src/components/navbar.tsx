import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ShadowByte</Link>
        
        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-indigo-200">Panel</Link>
              <Link to="/profile" className="hover:text-indigo-200">Perfil</Link>
              <button 
                onClick={handleLogout}
                className="hover:text-indigo-200 flex items-center"
              >
                <LogOut size={18} className="mr-1" /> Salir
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-200">Iniciar sesión</Link>
              <Link to="/register" className="hover:text-indigo-200">Registro</Link>
            </>
          )}
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 mt-2 p-4 rounded-md">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="block py-2 hover:text-indigo-200">Panel</Link>
              <Link to="/profile" className="block py-2 hover:text-indigo-200">Perfil</Link>
              <button 
                onClick={handleLogout}
                className="block py-2 w-full text-left hover:text-indigo-200 flex items-center"
              >
                <LogOut size={18} className="mr-1" /> Salir
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:text-indigo-200">Iniciar Sesion</Link>
              <Link to="/register" className="block py-2 hover:text-indigo-200">Registro</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;