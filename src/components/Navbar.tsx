import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Home, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} text-white shadow-lg transition-all duration-200`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8" />
              <span className="font-bold text-xl">BreastCare AI</span>
            </Link>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/model"
                className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                Model Details
              </Link>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;