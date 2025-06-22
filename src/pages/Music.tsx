
import React from 'react';
import { ImageUploadBox } from '../components/ImageUploadBox';
import { Navbar } from '../components/Navbar';

const Music = () => {
  const sections = [
    {
      title: "Carnatic Music",
      content: "My musical journey began at age 7 with Carnatic vocal training. This classical foundation taught me discipline, rhythm, and the emotional depth that music can convey."
    },
    {
      title: "Guitar & Self-Learning",
      content: "At 15, I picked up the electric guitar and taught myself to play. The transition from vocal to instrumental opened up new ways to express creativity and connect with different musical styles."
    },
    {
      title: "Performances",
      content: "I've performed at various venues including MINDS, graduation ceremonies, and local gigs. Each performance has been an opportunity to share music and connect with audiences."
    },
    {
      title: "Music Club",
      content: "As Head of the Music Club, I've organized performances and events, bringing together musicians and music lovers to create memorable experiences for our school community."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strings, Stages, and Soul
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Music has always been a part of my life, starting with Carnatic vocal at 7 and later discovering the electric guitar. It's been my constant companion through growth, expression, and connection.
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

export default Music;
