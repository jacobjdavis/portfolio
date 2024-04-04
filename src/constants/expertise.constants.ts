import { IExpertise } from 'types/expertise.types';

export const EXPERTISE: IExpertise[] = [
  {
    name: 'Front End',
    skills: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Material UI', icon: 'devicon-materialui-plain' },
      { name: 'Redux', icon: 'devicon-redux-original' },
      { name: 'React Router', icon: 'devicon-reactrouter-plain' },
      { name: 'Vite', icon: 'devicon-vitejs-plain' },
      { name: 'Vitest', icon: 'devicon-vitest-plain' },
      { name: 'Jest', icon: 'devicon-jest-plain' },
      { name: 'Storybook', icon: 'devicon-storybook-plain' },
      { name: 'Vue & Vuex', icon: 'devicon-vuejs-plain' },
    ],
  },
  {
    name: 'Back End',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Postgresql', icon: 'devicon-postgresql-plain' },
    ],
  },
];
