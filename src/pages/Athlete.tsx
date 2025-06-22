
import React from 'react';
import { ImageUploadBox } from '../components/ImageUploadBox';
import { Navbar } from '../components/Navbar';
import { BackToHome } from '../components/BackToHome';

const Athlete = () => {
  const sections = [
    {
      title: "Tennis",
      content: "Started playing tennis at age 8, it became one of my constants growing up alongside music. Tennis taught me precision, mental resilience, and the importance of consistency in practice."
    },
    {
      title: "Basketball",
      content: "I've been playing school-level basketball since I was 14 and have won a few medals. It's taught me collaboration, on-the-spot strategy, and the value of pushing as a unit — lessons I carry into leadership roles."
    },
    {
      title: "Muay Thai",
      content: "For the last 8 months, I've been training in Muay Thai — learning not just technique, but focus, endurance, and respect for form. It's meditative and intense — and a great counterbalance to my mental work."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mind, Body, Balance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Physical activity has always been part of my journey — from early tennis lessons to competitive basketball and now Muay Thai training. Each sport has taught me different lessons that I apply to everything else I do.
          </p>
        </div>
        
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
                <div className="flex justify-center">
                  <ImageUploadBox 
                    label={`${section.title} Image`}
                    className="w-64 h-48 rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <BackToHome />
      </div>
    </div>
  );
};

export default Athlete;
