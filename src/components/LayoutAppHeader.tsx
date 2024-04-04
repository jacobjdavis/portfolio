import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { rem } from 'polished';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  paperClasses,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ROUTES_PUBLIC } from 'constants/routes.constants';

const StyledLink = styled(NavLink)<{ isLogo?: boolean; isMobile?: boolean }>(
  ({ theme, isLogo, isMobile }) => ({
    fontWeight: 700,
    letterSpacing: 2,
    fontSize: rem(12),
    textDecoration: 'none',
    padding: theme.spacing(0, 2),
    color: theme.palette.primary.main,
    ...(isMobile && {
      margin: theme.spacing(1),
      minWidth: '200px',
    }),
    ...(!isLogo && {
      '&.active': {
        color: theme.palette.text.primary,
      },
    }),
  }),
);

export const LayoutAppHeader = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuActive(isActive => !isActive);
  };

  const handleCloseMenu = () => {
    setIsMenuActive(false);
  };

  const Component = isMobile ? Drawer : Box;

  return (
    <AppBar sx={theme => ({ bgcolor: theme.palette.common.white })}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <StyledLink isLogo to="/">
          Jacob J Davis
        </StyledLink>
        {isMobile && (
          <IconButton onClick={handleToggleMenu}>
            <MenuIcon color="primary" />
          </IconButton>
        )}
        <Component
          component="nav"
          open={isMenuActive}
          onClose={handleCloseMenu}
          sx={{ [`.${paperClasses.root}`]: { py: 2 } }}
        >
          {ROUTES_PUBLIC.map(({ path, label, isAnchor, isIcon }) => (
            <StyledLink
              to={path}
              isMobile={isMobile}
              key={`route-${label}`}
              onClick={handleCloseMenu}
              target={isAnchor ? '_blank' : '_self'}
            >
              {isIcon ? <i className={label} /> : label}
            </StyledLink>
          ))}
        </Component>
      </Toolbar>
    </AppBar>
  );
};
