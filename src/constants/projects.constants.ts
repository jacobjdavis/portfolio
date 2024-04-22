import { IProject } from 'types/projects.types';

export const PROJECTS: IProject[] = [
  {
    title: 'Portfolio',
    description: 'Personal Portfolio Website.',
    keywords: ['React', 'Typescript', 'RTK Query', 'Material UI', 'Vite'],
    github: 'https://github.com/jacobjdavis/portfolio',
  },
  {
    title: 'Quotes App',
    description: 'Random Anime Quotes',
    keywords: [
      'React',
      'Typescript',
      'RTK Query',
      'Material UI',
      'Vite',
      'Express',
      'fetch',
    ],
    url: 'https://jacobjdavis.com/quotes',
    github: 'https://github.com/jacobjdavis/api',
  },
  {
    title: 'Bowling Calculator',
    description: 'Calculates Bowling score for in progress games (hard coded)',
    keywords: ['React', 'Typescript', 'Material UI', 'Vite'],
    url: 'https://jacobjdavis.com/bowling',
    github: 'https://github.com/jacobjdavis/portfolio',
  },
];
