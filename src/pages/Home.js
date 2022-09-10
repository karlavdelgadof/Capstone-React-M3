import React from "react";
import "../CSS/Home.css";
import CoinsContainer from "../components/CoinsContainer";
import heroIllustration from "../multimedia/home-illustration.svg";

const Home = () => (
  <>
    <div id="hero-sec">
      <div id="hero-txt">
        <h2>Your best Crypto&apos;s market tracker option</h2>
        <span>
          Check and discover more than +8000 coins with their repective
          statistics
        </span>
      </div>

      <div id="hero-img">
        <img src={heroIllustration} alt="" />
      </div>
    </div>
    <CoinsContainer />
  </>
);

export default Home;
