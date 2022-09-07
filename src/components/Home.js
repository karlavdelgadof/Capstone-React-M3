import React from 'react';
import '../CSS/Home.css';
import CollectionsContainer from './CollectionsContainer';

const Home = () => (
  <>
    <div id="hero-sec">
      <h2>Your best NFT&apos;s market option</h2>
      <span>Buy, sell and discover more than +200 collections</span>
    </div>
    <form id="search">
      <input type="text" id="search" placeholder="Search Collection" />
    </form>
    <CollectionsContainer/>
  </>
);

export default Home;
