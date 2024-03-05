'use client'

import { Icon } from "@iconify/react/dist/iconify.js";

const SkillCard = (skill: Skills) => {
   return (
		<div
			className="group flex flex-col items-center aspect-square justify-center gap-4 rounded-lg bg-[#1a1b1b] p-4 text-white text-2xl font-semibold *:transition-all *:duration-500">
			<Icon
				icon={skill.icon}
				width="2em"
				height="2em"
				className="scale-150 absolute group-hover:scale-100 group-hover:-translate-y-0 group-hover:opacity-40"
			/>
			<span className="delay-200 opacity-0 text-white group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100">
				{skill.title}
			</span>
		</div>
   );
}

export default SkillCard;