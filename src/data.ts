import { v7 } from 'uuid';

export const articlesData: Array<Article> = [];

export const projectsData: Array<Project> = [
  {
    id: v7(),
    cover: 'portfolio/eimtrtdpoaegplvmhb2w',
    status: true,
    title: 'Baru Observatório',
    type: 'work',
    date_finished: '2023',
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
    date_finished: '2022',
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
    date_finished: '2019',
    tags: ['vuejs', 'nuxt', 'apexcharts', 'django'],
    published_on: 'https://ifgproduz.ifg.edu.br',
    featured: true
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'Domain Driven Diagram',
    type: 'side_project',
    date_finished: null,
    tags: ['hono', 'svelte'],
    published_on: 'https://dddiagram.baraus.dev',
    featured: false
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'Vanguard Ranks',
    type: 'side_project',
    date_finished: '2024',
    tags: ['minecraft', 'java'],
    published_on: 'https://spigotmc.org/resources/vanguardranks.117971/',
    featured: false
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'BetterSmithing',
    type: 'side_project',
    date_finished: '2022',
    tags: ['minecraft', 'java'],
    published_on: 'https://spigotmc.org/resources/better-smithing.107701/',
    featured: false
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'PUC Gestão',
    type: 'work',
    date_finished: null,
    tags: ['react', 'django', 'airflow'],
    published_on: null,
    featured: false
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'Bacharelado em Ciência da Computação',
    type: 'side_project',
    date_finished: '2022',
    tags: ['react', 'directus'],
    published_on: 'https://bcc.ifg.edu.br',
    featured: false
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'IFG Comissão Própria de Avaliação',
    type: 'college',
    date_finished: '2019',
    tags: ['vuejs', 'django', 'apexcharts'],
    published_on: null,
    featured: false
  },
  {
    id: v7(),
    cover: null,
    status: true,
    title: 'Processo Interno de Avaliação',
    type: 'college',
    date_finished: '2019',
    tags: ['yii2', 'apexcharts'],
    published_on: null,
    featured: false
  }
];
