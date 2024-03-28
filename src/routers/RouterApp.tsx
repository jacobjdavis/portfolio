import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutDefault, LayoutHome } from 'layouts/LayoutDefault';
import {
  ROUTE_PATH_ABOUT,
  ROUTE_PATH_EXPERIENCE,
  ROUTE_PATH_EXPERTISE,
  ROUTE_PATH_PROJECTS,
} from 'constants/routes.constants';
import { ViewExpertise } from 'views/ViewExpertise';

export const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route path="/" element={<h2>hello</h2>} />
      </Route>
      <Route path="/" element={<LayoutDefault />}>
        <Route path={ROUTE_PATH_ABOUT} element={<Temp title="about" />} />
        <Route path={ROUTE_PATH_EXPERTISE} element={<ViewExpertise />} />
        <Route path={ROUTE_PATH_EXPERIENCE} element={<Temp title="exp" />} />
        <Route path={ROUTE_PATH_PROJECTS} element={<Temp title="projects" />} />
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
