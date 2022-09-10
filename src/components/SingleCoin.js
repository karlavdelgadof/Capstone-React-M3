import React from 'react';
import PropTypes from 'prop-types';
import statsIcon from '../multimedia/stats1.png';

const SingleCollection = (props) => {
  const { coin } = props;
  return (
    <div>
      <div className="collection-info">
        <h2 className="single-collection-title">{coin.name}</h2>
      </div>
      <div className="collections-spans">
        <span>{coin.symbol}</span>
        <span className="rank-stats">
          {`#${coin.rank}`}
          <i><img className="stats-icon" src={statsIcon} alt="" /></i>
        </span>
      </div>
    </div>
  );
};

SingleCollection.propTypes = {
  coin: PropTypes.shape({
    rank: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

export default SingleCollection;
