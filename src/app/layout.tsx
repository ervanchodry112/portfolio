/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ervan Chodry',
	description: "Ervan Chodry's Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="scroll-smooth">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

declare global {
	interface ResumeData {
		id: number;
		periods: string;
		title: string;
		instance: string;
		description: string;
	}

	interface Skills{
		title: string;
		icon: string;
	}

	interface Projects {
		title: string,
		period: string,
		image: string[],
		description: string
	}

}
