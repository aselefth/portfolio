import Navigation from '@/components/Navigation';
import './globals.css';
import { PT_Sans_Narrow } from 'next/font/google';

const ptSans = PT_Sans_Narrow({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700']
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={[ptSans.className, 'mb-20 relative'].join(' ')}>
				<Navigation />
				<main className='flex flex-col items-center justify-center px-10 sm:px-20 mt-24 gap-36'>
					{children}
				</main>
			</body>
		</html>
	);
}
