/** @format */

import Link from 'next/link';
import Copyright from './Copyright';
import Links from './Links';

const Footer = () => {
	return (
		<footer className="w-full">
			<Links />
			<Copyright />
		</footer>
	);
};

export default Footer;
