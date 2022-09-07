import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const SingleCollection = (props) => {
  const { collection } = props;
  // const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   dispatch(joinMissions({ id: e.target.id }));
  // };

  return (
    <li>
      <img src={collection.src}/>
      <span>{collection.name}</span>
    </li>
  );
};

SingleCollection.propTypes = {
  collection: PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default SingleCollection;