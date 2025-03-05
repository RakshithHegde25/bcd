export interface AnalysisResult {
  prediction: 'benign' | 'malignant';
  confidence: number;
  features: {
    name: string;
    value: number;
  }[];
  timestamp: string;
}