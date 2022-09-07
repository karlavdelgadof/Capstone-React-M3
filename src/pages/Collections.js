import React from 'react';
import '../CSS/Collections.css';

const Collections = () => {
  const collection = 'COLLECTION NAME';

  return (
    <div className="comics-section">
      <div className="marvel-comics-title">
        <p className="marvel-comics-image">Character image</p>
        <div className="marvel-comics-text">
          <p>{collection}</p>
          <p>842 views</p>
        </div>
      </div>
      <div className="character-comics">
        <div className="comics-title">All comics</div>
        <div className="character-status">1</div>
        <div className="character-status">2</div>
        <div className="character-status">3</div>
        <div className="character-status">4</div>
        <div className="character-status">5</div>
        <div className="character-status">6</div>
      </div>
    </div>
  );
};

export default Collections;
