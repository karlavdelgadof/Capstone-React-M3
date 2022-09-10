import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const coinsURL = 'https://api.coinlore.net/api/tickers/?start=100&limit=100';

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const response = await axios.get(coinsURL);
  return response.data;
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(getCoins.fulfilled, (state, action) => action.payload.data.map(
        (coin) => ({
          name: coin.name,
          symbol: coin.symbol,
          rank: coin.rank,
          id: coin.nameid,
          price: coin.price_usd,
          percent_change_24h: coin.percent_change_24h,
          percent_change_1h: coin.percent_change_1h,
          percent_change_7d: coin.percent_change_7d,
          price_btc: coin.price_btc,
          market_cap_usd: coin.market_cap_usd,
          volume24: coin.volume24,
          volume24a: coin.volume24a,
          csupply: coin.csupply,
        }
        ),
      ));
  },
});

export default coinsSlice.reducer;
