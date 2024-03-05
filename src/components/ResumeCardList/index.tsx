/** @format */

import Card from './Card';

const resumeData: ResumeData[] = [
	{
		id: 1,
		periods: '2020-2024',
		title: `Bachelor's Degree of Computer Science`,
		instance: 'Lampung University',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quidem quisquam vel quam ut corrupti laborum aliquam at necessitatibus?',
	},
	{
		id: 2,
		periods: '2023',
		title: `Intern Fullstack Web Developer`,
		instance: 'PT. Sentra Vidya Utama',
		description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quidem quisquam vel quam ut corrupti laborum aliquam at necessitatibus?',
	},
	{
		id: 3,
		periods: '2022-2023',
		title: `Head of Technology Division`,
		instance: 'Student Cooperation of Lampung University',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quidem quisquam vel quam ut corrupti laborum aliquam at necessitatibus?',
	},
	{
		id: 4,
		periods: '2021-2022',
		title: `Graphics Design of Members Creativity Unit`,
		instance: 'Student Cooperation of Lampung University',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quidem quisquam vel quam ut corrupti laborum aliquam at necessitatibus?',
	},
];

const ResumeCardList = () => {
	return (
		<>
			{resumeData.map((data) => {
				return (
					<Card key={data.id} {...data} />
				);
			})}
		</>
	);
};

export default ResumeCardList;
