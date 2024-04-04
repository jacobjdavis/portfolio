import { configureStore } from '@reduxjs/toolkit';
import { quoteApi } from './server/quoteApi';

const reducer = {
  [quoteApi.reducerPath]: quoteApi.reducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quoteApi.middleware),
});
