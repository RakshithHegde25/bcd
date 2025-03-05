import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
        ${dragActive ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-300 dark:border-gray-600'}
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleChange}
        accept="image/*"
        disabled={isLoading}
      />
      <div className="flex flex-col items-center">
        <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
          Drop your scan image here, or click to select
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Supports: JPG, PNG, DICOM
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;