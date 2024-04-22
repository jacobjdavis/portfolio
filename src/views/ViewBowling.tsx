import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Bowling } from 'components/Bowling';
import { BOWLING_SCORES } from 'constants/bowling.constants';
import { Roll } from 'types/bowling.types';

export const ViewBowling = () => {
  const rolls: Roll[] = [4, 5, 'X', 8, 1, 'X', 'X', 'X', 'X', 'X'];
  console.log(rolls);

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            {[...Array(10).keys()].map(frame => (
              <TableCell align="center">{frame + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <Bowling rolls={BOWLING_SCORES[0]} />
          <Bowling rolls={BOWLING_SCORES[1]} />
          <Bowling rolls={BOWLING_SCORES[2]} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
