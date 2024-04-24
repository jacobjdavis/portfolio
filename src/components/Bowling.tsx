import { styled } from '@mui/material/styles';
import { Paper, TableRow, TableCell, Stack } from '@mui/material';
import { IBowlingProps, IFrameProps } from 'types/bowling.types';
import { generateFrames, generateScore } from 'utils/bowling.utils';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
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
          {frame.roll3 && <Item>{frame.roll3 || ''}</Item>}
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
    <TableRow>
      {[...Array(10).keys()].map(frame => (
        <Frame frame={frames[frame]} score={rollingScore[frame]} />
      ))}
    </TableRow>
  );
};
