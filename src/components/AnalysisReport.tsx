import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import type { AnalysisResult } from '../types';

interface AnalysisReportProps {
  result: AnalysisResult;
}

const AnalysisReport: React.FC<AnalysisReportProps> = ({ result }) => {
  const isBenign = result.prediction === 'benign';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8 transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analysis Report</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">{result.timestamp}</span>
      </div>

      <div className={`flex items-center p-4 rounded-lg mb-6 transition-colors duration-200
        ${isBenign ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
        {isBenign ? (
          <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400 mr-3" />
        ) : (
          <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400 mr-3" />
        )}
        <div>
          <h3 className={`font-semibold text-lg ${isBenign ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
            {isBenign ? 'Benign' : 'Malignant'} Tumor Detected
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Confidence: {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Feature Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded transition-colors duration-200">
              <div className="text-sm text-gray-600 dark:text-gray-300">{feature.name}</div>
              <div className="font-medium text-gray-900 dark:text-white">{feature.value.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;