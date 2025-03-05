import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ModelDetails from './pages/ModelDetails';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/model" element={<ModelDetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;