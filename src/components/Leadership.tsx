
import React from 'react';
import { ImageUploadBox } from './ImageUploadBox';

export const Leadership = () => {
  const roles = [
    {
      title: "Tech Club President",
      description: "Taught programming and organized inter-school hackathons.",
      image: "tech-club"
    },
    {
      title: "Music Club Head", 
      description: "Led performances across events and local institutes.",
      image: "music-club"
    },
    {
      title: "SustainabilitySphere R&D Member",
      description: "Designed sustainable tech and pushed IoT ideas.",
      image: "sustainability"
    },
    {
      title: "House Captain (Grade 10)",
      description: "Led inter-house school activities.",
      image: "house-captain"
    },
    {
      title: "MUN Chair (ECOSOC)",
      description: "Chaired session on brain drain solutions.",
      image: "mun-chair"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Roles</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover-scale">
              <ImageUploadBox 
                label={`${role.title} Logo`}
                className="w-full h-32 rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
