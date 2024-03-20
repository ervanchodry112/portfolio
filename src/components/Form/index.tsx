/** @format */
'use client';

import Image from 'next/image';
import { useState } from 'react';

const Form = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(true);

	const handleSubmit = async () => {


		setIsLoading(true);

		const submitData = {
			name: name,
			email: email,
			subject: subject,
			message: message,
		};
		const response = await fetch('/api/send', {
			method: 'POST',
			body: JSON.stringify(submitData),
			headers: {
				'content-type': 'application/json',
			},
		});
		const data = await response.json();

		if (response.ok) {
		}

		console.log({ data });

      // console.log(response);
      setIsLoading(false);
	};

	return (
		<section className="py-10">
			<div className="bg-white flex justify-center max-h-full rounded-md overflow-clip">
				<Image
					className="-scale-x-100 object-cover"
					src={'/enhanced (1).jpg'}
					width={300}
					height={300}
					alt=""
				/>
				<div className="w-5/6 flex flex-col space-y-5 py-5 bg-white h-s p-4 *:p-2 *:rounded-md *:border *:border-gray-400 *:text-primary">
					<input
						onChange={(e) => {
							setName(e.target.value);
						}}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
					/>
					<input
						onChange={(e) => {
							setEmail(
								e.target.value
							);
						}}
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
					/>
					<input
						onChange={(e) => {
							setSubject(
								e.target.value
							);
						}}
						type="text"
						name="subject"
						id="subject"
						placeholder="Subject"
					/>
					<textarea
						onChange={(e) => {
							setMessage(
								e.target.value
							);
						}}
						name="message"
						id="message"
						className="resize-none"
						cols={30}
						rows={5}
						placeholder="Message"></textarea>

					<button
						onClick={handleSubmit}
						className={
							'font-semibold border-none active:ring-2 active:ring-secondaryText ' +
							(isLoading
								? 'bg-[#c47c41]'
								: 'bg-primaryText')
						}
						disabled={isLoading}>
						<span className="text-white">
							Send Message
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Form;
