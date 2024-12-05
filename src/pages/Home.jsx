import React from 'react';
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Features />
      <Services />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;