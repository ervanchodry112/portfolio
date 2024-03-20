/** @format */

import Image from "next/image";

const About = () => {
	return (
		<section
			id="about-me"
			className="py-20">
			<div className="flex justify-between shadow-lg rounded-lg overflow-clip">
				<div className="w-fit">
					<Image
						src="/enhanced.jpg"
						className="-scale-x-100"
						width={400}
						height={100}
						alt="Ervan Chodry"
					/>
				</div>
				<div className="w-full p-6 space-y-12 flex flex-col">
					<h2 className="text-start font-bold text-4xl text-primaryText">
						About Me
					</h2>
					<span className="text-secondaryText text-lg font-medium">
						Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
						Repudiandae odit animi vel
						molestias laborum. Quae aliquam,
						distinctio est eligendi enim
						quis voluptatibus necessitatibus
						consectetur iste suscipit fuga
						vero laboriosam aperiam.
					</span>
					<div className="flex gap-20 *:space-y-3 *:text-lg">
						<ul className="font-bold">
							<li>Nama</li>
							<li>Address</li>
							<li>Zip Code</li>
							<li>Email</li>
							<li>Phone</li>
						</ul>
						<ul className="text-secondaryText">
							<li>Ervan Chodry</li>
							<li>
								Lampung,
								Indonesia
							</li>
							<li>35365</li>
							<li>
								ervanchodry112@gmail.com
							</li>
							<li>
								+62896-7311-6170
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
