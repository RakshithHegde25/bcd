import React from 'react';
import { Brain, BarChart, Clock, Award } from 'lucide-react';

const ModelDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Model Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Model Architecture</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Support Vector Machine (SVM) with RBF kernel, optimized for high-dimensional feature space
            analysis of breast cancer diagnostic data.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <BarChart className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Performance Metrics</h2>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>Accuracy: 97.8%</li>
            <li>Sensitivity: 96.5%</li>
            <li>Specificity: 98.2%</li>
            <li>F1 Score: 97.3%</li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Feature Analysis</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our model analyzes various cellular features extracted from breast mass images:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Radius (mean of distances from center to points on the perimeter)',
            'Texture (standard deviation of gray-scale values)',
            'Perimeter',
            'Area',
            'Smoothness (local variation in radius lengths)',
            'Compactness (perimeter² / area - 1.0)',
            'Concavity (severity of concave portions of the contour)',
            'Symmetry',
            'Fractal dimension'
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="flex items-center mb-6">
          <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Training Information</h2>
        </div>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong className="text-gray-900 dark:text-white">Dataset:</strong> Wisconsin Diagnostic Breast Cancer (WDBC)
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Training Samples:</strong> 569 instances
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Features:</strong> 30 computed features from digitized images
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Validation Method:</strong> 5-fold cross-validation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;