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
		<>
			{skills.map((item) => {
				return (
					<SkillCard key={id++} {...item} />
				);
			})}
		</>
	);
};

export default SkillList;
