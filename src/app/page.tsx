/** @format */

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ResumeCardList from '@/components/ResumeCardList';
import SkillList from '@/components/SkillList';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="w-full px-4 lg:*:px-72 text-white bg-primary">
				<section
					id="hero"
					className="bg-primary h-dvh md:h-[80vh] flex items-center justify-center overflow-clip">
					<div className="flex justify-center md:justify-between w-full h-full">
						<div className="my-auto text-center lg:text-start">
							<p className="w-full text-primaryText text-lg font-medium lg:text-xl">
								Hello!
							</p>
							<h1 className="font-black text-4xl lg:text-6xl">
								I&apos;m{' '}
								<span className="text-primaryText">
									Ervan
									Chodry
								</span>
							</h1>
							<h3 className="text-lg lg:text-3xl font-medium my-2 md:my-5">
								A Fullstack Web
								Developer
							</h3>
							<div className="flex justify-center lg:justify-start gap-2 mt-5 *:animation-all *:duration-150">
								<Link
									href="#"
									className="w-fit h-fit text-sm md:text-base border-2 border-primaryText bg-primaryText text-white py-2 px-3 font-medium rounded-lg active:ring-2 active:ring-secondaryText">
									Contact
									Me
								</Link>
								<Link
									href="#"
									className="w-fit h-fit text-sm md:text-base border-2 border-primaryText text-primaryText py-2 px-3 font-semibold rounded-lg hover:lg:bg-primaryText hover:text-white active:ring-2 active:ring-secondaryText">
									Download
									CV
								</Link>
							</div>
						</div>
						<div className="hidden md:flex items-end h-full">
							<Image
								className=""
								src="/heroes.png"
								width={500}
								height={100}
								alt="Ervan Chodry"
							/>
						</div>
					</div>
				</section>
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
								Lorem ipsum
								dolor sit amet
								consectetur
								adipisicing
								elit.
								Repudiandae odit
								animi vel
								molestias
								laborum. Quae
								aliquam,
								distinctio est
								eligendi enim
								quis
								voluptatibus
								necessitatibus
								consectetur iste
								suscipit fuga
								vero laboriosam
								aperiam.
							</span>
							<div className="flex gap-20 *:space-y-3 *:text-lg">
								<ul className="font-bold">
									<li>
										Nama
									</li>
									<li>
										Address
									</li>
									<li>
										Zip
										Code
									</li>
									<li>
										Email
									</li>
									<li>
										Phone
									</li>
								</ul>
								<ul className="text-secondaryText">
									<li>
										Ervan
										Chodry
									</li>
									<li>
										Lampung,
										Indonesia
									</li>
									<li>
										35365
									</li>
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
				<section
					id="services"
					className="py-10 space-y-5">
					<h2 className="text-center text-4xl text-primaryText font-bold">
						Resume
					</h2>
					<p className="text-center">
						Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
						Labore laboriosam culpa nobis
						officia veritatis. Delectus
						distinctio quo vero harum,
						perspiciatis error, consequatur
						totam eius in dolorum quam
						suscipit reiciendis provident
						voluptas iste vel magnam ea eum
						beatae inventore ipsam veniam?
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center hover:*:shadow-primaryText/70 hover:*:shadow-lg hover:*:scale-[103%] *:transition-all *:duration-300">
						<ResumeCardList />
					</div>
				</section>
				<section
					id="skills"
					className="py-10 space-y-5">
					<h2 className="text-center text-4xl text-primaryText font-bold">
						Skills
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
						<SkillList />
					</div>
				</section>
				<section
					id="projects"
					className="py-10 space-y-5">
					<h2 className="text-center text-4xl text-primaryText font-bold">
						Projects
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center hover:*:shadow-primaryText/70 hover:*:shadow-lg hover:*:scale-[103%] *:transition-all *:duration-300">
						
					</div>
				</section>
				<section
					id="contact"
					className="bg-secondary"></section>
			</main>
			<Footer />
		</>
	);
}
