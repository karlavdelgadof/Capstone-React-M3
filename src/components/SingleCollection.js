import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const SingleCollection = (props) => {
  const { collection } = props;
  // const dispatch = useDispatch();
  // console.log('SingleCollection',collection)
  // const handleClick = (e) => {
  //   dispatch(joinMissions({ id: e.target.id }));
  // };

  return (
    <div>
      <div className="collection-img">
        <img src={collection.src ? collection.src : '../multimedia/default-image.jpg'}/>
      </div>
      
      <span className='single-collection-title'>{collection.name}</span>
    </div>
  );
};

SingleCollection.propTypes = {
  collection: PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default SingleCollection;