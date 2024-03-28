import { rem } from 'polished';

import { Avatar, Box, Typography } from '@mui/material';

export const ExpertiseProfile = () => (
  <Box
    textAlign="center"
    alignItems="center"
    alignContent="center"
    flexShrink={0}
    sx={{ width: '452px' }}
  >
    <Typography fontSize={rem(24)}>Jacob J Davis</Typography>
    <Typography color="primary" fontSize={rem(14)} fontWeight={700}>
      Senior Software Engineer
    </Typography>
    <Avatar
      src="assets/images/profile.png"
      alt="Jacob J Davis"
      sx={{
        width: '300px',
        height: 'auto',
        margin: 'auto',
        paddingTop: rem(10),
      }}
    />
  </Box>
);
