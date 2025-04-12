'use client'
import React from "react";

const Page = ({ project }: { project: any[] }) => {
  return (
    <div className="mx-5 min-h-screen flex flex-col mb-8 md:mx-32">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 my-5 lg:m-16">
        Projects
      </h2>
      <div className="flex flex-wrap gap-9 justify-center">
        {project.map((item, index) => (
          <Project
            key={index}
            heading={item.title}
            text={item.description}
            githubLink={item.github}
            liveLink="https://realformgenerator.vercel.app"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

const Project = ({
  heading,
  text,
  githubLink,
  liveLink,
}: {
  heading: string;
  text: string;
  githubLink: string;
  liveLink: string;
}) => {
  return (
    <div className="w-full bg-[#000600] min-h-[170px] flex items-start justify-center flex-col border-[#f4f4f6] rounded-lg gap-3 md:w-[48%] p-5">
      <h3 className="font-semibold text-[17px] lg:text-[22px]">{heading}</h3>
      <p className="text-[#717882] text-[16px]">{text}</p>
      <div className="flex gap-4 mt-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};
