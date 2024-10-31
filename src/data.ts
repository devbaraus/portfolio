import { v7 } from 'uuid';

export const projectsData: Array<Project> = [
  {
    id: v7(),
    cover: 'portfolio/eimtrtdpoaegplvmhb2w',
    status: true,
    title: 'Baru Observatório',
    type: 'work',
    date_finished: null,
    tags: ['nextjs', 'directus'],
    published_on: 'https://baruobservatorio.com.br',
    featured: true
  },
  {
    id: v7(),
    cover: 'portfolio/qqi3hykrmwkij99siywc',
    status: true,
    title: 'Muggs Shop',
    type: 'side_project',
    date_finished: null,
    tags: ['shopify', 'remixjs', 'tailwind'],
    published_on: 'https://muggs.baraus.dev',
    featured: true
  },
  {
    id: v7(),
    cover: 'portfolio/jv61byt5ny9yrf6thiya',
    status: true,
    title: 'IFG Produz',
    type: 'college',
    date_finished: null,
    tags: ['vuejs', 'nuxt', 'apexcharts', 'django'],
    published_on: 'https://ifgproduz.ifg.edu.br',
    featured: true
  }
];
