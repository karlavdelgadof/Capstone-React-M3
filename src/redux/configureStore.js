import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './Collections/collections';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    collections: collectionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
});

export default store;