import { RepoType } from '@/types/repo';

export const projects: RepoType[] = [
	{
		name: 'VK-internship-server',
		description: 'Backend-приложение для стажировки ВК',
		links: ['https://github.com/aselefth/vk-internship-server'],
		stack: ['NestJS', 'PostgreSQL']
	},
	{
		name: 'VK-internship-client',
		description: 'Frontend-приложение для стажировки ВК',
		links: ['https://github.com/aselefth/vk-internship-client'],
		stack: ['React', 'TS', 'Redux-Toolkit', 'Tailwind']
	},
    {
		name: 'ProgRate',
		description: 'Социальная сеть с real-time чатом, лентой, друзьями',
		links: ['https://github.com/aselefth/ProgRate'],
		stack: ['React', 'TS', 'Redux-Toolkit', 'Tailwind', 'SCSS Modules']
	},
    {
		name: 'Movies App',
		description: 'Приложение для поиска фильмов и информации о них',
		links: ['https://github.com/aselefth/movies-app', 'https://aselefth.github.io/movies-app/'],
		stack: ['React', 'TS', 'Redux-Toolkit']
	},
    {
		name: 'React Store',
		description: 'Магазин на React',
		links: ['https://github.com/aselefth/react-store', 'https://aselefth.github.io/react-store/'],
		stack: ['React', 'TS', 'Redux-Toolkit']
	}
];
