'use client';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export function GmailLink() {
	const [isTriggered, setIsTriggered] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsTriggered(false);
		}, 4000);
	}, [isTriggered]);
	function handleOnClick() {
		navigator.clipboard.writeText('andrei200287@gmail.com');
		setIsTriggered(true);
	}
	return (
		<>
			<span onClick={handleOnClick} className='cursor-pointer'>
				<FontAwesomeIcon
					icon={faGoogle}
					style={{ color: 'gray', width: 30, height: 30 }}
				/>
			</span>
			{isTriggered && (
				<p className='fixed z-30 top-5 left-[50%] px-4 py-2 bg-orange-300 text-black'>
					Скопировано
				</p>
			)}
		</>
	);
}
