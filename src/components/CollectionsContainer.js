import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections } from '../redux/Collections/collections';
import SingleCollection from './SingleCollection';

const CollectionsContainer = () => {
  const collections = useSelector((state) => state.collections);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (!collections.length) {
      dispatch(getCollections());
    }
  }, []);

  return (
    <div className="collections-cont">
      <h2>Collections</h2>
      <ul id="collections">
        {collections.map((collection) => {
          <SingleCollection key={collection.id} collection={collection}/>
        })}
      </ul>
    </div>
  );
};

export default CollectionsContainer;