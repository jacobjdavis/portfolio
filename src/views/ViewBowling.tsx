import { Typography } from '@mui/material';
import { Bowling } from 'components/Bowling';
import { BOWLING_SCORES } from 'constants/bowling.constants';
import { Roll } from 'types/bowling.types';

export const ViewBowling = () => {
  const rolls: Roll[] = [4, 5, 'X', 8, 1, 'X', 'X', 'X', 'X', 'X'];
  console.log(rolls);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Bowling Score Card
      </Typography>
      <Bowling rolls={BOWLING_SCORES[0]} />
      <Bowling rolls={BOWLING_SCORES[1]} />
      <Bowling rolls={BOWLING_SCORES[2]} />
    </>
  );
};
