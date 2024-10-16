'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <div className="">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className=" text-white col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold flex flex-col items-center sm:items-start">
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-700 to-purple-500">
                Hello, I'm
              </span>
              <TypeAnimation
                sequence={[
                  "Kimlang",
                  1200,
                  "Front End Developer",
                  1200,
                  "UX/UI Designer",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-lg lg:text-xl">
              I'm passionate about creating and 
              intuitive digital experiences through UX/UI design.
              I hold my project in UX/UI designer at SabaiCode. In other way,
              I am studying at Royal University of Phnom Penh.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row">
              <button className="px-12 py-3 rounded-full mr-4 mb-4 sm:mb-0 bg-gradient-to-br from-blue-500 via-indigo-700 to-purple-400 hover:bg-slate-200 text-white">
                Hire Me
              </button>
              <a
                href="/CV.pdf"
                download="CV.pdf"
                className="px-12 py-3 rounded-full bg-gradient-to-br from-blue-500 via-indigo-700 to-purple-400 hover:bg-slate-200 text-white"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4">
            <div className="rounded-full w-[250px] h-[250px] relative">
              <Image
                src="/image/picture.png" 
                alt="Profile Image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
                width={250}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
