import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Offer from '../Offer'

function Home() {
  return (
    <>
      <HeroSection />
      <Offer />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
