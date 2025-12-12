import React from 'react';
import HeroSection from '../../Components/HeroSection';
import Services from '../../Components/Services';
import Container from '../../Components/Container';

const Home = () => {
  return (
    <div className='pt-[70px]'>
      <HeroSection></HeroSection>
      <div className='bg-base-200'>
        <Container>
          <Services></Services>
        </Container>
      </div>
    </div>
  );
};

export default Home;