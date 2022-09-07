import React from 'react';
import '../CSS/Home.css';

const Home = () => (
  <>
    <div id="hero-sec">
      <h2>Your best NFT&apos;s market option</h2>
      <span>Buy, sell and discover more than +200 collections</span>
    </div>
    <form id="search">
      <input type="text" id="search" placeholder="Search Collection" />
    </form>
    <div className="collections-cont">
      <h2>Collections</h2>
      <div id="collections">
        <div className="individual-character">1</div>
        <div className="individual-character">2</div>
        <div className="individual-character">3</div>
        <div className="individual-character">4</div>
        <div className="individual-character">5</div>
        <div className="individual-character">6</div>
      </div>
    </div>
    <></>
  </>
);

export default Home;
