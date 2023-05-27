'use client';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function GmailForm() {
	const formRef = useRef<HTMLFormElement>(null);

	const handleSendLetter = (e: FormEvent) => {
		e.preventDefault();
		if (formRef?.current) {
			emailjs
				.sendForm(
					'service_tk9mu7g',
					'template_9i6ko0n',
					formRef?.current,
					'U-1b2VJJB7-2d4Y9f'
				)
				.catch((e) => console.log(e));
		}
	};

	return (
		<form
			onSubmit={handleSendLetter}
			ref={formRef}
			className='grid grid-cols-1 gap-4 w-1/3 min-w-[340px] md:w-2/3 lg:w-1/2 max-w-[700px]'
		>
			<label htmlFor='name' className='text-xl'>
				Ваше имя
			</label>
			<input
				type='text'
				name='user_name'
				id='name'
				className={`p-2 text-lg h-10 border-2 outline-none input 
				`}
			/>
			<label htmlFor='email' className='text-xl'>
				Ваша почта
			</label>
			<input
				type='text'
				id='email'
				name='user_email'
				className={`p-2 text-lg h-10 border-2 outline-none input 
			`}
			/>
			<label htmlFor='message' className='text-xl'>
				Сообщение
			</label>
			<textarea
				id='message'
				name='message'
				className={`resize-none p-2 text-lg h-40  border-2 outline-none input 
				`}
			/>
			<button
				type='submit'
				className={`
						 btn
				text-xl  px-4 py-2 
				 transition-colors`}
			>
				Отправить
			</button>
		</form>
	);
}
