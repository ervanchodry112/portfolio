/** @format */

'use client';

import { Icon } from '@iconify/react/dist/iconify.js';

const Contact = () => {
	return (
		<section
			id="contact"
			className="py-10 space-y-10">
			<h2 className="text-center text-4xl text-primaryText font-bold">
				Contact Me
			</h2>
			<div className="flex justify-evenly items-start *:w-1/3">
				<div className="flex flex-col items-center justify-center space-y-3 text-center font-semibold">
					<div className="w-fit aspect-square rounded-full bg-[#1a1b1b] p-5">
						<Icon
							icon="mdi:location"
							width="2rem"
							className="text-primaryText"
						/>
					</div>
					<h5 className="text-lg">ADDRESS</h5>
					<p className="text-base">
						Lampung, Indonesia
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 text-center font-semibold">
					<div className="w-fit aspect-square rounded-full bg-[#1a1b1b] p-5">
						<Icon
							icon="mdi:phone"
							width="2rem"
							className="text-primaryText"
						/>
					</div>
					<h5 className="text-lg">
						CONTACT NUMBER
					</h5>
					<p className="text-base">
						+62 896 7311 6170
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 text-center font-semibold">
					<div className="w-fit aspect-square rounded-full bg-[#1a1b1b] p-5">
						<Icon
							icon="dashicons:email-alt"
							width="2rem"
							className="text-primaryText"
						/>
					</div>
					<h5 className="text-lg">EMAIL</h5>
					<p className="text-base">
						ervanchodry112@gmail.com
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 text-center font-semibold">
					<div className="w-fit aspect-square rounded-full bg-[#1a1b1b] p-5">
						<Icon
							icon="dashicons:admin-site"
							width="2rem"
							className="text-primaryText"
						/>
					</div>
					<h5 className="text-lg">WEBSITE</h5>
					<p className="text-base">
						ervanchodry.com
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
