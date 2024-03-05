/** @format */

const Card = (resumeData: ResumeData) => {
	return (
		<div className="rounded-lg bg-[#1a1b1b] p-4">
			<h3 className="text-primaryText font-bold text-lg">
				{resumeData.periods}
			</h3>
			<h4 className="text-xl font-bold my-1">
				{resumeData.title}
			</h4>
			<div className="text-secondaryText font-mono font-semibold tracking-normal">
				{resumeData.instance}
			</div>
			<p className="text-secondaryText mt-4 text-lg">
				{resumeData.description}
			</p>
		</div>
	);
};

export default Card;
