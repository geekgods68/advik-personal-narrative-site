
import React, { useState } from 'react';
import { Upload, Cloud } from 'lucide-react';

interface ImageUploadBoxProps {
  label: string;
  className?: string;
}

export const ImageUploadBox: React.FC<ImageUploadBoxProps> = ({ label, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={`relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-sky-400 transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      
      {uploadedImage ? (
        <div className="relative w-full h-full">
          <img 
            src={uploadedImage} 
            alt={label}
            className="w-full h-full object-cover rounded-lg"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div className="text-white text-center">
                <Upload className="mx-auto mb-2" size={24} />
                <p className="text-sm">Change Image</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-6">
          <Cloud 
            size={32} 
            className={`mb-3 transition-colors ${isHovered ? 'text-sky-500' : 'text-gray-400'}`}
          />
          <p className="text-sm text-gray-600 text-center">
            {isHovered ? 'Click to upload' : label}
          </p>
          {isHovered && (
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF up to 10MB
            </p>
          )}
        </div>
      )}
    </div>
  );
};
