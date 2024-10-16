import React from "react";
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProp {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProp> = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-64 md:h-80 lg:h-34  rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: 180,
          padding: 4
        }}
      >
        <div className="overlay flex items-center justify-center gap-5 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          <Link href="/" className="flex items-center justify-center h-8 w-8 border-2 rounded-full border-[#ADB7BE] hover:border-white">
            <CodeBracketIcon className="h-5 w-5 text-[#ADB7BE] group-hover:text-white transition-all" />
          </Link>
          <Link href="/" className="flex items-center justify-center h-8 w-8 border-2 rounded-full border-[#ADB7BE] hover:border-white">
            <EyeIcon className="h-5 w-5 text-[#ADB7BE] group-hover:text-white transition-all" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-semibold text-xl mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
