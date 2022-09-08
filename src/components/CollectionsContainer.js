import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getCollections } from '../redux/Collections/collections';
import SingleCollection from './SingleCollection';
import '../CSS/Collections.css' 
import { getSingleCollection } from '../redux/Collections/collections';



const CollectionsContainer = () => {
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!collections.length) {
      dispatch(getCollections());
    }
  }, []);

  const handleClick = (e) => {
    dispatch(getSingleCollection(e.key));
    navigate(e.to);
  };

  return (
    <div className="collections-cont">
      <h2>Collections</h2>
      <div id="collections">
        { 
          collections.map((collection) => (
            <Link to={`/${collection.id}`} className="single-collection" key={collection.id} >
            <SingleCollection
              onClick={handleClick}
              collection={collection} 
            />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionsContainer;