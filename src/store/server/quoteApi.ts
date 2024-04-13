import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimeQuote } from 'types/animeQuote.types';

export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://99.20.90.68:9001' }),
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
