/** @format */

import ProjectCard from './ProjectCard';

const projects: Projects[] = [
	{
		title: 'Babang B2B',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
		period: 'Aug 2023-Jan 2024',
		image: [],
	},
	{
		title: 'Babang B2B',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
		period: 'Aug 2023-Jan 2024',
		image: [],
	},
	{
		title: 'Babang B2B',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
		period: 'Aug 2023-Jan 2024',
		image: [],
	},
	{
		title: 'Babang B2B',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
		period: 'Aug 2023-Jan 2024',
		image: [],
	},
	{
		title: 'Babang B2B',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
		period: 'Aug 2023-Jan 2024',
		image: [],
	},
	{
		title: 'Babang B2B',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
		period: 'Aug 2023-Jan 2024',
		image: [],
	},
];

const ProjectList = () => {
	let i = 0;
	return (
		<section
			id="projects"
			className="py-10 space-y-5">
			<h2 className="text-center text-4xl text-primaryText font-bold">
				Projects
			</h2>
			<div className="flex w-full overflow-x-auto items-center gap-5 justify-center *:transition-all *:duration-300">
				{projects.map((item) => {
					return (
						<ProjectCard
							key={i++}
							{...item}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectList;
