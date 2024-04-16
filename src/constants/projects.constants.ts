import { IProject } from 'types/projects.types';

export const PROJECTS: IProject[] = [
  {
    title: 'Portfolio',
    description: 'Personal Portfolio Website.',
    keywords: ['React', 'Typescript', 'RTK Query', 'Material UI', 'Vite'],
    url: 'www.google.com',
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
    url:
      import.meta.env.MODE === 'development'
        ? 'http://localhost:3000/quotes'
        : 'https://99.20.90.68:9000/quotes',
    github: 'https://github.com/jacobjdavis/api',
  },
];
