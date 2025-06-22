
import React from 'react';
import { ImageUploadBox } from './ImageUploadBox';

export const Timeline = () => {
  const timelineEvents = [
    {
      age: "Age 7",
      title: "Musical Beginnings",
      description: "Started Carnatic vocal music training.",
      image: "carnatic-music"
    },
    {
      age: "Age 8", 
      title: "Athletic Pursuits",
      description: "Picked up tennis.",
      image: "tennis"
    },
    {
      age: "Age 11 (COVID)",
      title: "Programming Discovery",
      description: "Mom stuck in India for 6 months, began programming with dad to pass time. Started with Python, passion for tech grew with video games.",
      image: "python-learning"
    },
    {
      age: "Age 12",
      title: "Skill Development",
      description: "Continued learning Python, earned certifications.",
      image: "certifications"
    },
    {
      age: "Age 13",
      title: "Teaching Journey Begins",
      description: "Began teaching math to underprivileged CBSE students in SMCT.",
      image: "teaching"
    },
    {
      age: "Age 15",
      title: "Academic Excellence & Music",
      description: "Topped IGCSE boards with straight As in Math, CS, Physics. Took up electric guitar (self-taught). Performed at school events and personal gatherings.",
      image: "igcse-guitar"
    },
    {
      age: "Age 16",
      title: "Leadership & Innovation",
      description: "President of Tech Club, teaching programming to Grades 6–10. Organizing hackathons. Co-founder of Code Nexus and InspireU. Head of Music Club, performed at MINDS and graduation. Chaired ECOSOC MUN committee. Former House Captain.",
      image: "leadership"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <ImageUploadBox 
                  label={`${event.age} Photo`}
                  className="w-full h-64 rounded-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-4">
                <div className="text-sky-600 font-bold text-lg">{event.age}</div>
                <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-sky-50 rounded-xl">
          <p className="text-sm text-gray-600 italic text-center">
            Fun fact: Had opportunity to skip 2 grades in 1st grade — parents declined.
          </p>
        </div>
      </div>
    </section>
  );
};
