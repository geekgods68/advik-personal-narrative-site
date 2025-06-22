
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const tags = [
    { label: 'Programmer', path: '/programmer' },
    { label: 'Music Enthusiast', path: '/music' },
    { label: 'Tech Leader', path: '/tech-leader' },
    { label: 'Teacher', path: '/teacher' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-sky-600">Advik</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build, teach, and play — with code, with music, and with meaning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => navigate(tag.path)}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 cursor-pointer"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
