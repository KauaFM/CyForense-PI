import React from 'react';
import Hero from '../components/sections/about/Hero';
import History from '../components/sections/about/History';
import Mission from '../components/sections/about/Mission';
import Values from '../components/sections/about/Values';
import Team from '../components/sections/about/Team';
import CallToAction from '../components/sections/CallToAction';

const About = () => {
  return (
    <>
      <Hero />
      <History />
      <Mission />
      <Values />
      <Team />
      <CallToAction />
    </>
  );
};

export default About;