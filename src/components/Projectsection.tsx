'use client'
import React ,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData=[
    {
        id:1,
        title: "Check Romlek",
        description:"dkla",
        image:"/image/projects/1.jpg",
        tag:["All","Web"]
    },
    {
        id:2,
        title: "Check Romlek",
        description:"dkla",
        image:"/image/projects/2.jpg",
        tag:["All","Web"]
    },
    {
      id:2,
      title: "Check Romlek",
      description:"dkla",
      image:"/image/projects/2.jpg",
      tag:["All","Web"]
  },
]
const Projectsection = () => {
  const[tag,setTag]= useState("All");
  const handleTabChange = (newTag:any)=>{
    setTag(newTag);
  }
  return (
    <div>
      <h2 className='font-semibold text-2xl text-center mt-7 text-white'>My project</h2>
      <div className='text-white flex flex-row justify-center p-2'>
        <ProjectTag onclick={handleTabChange} name={"All"} isSelected={tag=="All"}/>
        <ProjectTag onclick={handleTabChange} name={"Web"} isSelected={tag=="Web"}/>
      </div>
      <div className='flex flex-row gap-56 justify-center items-center'>
        {projectData.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/> )}
      </div>
    </div>
  )
}

export default Projectsection
