import React from 'react';
import '../CSS/Home.css';
import CollectionsContainer from '../components/CollectionsContainer';
import heroIllustration from '../multimedia/home-illustration.svg'

const Home = () => (
  <>
    <div id="hero-sec">
      <h2>Your best Crypto&apos;s market tracker option</h2>
      <span>Check and discover more than +8000 coins with their repective statistics</span>
      <div>
        <img src={heroIllustration}/>
      </div>
    </div>
    <CollectionsContainer />
  </>
);

export default Home;
