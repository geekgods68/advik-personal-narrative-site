
import React from 'react';
import { ImageUploadBox } from '../components/ImageUploadBox';
import { Navbar } from '../components/Navbar';

const Programmer = () => {
  const sections = [
    {
      title: "Getting Started",
      content: "During COVID lockdown, programming became my bridge to connect with my dad while mom was stuck in India. What started as a way to pass time quickly evolved into a passion for problem-solving and logical thinking."
    },
    {
      title: "Teaching Others",
      content: "I've taught programming to students from grades 6–10, covering Python, HTML, CSS, JavaScript, Java, and Streamlit. Breaking down complex concepts into digestible lessons has been as rewarding as coding itself."
    },
    {
      title: "Projects",
      content: "From co-founding Code Nexus as a nonprofit consulting group to developing BridgeAI and working on my CS IA project, I've applied programming to solve real-world problems and create meaningful impact."
    },
    {
      title: "Hackathons",
      content: "As Tech Club President, I've organized major inter-school hackathons including Cyber-Fintech and Logic & Algo events, fostering a community of young developers and innovators."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coding My Way Through Curiosity
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I started programming during COVID to connect with my dad. It became more than just bonding — it became how I think. Here's what I've built, taught, and contributed to in tech so far.
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
      </div>
    </div>
  );
};

export default Programmer;
