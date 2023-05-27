'use client';

import { RepoType } from '@/types/repo';
import { Dosis } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

const dosis = Dosis({ weight: ['400', '600'], subsets: ['latin'] });

export function Project({ project, idx }: { project: RepoType; idx: number }) {
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<div
			className={`flex flex-col items-center gap-4 
			flip cursor-pointer min-w-[245px] max-w-[350px] w-full h-[350px]`}
			onClick={() => setIsFlipped((prev) => !prev)}
		>
			<div
				className={`${
					isFlipped && 'flip-content'
				} nonflip-content w-full h-full transition-transform duration-300`}
			>
				<div
					className={`w-full h-full absolute flex flex-col 
						project-side
					 p-4 flip-back`}
				>
					<h1 className='text-2xl flex-none'>{project.name}</h1>
					<article className='flex flex-col items-start gap-2 grow text-lg w-full'>
						<p>{project.description}</p>
						<h2 className='text-xl'>Стэк:</h2>
						<ul className='list-disc'>
							{project.stack.map((tech) => (
								<li className='ml-5' key={tech}>
									{tech}
								</li>
							))}
						</ul>
					</article>
					<div className='flex-none flex justify-center items-center gap-4'>
						<Link href={project.links[0]} target='_blank'>
							<FontAwesomeIcon
								icon={faGithub}
								style={{
									color: 'gray',
									width: 25,
									height: 25
								}}
							/>
						</Link>
						{project.links[1] && (
							<Link href={project.links[1]} target='_blank'>
								<FontAwesomeIcon
									icon={faFirefoxBrowser}
									style={{
										color: 'gray',
										width: 25,
										height: 25
									}}
								/>
							</Link>
						)}
					</div>
				</div>
				<div
					className={[
						`items-center justify-center text-7xl font-semibold w-full h-full absolute flex flex-col 
							project-side
						 p-4 flip-front`,
						dosis.className
					].join(' ')}
				>
					0{idx + 1}
				</div>
			</div>
		</div>
	);
}
