/** @format */
'use client';
import { Icon } from '@iconify/react';
import SkillCard from './SkillCard';

const skills: Skills[] = [
	{
		title: 'Laravel',
		icon: 'logos:laravel',
	},
	{
		title: 'Codeigniter',
		icon: 'logos:codeigniter-icon',
	},
	{
		title: 'TailwindCSS',
		icon: 'logos:tailwindcss-icon',
	},
	{
		title: 'Next JS',
		icon: 'skill-icons:nextjs-light',
	},
	{
		title: 'HTML',
		icon: 'skill-icons:html',
	},
	{
		title: 'Javascript',
		icon: 'skill-icons:javascript',
	},
	{
		title: 'Typescript',
		icon: 'skill-icons:typescript',
	},
	{
		title: 'Python',
		icon: 'logos:python',
	},
];

const SkillList = () => {
	let id = 0;
	return (
		<section
			id="skills"
			className="py-10 space-y-5">
			<h2 className="text-center text-4xl text-primaryText font-bold">
				Skills
			</h2>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
				{skills.map((item) => {
					return (
						<SkillCard
							key={id++}
							{...item}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default SkillList;
