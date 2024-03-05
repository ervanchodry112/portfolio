/** @format */

'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="w-full fixed top-0">
			<div className="flex justify-between items-center w-full px-4 lg:px-72 py-4 text-white">
				<div>
					<Link href="/">
						<span className="flex items-center font-extrabold text-lg lg:text-2xl">
							Ervan Chodry
							<span className="text-3xl lg:text-4xl text-primaryText">
								.
							</span>
						</span>
					</Link>
				</div>
				<div className="flex md:hidden">
					<button
						type="button"
						onClick={handleNavbar}
						className="overflow-clip aspect-square p-1 *:transition-all *:duration-300">
						
						<Icon
							className={isOpen ? 'relative -inset-y-0' : "relative -inset-y-5"}
							icon="pajamas:close"
						/>
						<Icon
							className={isOpen ? 'relative inset-y-1' : "relative -inset-y-4"}
							icon="pajamas:hamburger"
						/>
					</button>
				</div>
				<nav className="hidden md:flex items-center">
					<ul className="hidden lg:flex gap-6 font-medium *:transition-all *:duration-150 hover:*:text-primaryText">
						<li className="">
							<Link href="#hero">
								Home
							</Link>
						</li>
						<li>
							<Link href="#about-me">
								About Me
							</Link>
						</li>
						<li>
							<Link href="#services">
								Services
							</Link>
						</li>
						<li>
							<Link href="#projects">
								Projects
							</Link>
						</li>
						<li>
							<Link href="#contact">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<nav className={isOpen ? 'md:hidden block' : 'hidden'}>
				<ul className="bg-primary text-white px-4 font-medium *:transition-all *:duration-150 hover:*:text-primaryText *:p-1 *:rounded-md *:text-center hover:*:bg-secondary">
					<li>
						<Link href="#hero">Home</Link>
					</li>
					<li>
						<Link href="#about-me">
							About Me
						</Link>
					</li>
					<li>
						<Link href="#services">
							Services
						</Link>
					</li>
					<li>
						<Link href="#projects">
							Projects
						</Link>
					</li>
					<li>
						<Link href="#contact">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
