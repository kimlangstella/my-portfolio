import React from 'react'
interface TabButtonProps{
    active:boolean,
    selectTab:()=>void,
    children:string,
}
const TabButton: React.FC<TabButtonProps> = ({active,selectTab,children}) => {
    const buttonClasses=active ? "text-white border-b border-purple-700" : "text-[#ADB7BE]"
  return (
        <button onClick={selectTab}>
           <p className={`mr-3 font-semibold  hover:text-white ${buttonClasses}`}>
           {children}
           </p>
        </button>
  )
}

export default TabButton
