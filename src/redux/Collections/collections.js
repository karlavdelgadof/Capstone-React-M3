import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://opensea13.p.rapidapi.com/collections';

const initialState = [];

const options = {
  method: 'GET',
  url: 'https://opensea13.p.rapidapi.com/collections',
  params: {offset: '0', limit: '20'},
  headers: {
    'X-RapidAPI-Key': 'bdca063a2bmshfeefa33d27bc218p136a9djsnfe57cdf02e74',
    'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
  }
};



export const getCollections = createAsyncThunk('collections/getCollections', async () => {
  const response = await axios.request(options).then(function (response) {
}).catch(function (error) {
	console.error(error);
});
  return response.data;
});

export const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Add reducers to handle loading state as needed
    builder
      .addCase(getCollections.fulfilled, (state, action) => action.payload.map(
        (collection) => ({
          id: collection.created_date,
          name: collection.name,
          src: collection.image_url,
        }),
      ));
  },
});

export default collectionSlice.reducer;