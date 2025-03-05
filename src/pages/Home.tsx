import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import AnalysisReport from '../components/AnalysisReport';
import type { AnalysisResult } from '../types';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Breast Cancer Detection System
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Upload a mammogram scan image for instant analysis using our advanced machine learning model.
          Get accurate predictions and detailed feature analysis to support diagnosis.
        </p>
      </div>

      <ImageUpload onUpload={handleUpload} isLoading={isLoading} />

      {isLoading && (
        <div className="text-center mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Analyzing image...</p>
        </div>
      )}

      {error && (
        <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200 rounded-lg">
          {error}
        </div>
      )}

      {result && <AnalysisReport result={result} />}
    </div>
  );
};

export default Home;