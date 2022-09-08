import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const options = {
  method: 'GET',
  url: 'https://opensea13.p.rapidapi.com/collections',
  params: {offset: '0', limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'bdca063a2bmshfeefa33d27bc218p136a9djsnfe57cdf02e74',
    'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
  }
};

export const getCollections = createAsyncThunk('collections/getCollections', async () => {
  const response = await axios.request(options).then((response) => response.data)
  return response;
});

export const getSingleCollection = createAsyncThunk('collection/getSingleCollection', 
async (id) => {
  const optionsTwo = {
    method: 'GET',
    url: `https://opensea13.p.rapidapi.com/collection/${id}`,
    headers: {
      'X-RapidAPI-Key': 'bdca063a2bmshfeefa33d27bc218p136a9djsnfe57cdf02e74',
      'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    }
  };
  
  const response = await axios.request(optionsTwo).then((response) => 
  console.log(response.data))
  return response;
});


export const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Add reducers to handle loading state as needed
    builder
      .addCase(getCollections.fulfilled, (state, action) => action.payload.collections.map(
        (collection) => ({
          id: collection.slug,
          name: collection.name,
          src: collection.image_url,
        }),
      ))
      .addCase(getSingleCollection.fulfilled, (state, action) => {
        console.log(action.payload.collection)
        action.payload.collection
      })
  },
});

export default collectionSlice.reducer;