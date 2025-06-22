
import React from 'react';
import { ImageUploadBox } from '../components/ImageUploadBox';
import { Navbar } from '../components/Navbar';
import { BackToHome } from '../components/BackToHome';

const Teacher = () => {
  const sections = [
    {
      title: "SMCT Math Teaching",
      content: "At 13, I began teaching CBSE mathematics to underprivileged students while studying IGCSE myself. This experience taught me that effective teaching requires understanding different perspectives and adapting to each student's needs."
    },
    {
      title: "Tech Workshops",
      content: "I've conducted programming workshops for students grades 6–10, focusing on breaking down complex technical concepts into simple, digestible lessons that build confidence and curiosity."
    },
    {
      title: "Student Leadership",
      content: "Through roles like House Captain and MUN Chair for ECOSOC, I've learned that teaching extends beyond academics — it's about mentoring, inspiring, and helping others discover their potential."
    },
    {
      title: "Basketball & Teamwork",
      content: "I've been playing school-level basketball since I was 14 and have won a few medals. It's taught me collaboration, on-the-spot strategy, and the value of pushing as a unit — something I carry into every classroom and club I lead."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Teaching with Purpose, Not Just Knowledge
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teaching has shaped my values and worldview. It's shown me that education isn't about demonstrating superiority, but about lifting others up and showing them that their circumstances don't define their potential.
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

export default Teacher;
