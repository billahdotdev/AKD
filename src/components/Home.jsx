import React from 'react';
import '../styles/Home.css';
import SocialMedia from './SocialMedia';
import Hero from './Hero';
import VisionMission from './VisionMission';
import Wcu from './Wcu';


const Home = () => {
  return (
    <>
    <SocialMedia />
    <div className='home'>
      <h1>Welcome to AL KARIM DRESSES</h1>
      <p>High-quality apparel crafted with care.</p>
    </div>
    <Hero />
    <VisionMission />
    <Wcu />
   
    </>
    
  );
};

export default Home;
