
import React, { useState } from 'react';
import { ImageUploadBox } from './ImageUploadBox';

export const ClubsInitiatives = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const clubs = {
    tech: {
      title: "Tech Club",
      subtitle: "Programming education, Hackathons",
      content: "Leading programming education for Grades 6-10, teaching Python, HTML, CSS, JavaScript, Java, and Streamlit. Organizing two major hackathons: Cyber-Fintech and Logic & Algorithms competitions.",
      image: "tech-club-detailed"
    },
    sustainability: {
      title: "SustainabilitySphere", 
      subtitle: "Sustainable projects, IoT innovation",
      content: "Designing sustainable technology solutions and pushing IoT innovation. Working on prototypes like the solar panel optimization project that maximizes power output based on sunlight angles.",
      image: "sustainability-detailed"
    },
    music: {
      title: "Music Club",
      subtitle: "Events, live performances", 
      content: "Leading musical performances across school events and local institutes. Performed at MINDS and graduation ceremonies, bringing together students through the power of music.",
      image: "music-club-detailed"
    },
    mun: {
      title: "Model United Nations",
      subtitle: "ECOSOC chairing experience",
      content: "Chaired the ECOSOC committee session focusing on brain drain solutions, facilitating discussions on global economic and social challenges affecting developing nations.",
      image: "mun-detailed"
    }
  };

  const tabs = Object.keys(clubs);

  return (
    <section id="clubs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Clubs & Initiatives</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-sky-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-sky-50'
                }`}
              >
                {clubs[tab as keyof typeof clubs].title}
              </button>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {clubs[activeTab as keyof typeof clubs].title}
              </h3>
              <p className="text-sky-600 font-semibold">
                {clubs[activeTab as keyof typeof clubs].subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {clubs[activeTab as keyof typeof clubs].content}
              </p>
            </div>
            <div>
              <ImageUploadBox 
                label={`${clubs[activeTab as keyof typeof clubs].title} Image`}
                className="w-full h-64 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
