"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Correct the Tab_Data structure
const Tab_Data = [
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2 ">
        <li>Bachelor's Degree in Computer Science</li>
        <li>Full-Stack Web Development Bootcamp III :</li>
        <li>GESL:</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "Skills",
    content: (
      <div className="flex flex-row gap-8">
        <div>
          <ul className="list-disc pl-2">
            <h2 className="font-bold mt-4 mb-2"> Technical skills and tools</h2>
            <li>HTML, CSS, JavaScript</li>
            <li>ReactJS, Next js , Storybook </li>
            <li>Tailwindcss</li>
            <li>git hub</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2 className="font-bold mt-4 mb-2">UX/UI Skills</h2>
            <li>User Research</li>
            <li>User flow</li>
            <li>Prototyping</li>
            <li>Usability testing</li>
            <li>Visual design</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2 className="font-bold mt-4 mb-2">Additional skills</h2>
            <li>communication</li>
            <li>Team Work</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        Build Own Project Chekromlek A platform that to let them communicate and
        sharing their knowledge. worked well with teammate role: UX/UI Designer,
        Front-End developer Conducted user research and usability testing to
        gather valuable insights during my studying at Sabai Code, leading to
        data-driven design decisions and iterative improvements. Created
        high-fidelity prototypes and design mockups using industry-standard
        tools, facilitating effective communication of design concepts to
        stakeholders Developed responsive and interaction webpages using HTML,
        CSS , Nextjs
      </ul>
    ),
  },
];

const Aboutsection = () => {
  const [tab, setTab] = useState("Education"); 
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const currentTabData = Tab_Data.find((item) => item.id === tab);

  return (
    <div>
      <section className="text-white h-full">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
          <Image
            src="/image/image1.png"
            alt="Description"
            width={400}
            height={400}
          />
          <div className="mt-4 md:mt-0 text-lefft flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-5">About Me</h2>
            <p className="text-base md:text-lg">
              Hello, My name is Kimlang and I'm passionate about creating and
              intuitive digital experiences through UX/UI design. I hold my
              project in UX/UI designer at SabaiCode. In Other way, I am
              studying at Royal University of Phnom Penh.
            </p>
            <div className="flex flex-row justify-start mt-8 ">
              <TabButton
                selectTab={() => handleTabChange("Education")}
                active={tab === "Education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("Skills")}
                active={tab === "Skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("Experience")}
                active={tab === "Experience"}
              >
                Experience
              </TabButton>
            </div>
            <div className="mt-4">
              {/* Render content based on the selected tab */}
              {currentTabData ? currentTabData.content : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutsection;
