import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
} from '@mui/material';
import { IAnimeQuote } from 'types/animeQuote.types';

interface IAnimeQuoteProps {
  quote: IAnimeQuote;
}

export const AnimeQuote = ({ quote }: IAnimeQuoteProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
        title={quote.anime}
        titleTypographyProps={{ color: 'primary' }}
        subheader={`- ${quote.character}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {quote.quote}
        </Typography>
      </CardContent>
    </Card>
  );
};
