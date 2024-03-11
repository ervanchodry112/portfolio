import Image from "next/image";

const ProjectCard = (item: Projects) => {
   return (
      <div className="max-w-1/2 min-w-1/4 rounded-lg bg-[#1a1b1b] p-4">
         <Image src="/vercel.svg" className="aspect-video" width={300} height={300} alt="" />
			<h3 className="text-primaryText font-bold text-xl">
				{item.title}
			</h3>
			<h4 className="text-lg font-bold my-1">
				{item.period}
			</h4>
			<div className="text-secondaryText font-mono font-semibold tracking-normal">
				{/* {item.instance} */}
			</div>
		</div>
   );

}

export default ProjectCard;