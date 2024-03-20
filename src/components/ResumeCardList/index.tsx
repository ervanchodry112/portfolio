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
		<section
			id="services"
			className="py-10 space-y-5">
			<h2 className="text-center text-4xl text-primaryText font-bold">
				Resume
			</h2>
			<p className="text-center">
				Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Labore laboriosam culpa nobis
				officia veritatis. Delectus distinctio quo vero
				harum, perspiciatis error, consequatur totam
				eius in dolorum quam suscipit reiciendis
				provident voluptas iste vel magnam ea eum beatae
				inventore ipsam veniam?
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center hover:*:shadow-primaryText/70 hover:*:shadow-lg hover:*:scale-[103%] *:transition-all *:duration-300">
				{resumeData.map((data) => {
					return (
						<Card
							key={data.id}
							{...data}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default ResumeCardList;
