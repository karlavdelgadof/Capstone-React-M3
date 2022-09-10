/* eslint-disable-line react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoins } from '../redux/Coins/coins';
import SingleCollection from './SingleCollection';
import '../CSS/Collections.css';
import searchIcon from '../multimedia/search-icon.png';
// import '../CSS/Collection.css';

const CollectionsContainer = () => {
  const coins = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (!coins.length) {
      dispatch(getCoins());
    }
  }, []);

  const filtered = coins.filter(
    (coin) => !search || new RegExp(search, 'ig').test(coin.name),
  );

  return (
    <>
      <div id="search">
        <input
          type="search"
          value={search}
          placeholder="Search Collection"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i><img src={searchIcon} alt="" /></i>
      </div>
      <div className="collections-cont">
        <h2>Collections</h2>
        <div id="collections">
          {filtered.map((coin) => (
            <Link
              to="details"
              state={{ coin }}
              className="single-collection"
              key={coin.id}
            >
              <SingleCollection coin={coin} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionsContainer;
