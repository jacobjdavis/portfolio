export const ROUTE_PATH_ABOUT = '/about';
export const ROUTE_PATH_STUDY = '/study';
export const ROUTE_PATH_CONTACT = '/contact';
export const ROUTE_PATH_EXPERTISE = '/expertise';
export const ROUTE_PATH_PROJECTS = '/projects';
export const ROUTE_PATH_QUOTES = '/quotes';
export const ROUTE_PATH_EXPERIENCE = '/experience';
export const ROUTE_PATH_RESUME = 'https://jacob-davis.tiiny.site';
export const ROUTE_PATH_LINKEDIN = 'https://www.linkedin.com/in/davisjjacob/';
export const ROUTE_PATH_GITHUB = 'https://github.com/jacobjdavis';

export const ROUTE_LABEL_ABOUT = 'About';
export const ROUTE_LABEL_RESUME = 'Resume';
export const ROUTE_LABEL_CONTACT = 'Contact';
export const ROUTE_LABEL_EXPERTISE = 'Expertise';
export const ROUTE_LABEL_PROJECTS = 'Projects';
export const ROUTE_LABEL_EXPERIENCE = 'Experience';
export const ROUTE_LABEL_QUOTES = 'Quotes App';
export const ROUTE_LABEL_LINKEDIN = 'devicon-linkedin-plain colored';
export const ROUTE_LABEL_GITHUB = 'devicon-github-original colored';

export const ROUTES_PUBLIC: {
  path: string;
  label: string;
  isIcon?: boolean;
  isAnchor?: boolean;
}[] = [
  {
    path: ROUTE_PATH_ABOUT,
    label: ROUTE_LABEL_ABOUT,
  },
  {
    path: ROUTE_PATH_EXPERTISE,
    label: ROUTE_LABEL_EXPERTISE,
  },
  {
    path: ROUTE_PATH_EXPERIENCE,
    label: ROUTE_LABEL_EXPERIENCE,
  },
  {
    path: ROUTE_PATH_PROJECTS,
    label: ROUTE_LABEL_PROJECTS,
  },
  {
    path: ROUTE_PATH_QUOTES,
    label: ROUTE_LABEL_QUOTES,
  },
  {
    isAnchor: true,
    path: ROUTE_PATH_RESUME,
    label: ROUTE_LABEL_RESUME,
  },
  {
    isAnchor: true,
    isIcon: true,
    path: ROUTE_PATH_LINKEDIN,
    label: ROUTE_LABEL_LINKEDIN,
  },
  {
    isAnchor: true,
    isIcon: true,
    path: ROUTE_PATH_GITHUB,
    label: ROUTE_LABEL_GITHUB,
  },
];

export const ROUTES_PATH_TO_LABEL_MAP: Record<string, string> = {
  [ROUTE_PATH_ABOUT]: ROUTE_LABEL_ABOUT,
  [ROUTE_PATH_CONTACT]: ROUTE_LABEL_CONTACT,
  [ROUTE_PATH_EXPERTISE]: ROUTE_LABEL_EXPERTISE,
  [ROUTE_PATH_PROJECTS]: ROUTE_LABEL_PROJECTS,
  [ROUTE_PATH_QUOTES]: ROUTE_LABEL_QUOTES,
  [ROUTE_PATH_EXPERIENCE]: ROUTE_LABEL_EXPERIENCE,
};
