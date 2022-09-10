/* eslint-disable-line react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoins } from '../redux/Coins/coins';
import SingleCoin from './SingleCoin';
import '../CSS/Coins.css';
import searchIcon from '../multimedia/search-icon.png';

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
          placeholder="Search Coins"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i><img src={searchIcon} alt="" /></i>
      </div>
      <div className="coins-cont">
        <h2 id="section-title">Coins</h2>
        <div id="collections">
          {filtered.map((coin) => (
            <Link
              to="details"
              state={{ coin }}
              className="single-collection"
              key={coin.id}
            >
              <SingleCoin coin={coin} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionsContainer;
