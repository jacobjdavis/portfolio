import { rem } from 'polished';

import { Box, BoxProps, Grid, Stack, styled, Typography } from '@mui/material';

import { formatDate, getDuration } from 'utils/dates.utils';

import { EXPERIENCE } from 'constants/experience.constants';

const StyledStack = styled(Stack)`
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  padding: ${({ theme }) => theme.spacing(4, 3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: ${({ theme }) => `1px solid ${theme.palette.secondary.main}`};
  &:hover {
    background: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const StyledBox = styled(Box)<BoxProps<'a'>>`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  position: absolute;
`;
export const ViewExperience = () => (
  <Grid container spacing={4} alignItems="stretch">
    {EXPERIENCE.map(({ url, logo, name, position, startDate, endDate }) => (
      <Grid item key={`company-${name}`} xs={12} sm={12} md={6} lg={6}>
        <StyledStack>
          <StyledBox
            href={url}
            component="a"
            target="_blank"
            rel="noreferrer"
          />
          <Box mb={3} height="40px" width="100%" textAlign="center">
            <img
              alt={name}
              src={`assets/images/${logo}`}
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          </Box>
          <Typography
            mb={3}
            color="primary"
            fontWeight={700}
            fontSize={rem(14)}
          >
            {position}
          </Typography>
          <Typography mb={1} fontSize={rem(14)}>
            {formatDate(startDate)} - {formatDate(endDate)}
          </Typography>
          <Typography fontSize={rem(12)} fontWeight={300}>
            {getDuration({ startDate, endDate })}
          </Typography>
        </StyledStack>
      </Grid>
    ))}
  </Grid>
);
