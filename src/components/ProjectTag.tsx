import React from 'react'
interface ProjectTagProps{
    name:string,
    onclick: (tag:string)=> void,
    isSelected:boolean,
}
const ProjectTag:React.FC<ProjectTagProps> = ({name,onclick,isSelected}) => {
    const buttonStyles = isSelected ? "text-white bg-purple-500 rounded-lg " : "text-[#ADB7BE] border-slate-600 "
  return (
    <div>
      <button className={`${buttonStyles} px-4 py-2 text-white cursor-pointer `} onClick={()=> onclick(name)}>{name}</button>
    </div>
  )
}

export default ProjectTag
