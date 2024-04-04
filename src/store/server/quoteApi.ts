import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimeQuote } from 'types/animeQuote.types';

export const quoteApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
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
