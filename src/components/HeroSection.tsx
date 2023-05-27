import Image from 'next/image';
import profileImage from '../../public/me.jpg';

export function HeroSection() {
	return (
		<section
			className='flex flex-col items-start w-full gap-6'
			id='aboutMe'
		>
			<h1 className='text-6xl section-border w-full pb-4'>Обо мне</h1>
			<div className='flex flex-col md:flex-row gap-10 w-full justify-around'>
				<p className='sm:text-6xl text-4xl max-w-[30rem] leading-14'>
					<span className='block'>Привет,</span>меня зовут Андрей, мне
					20 лет, учусь на 3 курсе РТУ МИРЭА. Я занимаюсь
					веб-разработкой 1 год. Пишу на React/NextJs, NestJs.
				</p>
				<Image
					src={profileImage}
					alt='me'
					width={450}
					height={10000}
					className='object-cover'
				/>
			</div>
		</section>
	);
}
