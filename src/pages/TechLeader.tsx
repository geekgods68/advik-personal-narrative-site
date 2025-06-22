
import React from 'react';
import { ImageUploadBox } from '../components/ImageUploadBox';
import { Navbar } from '../components/Navbar';

const TechLeader = () => {
  const sections = [
    {
      title: "Tech Club President",
      content: "Leading our school's Tech Club, I've organized hackathons, taught programming workshops, and built a community of young developers passionate about technology and innovation."
    },
    {
      title: "Code Nexus",
      content: "Co-founded this nonprofit consulting group to provide brand and web development services to organizations while promoting women in tech and planning Singapore-wide free hackathons for teens."
    },
    {
      title: "BridgeAI & InspireU",
      content: "Through BridgeAI and co-founding InspireU with Vihan Shroff, I've worked on projects that bridge technology with social impact, focusing on education and child welfare."
    },
    {
      title: "Hack Club Singapore Initiative",
      content: "Working to establish and expand the Hack Club network in Singapore, creating opportunities for young programmers to learn, build, and connect with the global developer community."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading with Logic and Design
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leadership in tech isn't just about managing teams — it's about inspiring innovation, fostering community, and using technology to create meaningful change. Here's how I've approached tech leadership.
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

export default TechLeader;
