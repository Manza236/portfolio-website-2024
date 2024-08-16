import React from 'react';
import AccordionWithImage from './AccordionWithImage';

const About = () => {
  return (
    <div id="about-section" className="bg-gray-800 p-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
      <AccordionWithImage />
    </div>
  );
};

export default About;
