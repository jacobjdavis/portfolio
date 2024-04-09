import { differenceInYears } from 'date-fns';
import { rem } from 'polished';

import { Box, Stack, styled, Typography } from '@mui/material';

const StyledTitle = styled(Typography)`
  font-size: ${rem(22)};
  @media screen and (min-width: 767px) {
    font-size: ${rem(36)};
    font-weight: 400;
  }
`;

const StyledStack = styled(Stack)`
  height: 100%;
  position: relative;
  background: url('assets/images/1346122.png') no-repeat center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(21, 21, 21, 0.5);
    z-index: 0;
  }
`;

export const ViewHome = () => {
  const elapsedYears = differenceInYears(new Date(), new Date('2014-07-01'));

  return (
    <StyledStack>
      <Box zIndex={500} textAlign="center" px={2}>
        <StyledTitle color="common.white">Software Engineer</StyledTitle>
        <Typography color="common.white" fontWeight={700}>
          {elapsedYears} years of professional &amp; enterprise-level experience
        </Typography>
      </Box>
    </StyledStack>
  );
};
