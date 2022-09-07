import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './Collections/collections';

const store = configureStore({
  reducer: {
    collections: collectionsReducer,
  },
});

export default store;