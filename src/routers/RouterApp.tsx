import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutDefault, LayoutHome } from 'layouts/LayoutDefault';
import {
  ROUTE_PATH_ABOUT,
  ROUTE_PATH_EXPERIENCE,
  ROUTE_PATH_EXPERTISE,
  ROUTE_PATH_PROJECTS,
  ROUTE_PATH_QUOTES,
} from 'constants/routes.constants';
import { ViewExpertise } from 'views/ViewExpertise';
import { ViewAbout } from 'views/ViewAbout';
import { ViewAnimeQuotes } from 'views/ViewAnimeQuotes';
import { ViewHome } from 'views/ViewHome';
import { ViewExperience } from 'views/ViewExperience';

export const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route path="/" element={<ViewHome />} />
      </Route>
      <Route path="/" element={<LayoutDefault />}>
        <Route path={ROUTE_PATH_ABOUT} element={<ViewAbout />} />
        <Route path={ROUTE_PATH_EXPERTISE} element={<ViewExpertise />} />
        <Route path={ROUTE_PATH_EXPERIENCE} element={<ViewExperience />} />
        <Route path={ROUTE_PATH_PROJECTS} element={<Temp title="projects" />} />
        <Route path={ROUTE_PATH_QUOTES} element={<ViewAnimeQuotes />} />
      </Route>

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

interface IProps {
  title: string;
}

const Temp = ({ title }: IProps) => {
  return <h2>{title}</h2>;
};
