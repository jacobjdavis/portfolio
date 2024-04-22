import { Outlet, useLocation } from 'react-router-dom';

import { Container, Stack } from '@mui/material';

import { LayoutAppFooter } from 'components/LayoutAppFooter';
import { LayoutAppHeader } from 'components/LayoutAppHeader';
import { LayoutViewHeader } from 'components/LayoutViewHeader';

import {
  FULL_SCREEN_ROUTES,
  ROUTES_PATH_TO_LABEL_MAP,
} from 'constants/routes.constants';

export const LayoutHome = () => (
  <>
    <LayoutAppHeader />
    <Stack component="main" height="100%">
      <Outlet />
      <LayoutAppFooter />
    </Stack>
  </>
);

export const LayoutDefault = () => {
  const { pathname } = useLocation();

  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[pathname] ?? '404 - Not Found';

  const width = FULL_SCREEN_ROUTES.includes(pathname) ? 'xl' : 'lg';

  return (
    <>
      <LayoutAppHeader />
      <Stack component="main" height="100%">
        <LayoutViewHeader title={viewTitle} />
        <Container sx={{ py: 10, flexGrow: 1 }} maxWidth={width}>
          <Outlet />
        </Container>
        <LayoutAppFooter />
      </Stack>
    </>
  );
};
