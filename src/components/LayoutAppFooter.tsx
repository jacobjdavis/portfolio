import { rem } from 'polished';

import { Toolbar, Typography } from '@mui/material';

export const LayoutAppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <Toolbar
      disableGutters
      variant="dense"
      component="footer"
      sx={theme => ({
        justifyContent: 'center',
        bgcolor: theme.palette.secondary.main,
      })}
    >
      <Typography fontSize={rem(10)} letterSpacing={2}>
        &copy; Jacob J Davis, {year}. All Rights Reserved.
      </Typography>
    </Toolbar>
  );
};
