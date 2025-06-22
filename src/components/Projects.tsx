
import React from 'react';
import { ImageUploadBox } from './ImageUploadBox';

export const Projects = () => {
  const projects = [
    {
      title: "Code Nexus",
      description: "A student-run nonprofit offering brand and web consulting to organizations. Planning to host Singapore-wide free hackathons for teens.",
      image: "code-nexus"
    },
    {
      title: "InspireU", 
      description: "Social project co-founded with Vihan Shroff to support education, mental health, and well-being of underprivileged children.",
      image: "inspireu"
    },
    {
      title: "Solar Panel Optimization",
      description: "Sustainable engineering project — built a prototype that optimizes power output based on sunlight angle.",
      image: "solar-panel"
    },
    {
      title: "Teaching & Volunteering",
      description: "Taught CBSE math to underprivileged students while studying IGCSE. Bridged curriculum gaps independently.",
      image: "teaching-volunteer"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-scale">
              <ImageUploadBox 
                label={`${project.title} Image`}
                className="w-full h-48 rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
