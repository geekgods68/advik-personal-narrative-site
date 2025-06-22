
import React from 'react';
import { ImageUploadBox } from './ImageUploadBox';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              I started music at 7 with Carnatic vocal classes. At 8, I picked up tennis. These two were constants — along with video games — until COVID changed everything. My mom was stuck in India after my grandfather passed away, and I was alone in Singapore with my dad. That's when I started programming — it became how my dad and I bonded.
            </p>
            <p>
              I began with Python and kept learning. By the time COVID subsided, I was certified in it. At 13, I began teaching math to underprivileged children through SMCT — a CBSE curriculum I hadn't studied myself. I did it to show them that status isn't a measure of worth, only of comfort — and they could earn that comfort.
            </p>
            <p>
              Today, I'm in the IB Diploma Programme with a predicted score of 40/42. I continue to teach, lead, and build. I've co-founded two initiatives: Code Nexus (a nonprofit consulting group) and InspireU (a project for holistic child welfare). And I still play guitar, code, teach, and perform — in my own way.
            </p>
          </div>
          
          <div className="flex justify-center">
            <ImageUploadBox 
              label="Profile Photo"
              className="w-80 h-80 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
