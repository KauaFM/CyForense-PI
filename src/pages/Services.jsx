import React from 'react';
import Hero from '../components/sections/services/Hero';
import ServicesList from '../components/sections/services/ServicesList';
import ServiceDetails from '../components/sections/services/ServiceDetails';
import Process from '../components/sections/services/Process';
import CallToAction from '../components/sections/CallToAction';

const Services = () => {
  return (
    <>
      <Hero />
      <ServicesList />
      <ServiceDetails />
      <Process />
      <CallToAction />
    </>
  );
};

export default Services;