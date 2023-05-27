import { Metadata } from 'next';
import Image from 'next/image';
import profileImage from '../../public/me.jpg';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactsSection } from '@/components/ContactsSection';

export const metadata: Metadata = {
	title: 'Aselefth - Portfolio',
	description: 'This is a portfolio of web-developer Andrey'
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
			<ContactsSection />
		</>
	);
}
