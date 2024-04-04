import { useGetAnimeQuotesQuery } from 'store/server/quoteApi';
import { AnimeQuote } from './AnimeQuote';
import { Grid, LinearProgress } from '@mui/material';
import { Masonry } from '@mui/lab';

export const AnimeQuotes = () => {
  const { data, error, isLoading } = useGetAnimeQuotesQuery();
  return (
    <>
      {isLoading && <LinearProgress />}
      {data && (
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
          {data.map(quote => {
            return <AnimeQuote key={quote.id} quote={quote} />;
          })}
        </Masonry>
      )}
    </>
  );
};
