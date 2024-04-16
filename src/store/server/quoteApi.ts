import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimeQuote } from 'types/animeQuote.types';

export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jacobjdavis.com',
  }),
  endpoints: builder => ({
    getAnimeQuote: builder.query<IAnimeQuote, void>({
      query: () => `quote`,
    }),
    getAnimeQuotes: builder.query<IAnimeQuote[], void>({
      query: () => `quotes`,
    }),
  }),
});

export const { useGetAnimeQuoteQuery, useGetAnimeQuotesQuery } = quoteApi;
