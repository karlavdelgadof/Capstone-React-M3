import React from 'react';
import PropTypes from 'prop-types';
import statsIcon from '../multimedia/stats1.png';
// import { useDispatch } from 'react-redux';

const SingleCollection = (props) => {
  const { coin } = props;
  return (
    <div>
      <div className="collection-info">
        <h2 className="single-collection-title">{coin.name}</h2>
        <span>{coin.symbol}</span>
      </div>
      <span>
        {`#${coin.rank}`}
        <i><img src={statsIcon} alt="" /></i>
      </span>
    </div>
  );
};

SingleCollection.propTypes = {
  coin: PropTypes.shape({
    rank: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

export default SingleCollection;
