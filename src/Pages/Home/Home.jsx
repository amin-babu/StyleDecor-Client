import React from 'react';
import HeroSection from '../../Components/HeroSection';
import Services from '../../Components/Services';
import Container from '../../Components/Container';
import TopDecorators from '../../Components/TopDecorators';
import CoverageMap from '../../Components/CoverageMap';

const Home = () => {
  return (
    <div className='pt-[70px]'>
      <HeroSection></HeroSection>
      <div className='bg-base-200'>
        <Container>
          <Services></Services>
          <TopDecorators></TopDecorators>
          <CoverageMap></CoverageMap>
        </Container>
      </div>
    </div>
  );
};

export default Home;