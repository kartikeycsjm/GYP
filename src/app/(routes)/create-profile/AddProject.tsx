import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { ImCross } from "react-icons/im";

type projectType = {
    title: string
    description: string
    github: string
}

type AddProjectProps = {
    project: projectType
    projects: projectType[]
    setProject: (value: projectType) => void
    setProjects: (value: projectType[]) => void
  }
const AddProject = (
    { project, projects, setProject, setProjects }:AddProjectProps) => {
    const [openProjectInput, setOpenProjectInput] = useState(false)

    const addProject = () => {
        if (
            project.title.trim().length > 0
            &&
            project.github.trim().length > 0
        ) {
            setProjects([project, ...projects])
            setProject({ title: '', description: '', github: '' })
            setOpenProjectInput(false)
        } else {
            alert('Please fill all required fields')
        }
    }

    const del = (ind: number) => {
        const updated = projects.filter((_, index) => index !== ind)
        setProjects(updated)
    }

    return (
        <div className='flex flex-col mx-5'>
            <label className='m-2 font-semibold text-[18px]'>
                Projects
            </label>

            <button
                onClick={() => setOpenProjectInput(!openProjectInput)}
                className='p-2 w-[130px] border border-[rgba(212,205,202)] m-2 rounded-lg'
            >
                <span className='text-[20px]'>+</span> Add Project
            </button>

            {projects.length > 0 && (
                <div className='m-2 p-2 rounded-lg bg-[#000625] 
        border border-[rgba(212,205,202)]'>
                    {projects.map((item, index) => (
                        <div key={index} className='m-2 flex justify-between'>
                            <div className='m-1 text-white'>
                                <p className='font-bold'>{item.title}</p>
                                <p>{item.description}</p>
                                <a href={item.github}
                                    className='text-blue-400 
                                    underline' target="_blank"
                                    rel="noopener noreferrer">
                                    {item.github}
                                </a>
                            </div>
                            <button onClick={() => del(index)}
                                className='m-2 text-[20px] text-red-700'>
                                <MdDelete />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {openProjectInput && (
                <div className='inset-0 fixed backdrop-blur-sm flex 
                items-center justify-center'>
                    <div className='bg-blue-500 flex p-5 flex-col 
                    justify-start rounded-lg'>
                        <button
                            onClick={
                                () => setOpenProjectInput(false)}
                            className='relative cursor-pointer
                                                left-[300px] top-[-5px]'>
                            <ImCross />
                        </button>
                        <input
                            type="text"
                            placeholder='Title'
                            value={project.title}
                            onChange={(e) => setProject({
                                ...project,
                                title: e.target.value
                            })}
                            className='w-[300px] m-2 p-2 rounded-lg 
                            bg-[#000625] text-white border-[rgba(212,205,202)] 
                            focus:outline-none duration-300 focus:border-[blue] 
                            md:w-[400px]
                            placeholder:font-extralight'
                        />

                        <textarea
                            placeholder='Description'
                            value={project.description}
                            onChange={(e) => setProject({
                                ...project,
                                description: e.target.value
                            })}
                            className='w-[300px] m-2 p-2 rounded-lg 
                            bg-[#000625] text-white border-[rgba(212,205,202)] 
                            focus:outline-none duration-300 focus:border-[blue]
                            md:w-[400px]
                            placeholder:font-extralight'>

                        </textarea>

                        <input
                            type="text"
                            placeholder='GitHub Link'
                            value={project.github}
                            onChange={(e) => setProject({ ...project, github: e.target.value })}
                            className='w-[300px] m-2 p-2 rounded-lg 
                            bg-[#000625] text-white border-[rgba(212,205,202)] 
                            focus:outline-none duration-300 focus:border-[blue]
                            md:w-[400px]
                            placeholder:font-extralight'
                        />

                        <button
                            onClick={addProject}
                            className='p-2 w-[130px] border-[rgba(212,205,202)] 
                            m-2 rounded-lg bg-green-500 text-black font-bold'
                        >
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddProject
