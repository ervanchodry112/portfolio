

const projects: Projects[] = [
   {
      title: 'Babang B2B',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut earum minus enim odit ex excepturi architecto pariatur impedit iste.',
      period: 'Aug 2023-Jan 2024',
      image: []
   }
]

const ProjectList = () => {
   let i = 0;
   return <>
      {
         projects.map(item => {
            return (
               <div key={i++}>
                  
               </div>
            )
         })
      }
   </>;
}

export default ProjectList;