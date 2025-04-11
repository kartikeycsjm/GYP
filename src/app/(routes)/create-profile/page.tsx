'use client'
import React, { useState } from 'react'
import AddSkill from './AddSkill'
import AddProject from './AddProject'
import AddLinks from './AddLinks'

type projectType = {
  title: string
  description: string
  github: string
}

const Page = () => {
  const [projects, setProjects] = useState<projectType[]>([])
  const [project, setProject] = useState<projectType>({
    title: '',
    description: '',
    github: '',
  })

  const [links, setLinks] = useState<string[]>([])
  const [link, setLink] = useState('')

  const [skills, setSkills] = useState<string[]>([])
  const [skill, setSkill] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')

  const handleSubmit = () => {
    const data = {
      firstName,
      lastName,
      contact,
      city,
      gender,
      skills,
      projects,
      links,
    }
    console.log('Saved Data:', data)
    // You can replace this with actual save logic later
  }

  return (
    <div className='w-full min-h-screen'>
      <div className='w-[90%] border rounded-lg m-auto flex flex-col md:w-[40%]'>
        <div className='flex flex-col gap-3 mx-5 mt-5
        md:flex-row'>
          <div>
            <label className='m-2 text-[18px] font-semibold'>First Name</label>
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-[180px] m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
            />
          </div>
          <div>
            <label className='m-2 font-semibold text-[18px]'>Last Name</label>
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='w-[180px] m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
            />
          </div>
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Contact No.</label>
          <input
            type='text'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          />
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Current City</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          />
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Gender</label>
          <input
            type='text'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          />
        </div>

        {/* Skill Section */}
        <AddSkill
          skills={skills}
          setSkills={setSkills}
          skill={skill}
          setSkill={setSkill}
        />

        {/* Project Section */}
        <AddProject
          projects={projects}
          setProjects={setProjects}
          project={project}
          setProject={setProject}
        />

        {/* Links Section */}
        <AddLinks
          link={link}
          setLink={setLink}
          links={links}
          setLinks={setLinks}
        />

        <button
          onClick={handleSubmit}
          className='p-2 m-7 rounded-lg bg-green-600 font-bold'>
          Save
        </button>
      </div>
    </div>
  )
}

export default Page
