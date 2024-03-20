"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

const SkillCard = (skill: Skills) => {
  return (
    <div className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-lg bg-[#1a1b1b] p-4 text-2xl font-semibold text-white *:transition-all *:duration-500">
      <Icon
        icon={skill.icon}
        width="2em"
        height="2em"
        className="absolute scale-150 group-hover:-translate-y-0 group-hover:scale-100 group-hover:opacity-40"
      />
      <span className="text-white opacity-0 delay-200 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100">
        {skill.title}
      </span>
    </div>
  );
};

export default SkillCard;
