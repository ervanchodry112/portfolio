/** @format */

'use client'

import Link from "next/link";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";

const Heroes = () => {
	return (
		
			<section
				id="hero"
				className="bg-primary h-dvh flex items-center justify-center overflow-hidden">
				<div className="w-full absolute inset-0 h-screen">
					<SparklesCore
						id="tsparticlesfullpage"
						background="transparent"
						minSize={0.6}
						maxSize={1.4}
						particleDensity={100}
						className="w-full h-full"
						particleColor="#FFFFFF"
					/>
				</div>
				<div className="flex justify-center md:justify-between w-full h-full z-10">
					<div className="my-auto text-center md:text-start">
						<p className="w-full text-primaryText text-lg font-medium md:text-xl">
							Hello!
						</p>
						<h1 className="font-black text-4xl md:text-6xl">
							I&apos;m{' '}
							<span className="text-primaryText">
								Ervan Chodry
							</span>
						</h1>
						<h3 className="text-lg md:text-3xl font-medium my-2 md:my-5">
							A Fullstack Web
							Developer
						</h3>
						<div className="flex justify-center md:justify-start gap-2 mt-5 *:animation-all *:duration-150">
							<Link
								href="#"
								className="w-fit h-fit text-sm md:text-base border-2 border-primaryText bg-primaryText text-white py-2 px-3 font-medium rounded-lg active:ring-2 active:ring-secondaryText">
								Contact Me
							</Link>
							<Link
								href="#"
								className="w-fit h-fit text-sm md:text-base border-2 border-primaryText text-primaryText py-2 px-3 font-semibold rounded-lg hover:md:bg-primaryText hover:text-white active:ring-2 active:ring-secondaryText">
								Download CV
							</Link>
						</div>
					</div>
					<div className="hidden md:flex items-center h-full">
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
	);
};

export default Heroes;
