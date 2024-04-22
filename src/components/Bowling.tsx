import { styled } from '@mui/material/styles';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  TableContainer,
} from '@mui/material';
import { IBowlingProps, IFrameProps } from 'types/bowling.types';
import { generateFrames, generateScore } from 'utils/bowling.utils';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(0.5),
  textAlign: 'center',
  minWidth: '24.01px',
  minHeight: '36.02px',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const Frame = ({ frame, score }: IFrameProps) => {
  return (
    <TableCell>
      <Stack>
        <Stack direction="row">
          <Item>{frame.roll1 || ''}</Item>
          <Item>{frame.roll2 || ''}</Item>
          <Item>{frame.roll3 || ''}</Item>
        </Stack>
        <Item>{score}</Item>
      </Stack>
    </TableCell>
  );
};

export const Bowling = ({ rolls }: IBowlingProps) => {
  const rollingScore = generateScore([...rolls]);
  const frames = generateFrames([...rolls]);
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
          <TableRow>
            {[...Array(10).keys()].map(frame => (
              <Frame frame={frames[frame]} score={rollingScore[frame]} />
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
