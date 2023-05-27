import { projects } from '@/utils/data';
import { Project } from './Project';

export function ProjectsSection() {
	return (
		<section
			className={`flex flex-col items-start w-full gap-6`}
			id='projects'
		>
			<h1 className='text-6xl section-border w-full pb-4'>
				Проекты
			</h1>
			<div
				className={`grid grid-cols-1 place-items-center gap-4 
                w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`}
			>
				{projects.map((prj, idx) => (
					<Project key={prj.name} project={prj} idx={idx} />
				))}
			</div>
		</section>
	);
}
