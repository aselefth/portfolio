import { NavLinks } from './NavLinks';

export default function Navigation() {

	return (
		<nav
			className={`bg-inherit opacity-95 flex items-center justify-end px-10 
            sm:px-20 py-4 sm:py-6 gap-6 text-2xl 
            fixed top-0 left-0 z-10 w-full border-b-2 border-black`}
		>
			<NavLinks />
		</nav>
	);
}
