import {
	faTelegram,
	faVk,
	faGithub,
	faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { GmailLink } from './GmailLink';
import { GmailForm } from './GmailForm';

export function ContactsSection() {
	return (
		<section
			className='flex flex-col items-start w-full gap-6'
			id='contacts'
		>
			<h1 className='text-6xl section-border w-full pb-4'>
				Связаться со мной
			</h1>
			<article className='flex flex-col sm:flex-row items-start gap-4 justify-between w-full'>
				<div className='flex items-center gap-4'>
					<Link href='https://vk.com/mafioznik30' target='_blank'>
						<FontAwesomeIcon
							icon={faVk}
							style={{
								color: 'gray',
								width: 30,
								height: 30
							}}
						/>
					</Link>
					<Link href='https://t.me/aselefth' target='_blank'>
						<FontAwesomeIcon
							icon={faTelegram}
							style={{
								color: 'gray',
								width: 30,
								height: 30
							}}
						/>
					</Link>
					<Link href='https://github.com/aselefth' target='_blank'>
						<FontAwesomeIcon
							icon={faGithub}
							style={{
								color: 'gray',
								width: 30,
								height: 30
							}}
						/>
					</Link>
					<GmailLink />
				</div>
				<GmailForm />
			</article>
		</section>
	);
}
