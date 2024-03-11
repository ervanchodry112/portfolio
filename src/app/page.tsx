/** @format */

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Heroes from '@/components/Heroes';
import Navbar from '@/components/Navbar';
import ProjectList from '@/components/ProjectList';
import ResumeCardList from '@/components/ResumeCardList';
import SkillList from '@/components/SkillList';
import { SparklesCore } from '@/components/ui/sparkles';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="w-full px-4 lg:*:px-72 text-white bg-primary">
				<Heroes />

				<About />

				<ResumeCardList />

				<SkillList />

				<ProjectList />

				<Contact />
			</main>
			<Footer />
		</>
	);
}
