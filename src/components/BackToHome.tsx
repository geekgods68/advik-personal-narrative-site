
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BackToHome = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 flex justify-center">
      <Button
        onClick={() => navigate('/')}
        variant="outline"
        className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-sky-600 hover:border-sky-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Button>
    </div>
  );
};
