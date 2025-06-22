
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Timeline } from '../components/Timeline';
import { Projects } from '../components/Projects';
import { Leadership } from '../components/Leadership';
import { ClubsInitiatives } from '../components/ClubsInitiatives';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Leadership />
      <ClubsInitiatives />
      <Contact />
    </div>
  );
};

export default Index;
