'use client';

export function NavLinks() {
	function scrollIntoView(tag: string) {
		const ref = document.querySelector(tag);
		if (ref) {
			ref.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest'
			});
		}
	}
	return (
		<>
			<button
				className={`nav-link`}
				onClick={() => scrollIntoView('#aboutMe')}
			>
				Обо мне
			</button>
			<button
				className={`nav-link `}
				onClick={() => scrollIntoView('#projects')}
			>
				Проекты
			</button>
			<button
				onClick={() => scrollIntoView('#contacts')}
				className={`nav-link`}
			>
				Контакты
			</button>
		</>
	);
}
