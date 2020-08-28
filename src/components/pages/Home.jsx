import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Contact from '../Contact';
import Cards from '../Cards';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
